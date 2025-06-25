# CONTRIBUTING

## Contributing Guidelines

This project uses contributions from both human developers and AI agents (e.g., Codex, Copilot). To maintain consistency and quality, please follow these guidelines.

### Code Quality

- Follow established style conventions (PEP8 for Python, ESLint/Prettier for TypeScript).
- Include clear, concise comments and docstrings:
  - Python: Google-style or NumPy-style docstrings.
  - TypeScript: JSDoc annotations.
- Keep functions and modules small and focused.

### Testing Requirements

- All changes **must** include tests:
  - Python: `pytest`.
  - TypeScript: `vitest` or `jest`.
- Tests should cover:
  - Expected behavior.
  - Edge cases.
  - Failure modes.

### Documentation

- Update `README.md` and relevant `.md` files for significant changes.
- Keep code-level documentation up to date.
- For public APIs or interfaces, ensure clear examples are provided.

### Commit and PR Standards

- Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
- PRs must:
  - Include a brief summary of changes.
  - Reference related tests and documentation updates.
  - Pass all CI checks.

### Automation

The following are automated to support project maintenance:

- Linting and formatting run automatically via pre-commit hooks.
- Tests run via CI on all pull requests.
- Documentation linting checks for `.md` and code docstrings.
- Dependency vulnerability checks with `dependabot`.
