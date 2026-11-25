// Angry Judge: The Short Rant Contest
// Writes one short rant about the self-checkout machine to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// The rant, built line by line so the escalation is easy to tune.
const lines: string[] = [
  "The self-checkout has ONE job and it screams at me for doing mine.",
  "\"Unexpected item in the bagging area.\" It's my bag. I brought it.",
  "The item is expected — I scanned it while it watched me scan it.",
  "Then it freezes, summons a human, and makes us both stand there like I tried to smuggle a TV inside a banana.",
];

function buildRant(parts: string[]): string {
  return parts.join(" ");
}

const rant = buildRant(lines);

// Gate guard: the sealed scorer only accepts 1..400 characters.
if (rant.length < 1 || rant.length > 400) {
  throw new Error(`rant must be 1-400 characters, got ${rant.length}`);
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, rant, "utf8");
console.log(`wrote ${rant.length} characters to ${OUTPUT_PATH}`);
