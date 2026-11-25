// A make.fun entry for "Convince the AI Judge to Visit Your House: A Letter in One Image"
// (Node 22, standard library only): the entry image is entry.png beside this file —
// a warm watercolour invitation letter, generated in-session, with fully legible text —
// and the program copies it to /output/entry.png.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const src = new URL('./entry.png', import.meta.url);
const dst = join(outDir, 'entry.png');
copyFileSync(src, dst);

// Read it back: refuse a partial or altered write rather than pass a
// truncated image to the gate.
const written = readFileSync(dst);
const original = readFileSync(src);
if (!written.equals(original)) {
  throw new Error('entry.png read-back does not match the shipped image');
}
if (written.length > 1048576) {
  throw new Error(`entry.png is ${written.length} bytes, over the 1 MiB gate`);
}
