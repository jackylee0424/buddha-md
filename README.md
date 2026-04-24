# buddha-md

A text archive of Traditional Chinese transcripts from Teacher Li Ruilie's (李瑞烈老師) lecture series on the **Diamond Sutra** (金剛般若波羅蜜經).

Source playlist: https://www.youtube.com/watch?v=PvFx_UBTp9c&list=PLQP2d9x3sdYYfYK955L0rfZO3TPoRX5yQ

## About

The Diamond Sutra (金剛經, *Vajracchedikā Prajñāpāramitā Sūtra*) is one of the most influential texts in Mahayana Buddhism. This repository preserves lecture transcripts in plain text for reading, searching, and downstream editorial or archival work.

The lectures draw on the insights of classical masters including:

- **惠能六祖** (the Sixth Patriarch Huineng)
- **呂純陽祖師** (Ancestor Lü Chunyang)
- **月溪法師** (Master Yuexi)
- **道濟禪師** (Chan Master Daoji)

The teaching emphasis, as reflected in the lectures, is that understanding the sutra must be joined to actual practice: *"不修即凡夫，修耶同聖智"*.

## Repository layout

```text
.
├── README.md
├── LICENSE
├── index.html
├── package.json
├── scripts/
│   └── validate_transcripts.py
├── src/
│   ├── App.tsx
│   ├── data/siteData.ts
│   └── styles.css
└── transcripts/
    ├── gold01.txt
    ├── gold02.txt
    ├── ...
    └── gold27.txt
```

## Contents

All transcripts are stored in the [`transcripts/`](transcripts/) directory.

- Sessions currently included: **27**
- Naming convention: `goldNN.txt`
- Range: `gold01.txt` → `gold27.txt`

Each file is a plain-text transcript of one lecture session in Traditional Chinese.

## Validation

A small integrity checker is included for archive maintenance.

```bash
python3 scripts/validate_transcripts.py
```

It verifies:

- session-number continuity
- UTF-8 decoding
- duplicate-file detection by SHA-256
- basic size / line-count reporting

For machine-readable output:

```bash
python3 scripts/validate_transcripts.py --json
```

## Website

This repository now includes a Vite + React website that presents the lecture material in an ancient-style Buddhist visual language.

### Local development

```bash
npm install
npm run dev
```

### Production build

```bash
npm run build
npm run preview
```

### UI smoke test

```bash
npm test
```

## Usage

Read directly from the command line:

```bash
# Read one session
less transcripts/gold01.txt

# Search across all sessions
grep -R "般若" transcripts/
```

## Provenance and rights

This repository identifies the public lecture playlist used as the source for the archived transcripts. If these transcripts are later revised, normalized, or supplemented with editorial metadata, that provenance should be kept alongside the files.

The repository is currently licensed under the [MIT License](LICENSE). If publication or redistribution terms for the underlying lecture content need to be narrowed or clarified, update this section accordingly.
