import { mkdirSync, writeFileSync } from "node:fs";
const LINE = "Meow. You've reached Miso. I knocked your phone off the table, so leave a message after the beep. Tuna bribes accepted.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
