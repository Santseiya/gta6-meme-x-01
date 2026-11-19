// gta6-meme-x-01 entry: this program hands in the X post that carries the meme.
//
// Its whole job is to copy POST.json from the repository root into the grader's
// output directory, where the gate reads it. The post itself is the entry: the
// house reads the post from X (its first picture, then its text) and hands that
// to the judge, so nothing this program writes about the post is judged.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand
// in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const repoDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(repoDir, "POST.json");
const target = join(outDir, "POST.json");

mkdirSync(outDir, { recursive: true });

try {
  copyFileSync(source, target);
} catch (error) {
  console.error(`Could not copy ${source} to ${target}: ${(error as Error).message}`);
  process.exit(1);
}
