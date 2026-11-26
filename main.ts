import { mkdirSync, writeFileSync } from "node:fs";
const LINE = "Meow. You've reached Miso. I'm asleep on your laptop, so leave a message after the beep, or just open the tuna. Beep.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
