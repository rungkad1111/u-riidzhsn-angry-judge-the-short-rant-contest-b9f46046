// Angry Judge: The Short Rant Contest
// Writes one short rant about the self-checkout machine to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// The rant, built as beats so the escalation is easy to tune:
// accusation, rebuttal, evidence, then the humiliating verdict.
const beats = {
  accusation:
    "The self-checkout has ONE job, and it screams at me for doing mine: \"Unexpected item in the bagging area!\"",
  rebuttal: "It's my bag. I brought it from home, on purpose.",
  evidence:
    "And the item is expected — I scanned it while its camera watched me scan it.",
  verdict:
    "Then the light turns red, my milk is held hostage, and a human is summoned to judge me like I hid a TV inside a banana.",
};

function buildRant(parts: string[]): string {
  return parts.filter((part) => part.trim().length > 0).join(" ");
}

const rant = buildRant([
  beats.accusation,
  beats.rebuttal,
  beats.evidence,
  beats.verdict,
]);

// Gate guard: the sealed scorer only accepts 1..400 characters.
if (rant.length < 1 || rant.length > 400) {
  throw new Error(`rant must be 1-400 characters, got ${rant.length}`);
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, rant, "utf8");
console.log(`wrote ${rant.length} characters to ${OUTPUT_PATH}`);
