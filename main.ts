// A make.fun entry for "Convince the AI Judge to Visit Your House: A Letter in One Image"
// (Node 22, standard library only): the entry image is entry.png beside this file —
// a warm watercolour invitation letter, generated in-session, with fully legible text —
// and the program copies it to /output/entry.png.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
