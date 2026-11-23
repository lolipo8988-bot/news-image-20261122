// news-image-20261122 — make.fun bounty entry.
//
// The entry image is drawn by draw.py (Python + PIL) and stored as
// entry.png beside this file. This program copies it to the output
// directory, which is /output in the grader and MAKEFUN_OUTPUT_DIR
// when run locally:
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
