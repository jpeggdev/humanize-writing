# humanize-writing

A Claude Code skill that rewrites AI-generated content to sound like a human wrote it.

## What it does

Detects and fixes common AI writing patterns:

- **Formulaic structure** — every section following the same setup/explanation/takeaway template
- **AI vocabulary** — "delve," "landscape," "leverage," "tapestry," and dozens more
- **Robotic rhythm** — every sentence the same length, no short punchy ones, no fragments
- **Chronic hedging** — "It's worth noting," "While there are certainly challenges..."
- **Missing personality** — no opinions, asides, or informal register anywhere

See [SKILL.md](SKILL.md) for the full editing process and [references/ai-tells.md](references/ai-tells.md) for the complete detection checklist.

## Install

### Via skills.sh (GitHub-based)

```
npx skills add jpeggdev/humanize-writing
```

### Via npm

```
npm install -g @jpegg/humanize-writing
```

The postinstall script copies the skill files to `~/.claude/skills/humanize-writing/` (and equivalent directories for Cursor and Windsurf).

## Usage

Once installed, the skill activates automatically in Claude Code when you say things like:

- "humanize this"
- "sounds like AI"
- "make it sound human"
- "too robotic"
- "de-AI this"

## Uninstall

```
npm uninstall -g @jpegg/humanize-writing
```

This removes the skill files from all agent skill directories.

## License

MIT
