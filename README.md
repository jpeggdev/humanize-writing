# humanize-writing

A Claude Code skill that rewrites AI-generated content to sound like a human wrote it.

## What it does

Detects and fixes common AI writing patterns through an 8-pass editing process:

1. **Structure tells** -- formulaic sections, identical list lengths, tidy takeaways
2. **Significance inflation / promotional language** -- "pivotal moment," "nestled," "vibrant"
3. **AI vocabulary** -- "delve," "landscape," "leverage," "tapestry," and dozens more
4. **Grammar-level patterns** -- copula avoidance, -ing phrases, synonym cycling, false ranges
5. **Rhythm and style** -- metronomic cadence, em dash overuse, boldface, emoji, curly quotes
6. **Hedging, filler, and vague attributions** -- "It's worth noting," chatbot artifacts, sycophancy
7. **Connective tissue** -- "Moreover," "Furthermore," "Additionally" on repeat
8. **Human texture and soul** -- adding opinions, lived experience, personality

See [SKILL.md](SKILL.md) for the full editing process and [references/ai-tells.md](references/ai-tells.md) for the complete detection checklist.

## Install

### Via skills.sh (GitHub-based)

```
npx skills add jpeggdev/humanize-writing
```

### Via npm

```
npm install -g @jpeggdev/humanize-writing
```

The postinstall script copies the skill files to `~/.claude/skills/humanize-writing/` (and equivalent directories for Cursor and Windsurf).

## Usage

Once installed, the skill activates automatically in Claude Code when you say things like:

- "humanize this"
- "sounds like AI"
- "make it sound human"
- "too robotic"
- "de-AI this"

## Credits

This skill combines two approaches:
- The pass-based editing workflow and ai-tells reference from [humanize-writing](https://github.com/jpeggdev/humanize-writing)
- The 24 Wikipedia-sourced patterns and "soul" philosophy from [humanizer](https://github.com/blader/humanizer) by blader

Primary reference: [Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing), maintained by WikiProject AI Cleanup.

## Version History

- **2.0.0** - Combined humanize-writing and humanizer-blader into a single skill. Added passes for significance inflation, grammar-level patterns, and soul/personality. Expanded ai-tells.md with additional patterns.
- **1.0.1** - npm packaging fixes
- **1.0.0** - Initial release

## Uninstall

```
npm uninstall -g @jpeggdev/humanize-writing
```

This removes the skill files from all agent skill directories.

## License

MIT
