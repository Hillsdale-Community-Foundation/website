# Agent Guidelines

This repository holds the Hillsdale Community Foundation website built with Next.js, TypeScript, and Tailwind CSS.

## Development Environment

- Node version is specified in `.codex/environment.json` (currently 20.19.2).
- Use `npm` for all commands.

## Code Style

- Use 2-space indentation for TypeScript, JavaScript, and JSON files.
- End files with a newline.

## Validation Steps

1. After modifying code, run `npm run typecheck`.
2. Build the project with `npm run build`.
3. Commit only when both commands succeed.

## Pull Requests

- Summaries should mention key changes.
- Include test output showing the results of `npm run build` and `npm run typecheck`.

## AI Agent Instructions

These rules apply to AI agents generating code, documentation, or tests.

### Testing

- Always generate corresponding unit tests for new code.
- Aim for high coverage of logic branches and edge cases.
- Ensure all tests pass before suggesting code for merge.

### Documentation

- Add/Update docstrings for all public functions, classes, and modules.
- Update `README.md` or other `.md` files if functionality or usage changes.

### Commits & PRs

- Use conventional commit formats (`feat:`, `fix:`, `docs:`).
- PR descriptions should summarize the intent and note updated tests/docs.

### Notes

- AI output is reviewed by a human (currently the repository owner) before merge.
- Incomplete or low-quality code will be rejected.

### Automation

- Linting, testing, and documentation checks are triggered automatically via CI.
- AI agents are expected to generate code that passes all automated checks.
