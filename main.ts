import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My agent reads my inbox, my calendar, my files — then schedules a meeting with me to ask what I do for a living.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`wrote ${line.length} chars to /output/entry.txt`);
