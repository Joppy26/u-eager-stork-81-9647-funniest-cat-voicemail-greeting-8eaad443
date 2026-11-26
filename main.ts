import { mkdirSync, writeFileSync } from "node:fs";
// Miso runs the voicemail now; the human just pays the treats.
const LINE = "Meow. This is Miso. I am napping on your phone, so leave a message after the beep. Treats accepted as payment.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
