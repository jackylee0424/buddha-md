#!/usr/bin/env python3
from __future__ import annotations

import argparse
import hashlib
import json
import sys
from pathlib import Path


def sha256_bytes(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def analyze(transcripts_dir: Path) -> dict:
    files = sorted(transcripts_dir.glob('gold*.txt'))
    if not files:
        raise FileNotFoundError(f'No transcript files found in {transcripts_dir}')

    session_numbers: list[int] = []
    rows: list[dict] = []
    sha_map: dict[str, list[str]] = {}
    utf8_errors: list[dict] = []

    for path in files:
        stem_num = path.stem.removeprefix('gold')
        try:
            session = int(stem_num)
        except ValueError:
            continue

        raw = path.read_bytes()
        sha = sha256_bytes(raw)
        sha_map.setdefault(sha, []).append(path.name)

        try:
            text = raw.decode('utf-8')
            decode_ok = True
            lines = text.splitlines()
        except UnicodeDecodeError as exc:
            decode_ok = False
            lines = []
            utf8_errors.append(
                {
                    'file': path.name,
                    'error': str(exc),
                }
            )

        session_numbers.append(session)
        rows.append(
            {
                'name': path.name,
                'session': session,
                'bytes': len(raw),
                'lines': len(lines),
                'blank_lines': sum(1 for line in lines if not line.strip()),
                'max_line_length': max((len(line) for line in lines), default=0),
                'utf8_ok': decode_ok,
                'contains_crlf': b'\r\n' in raw,
                'sha256': sha,
            }
        )

    max_session = max(session_numbers)
    missing_sessions = [n for n in range(1, max_session + 1) if n not in session_numbers]
    duplicate_groups = [names for names in sha_map.values() if len(names) > 1]
    crlf_files = [row['name'] for row in rows if row['contains_crlf']]

    return {
        'transcripts_dir': str(transcripts_dir),
        'file_count': len(rows),
        'min_session': min(session_numbers),
        'max_session': max_session,
        'missing_sessions': missing_sessions,
        'duplicate_groups': duplicate_groups,
        'utf8_errors': utf8_errors,
        'crlf_files': crlf_files,
        'total_bytes': sum(row['bytes'] for row in rows),
        'total_lines': sum(row['lines'] for row in rows),
        'files': rows,
    }


def print_human(report: dict) -> None:
    print(f"Transcript dir: {report['transcripts_dir']}")
    print(f"Files: {report['file_count']} | Sessions: {report['min_session']}–{report['max_session']}")
    print(f"Total lines: {report['total_lines']} | Total bytes: {report['total_bytes']}")

    if report['missing_sessions']:
        print('Missing sessions:', ', '.join(map(str, report['missing_sessions'])))
    else:
        print('Missing sessions: none')

    if report['duplicate_groups']:
        print('Duplicate groups:')
        for group in report['duplicate_groups']:
            print(' -', ', '.join(group))
    else:
        print('Duplicate groups: none')

    if report['utf8_errors']:
        print('UTF-8 errors:')
        for item in report['utf8_errors']:
            print(f" - {item['file']}: {item['error']}")
    else:
        print('UTF-8 errors: none')

    if report['crlf_files']:
        print('CRLF files:', ', '.join(report['crlf_files']))
    else:
        print('CRLF files: none')



def main() -> int:
    parser = argparse.ArgumentParser(description='Validate buddha-md transcript archive integrity.')
    parser.add_argument(
        '--transcripts-dir',
        default=Path(__file__).resolve().parents[1] / 'transcripts',
        type=Path,
        help='Path to the transcripts directory (default: ../transcripts)',
    )
    parser.add_argument('--json', action='store_true', help='Print JSON report instead of human-readable output.')
    args = parser.parse_args()

    try:
        report = analyze(args.transcripts_dir)
    except FileNotFoundError as exc:
        print(str(exc), file=sys.stderr)
        return 2

    if args.json:
        print(json.dumps(report, ensure_ascii=False, indent=2))
    else:
        print_human(report)

    has_errors = bool(report['missing_sessions'] or report['duplicate_groups'] or report['utf8_errors'])
    return 1 if has_errors else 0


if __name__ == '__main__':
    raise SystemExit(main())
