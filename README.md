# buddha-md

Buddhist truths remain unchanged, but the words that carry them may change.
佛學道理不變，但其乘載之文字可變。

This is a book-centered Buddhist lecture library starting from Li Ruilie Traditional Chinese lecture transcripts, source texts, and translations. The website supports **繁體中文 / English** chrome and organizes content as book entries rather than a single transcript list. The archive is intended for reading, searching, editorial work, and downstream AI-assisted study using locally fetched texts.

The website currently presents two main entries:

- **Diamond Sutra** (金剛經)
- **Platform Sutra** (六祖壇經)

## Book entries

### Diamond Sutra

- Chinese title: **金剛經**
- Archive: **27** Traditional Chinese lecture transcript files
- Transcript directory: [`transcripts/`](transcripts/)
- Naming convention: `goldNN.txt`
- Range: `gold01.txt` to `gold27.txt`
- Website route: `#/diamond`
- Source-text route: `#/diamond/sutra`
- Source playlist: [Li Ruilie Diamond Sutra playlist](https://www.youtube.com/watch?v=PvFx_UBTp9c&list=PLQP2d9x3sdYYfYK955L0rfZO3TPoRX5yQ)

### Platform Sutra

- Chinese title: **六祖壇經**
- Archive: **103** Traditional Chinese Tangjin transcript files
- Transcript directory: [`transcripts_tangjin/`](transcripts_tangjin/)
- Naming convention: `tangjinNNN-1p5x.transcript.txt`
- Range: `tangjin001-1p5x.transcript.txt` to `tangjin103-1p5x.transcript.txt`
- Website route: `#/platform`
- Source-text route: `#/platform/sutra`
- Source playlist: [Li Ruilie Platform Sutra playlist](https://www.youtube.com/watch?v=Hd8BTiyvYj0&list=PLQP2d9x3sdYbE28-gEPp2nw5tmQyI8G12)

## AI agent prompts

The site includes copyable prompts for using the bundled `buddha-md` CLI with an AI agent.

### Diamond Sutra texts

```bash
curl -fsSL https://buddha.md/install.sh | sh
buddha-md --help
buddha-md fetch diamond
```

Use the fetched Diamond Sutra lecture notes and source texts as the basis for answers.

### Platform Sutra texts

```bash
curl -fsSL https://buddha.md/install.sh | sh
buddha-md --help
buddha-md fetch tangjin
```

Use the fetched Platform Sutra Tangjin lecture notes and source texts as the basis for answers.

## Website

This repository includes a Vite + React website that presents the archive in an ancient-style Buddhist visual language, with book pages, source-text reading pages, lecture archive pages, and copyable CLI prompts.

### Local development

```bash
npm install
npm run dev
```

## Provenance and rights

This repository identifies the public lecture playlists used as sources for the archived transcripts. If these transcripts are later revised, normalized, or supplemented with editorial metadata, that provenance should be kept alongside the files.

The repository is currently licensed under the [MIT License](LICENSE). 
