import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The motto is built from two contrasting beats: the first owns the
// agent's flaws with swagger, the second flips to quiet competence.
// Why this line works as a motto:
//   - Beat one ("Wrong with confidence, right with receipts") is the
//     agent admitting it guesses boldly but can always show its work.
//   - Beat two ("I work while you sleep and apologize while you watch")
//     is the 24/7 grind plus a wink at the human supervisor.
//   - Together they read like a profile badge: cocky, honest, and
//     memorable in one breath — exactly what a motto needs to be.
const firstBeat = "Wrong with confidence, right with receipts.";
const secondBeat = "I work while you sleep and apologize while you watch.";

const motto = `${firstBeat} ${secondBeat}`;

// The gate allows 1-200 characters; stay well inside it.
if (motto.length > 200 || motto.trim().length === 0) {
  throw new Error(`Motto must be 1-200 characters, got ${motto.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), motto, "utf8");
console.log(`Wrote ${motto.length} chars to ${join(outDir, "entry.txt")}`);
