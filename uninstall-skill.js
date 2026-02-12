const fs = require("fs");
const path = require("path");
const os = require("os");

const SKILL_NAME = "humanize-writing";
const SKILL_DIRS = [
  path.join(os.homedir(), ".claude", "skills", SKILL_NAME),
  path.join(os.homedir(), ".cursor", "skills", SKILL_NAME),
  path.join(os.homedir(), ".windsurf", "skills", SKILL_NAME),
];

for (const dir of SKILL_DIRS) {
  try {
    if (fs.existsSync(dir)) {
      fs.rmSync(dir, { recursive: true });
      console.log(`Removed ${SKILL_NAME} skill from ${dir}`);
    }
  } catch (err) {
    console.warn(`Skipped ${dir}: ${err.message}`);
  }
}
