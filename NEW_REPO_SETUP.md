# NEW_REPO_SETUP.md

# Fast Transients Project Setup Checklist

Use this guide to quickly bootstrap a new repository with consistent automation and maintenance standards.

### 1. Initialize Repository
- Create a new GitHub repository
- Clone it locally

### 2. Add Project Maintenance Files
- Copy the following files from an existing project:
  - `.github/CONTRIBUTING.md`
  - `.github/SECURITY.md`
  - `AGENTS.md`
  - `.pre-commit-config.yaml`
  - `.github/dependabot.yml`
  - `.github/workflows/ci.yml`

### 3. Install Pre-Commit
```bash
pip install pre-commit
pre-commit install
```

### 4. Verify and Adjust CI
- Ensure `.github/workflows/ci.yml` matches the project language (Python, TypeScript)
- Adjust test commands if needed

### 5. Configure Dependabot
- `.github/dependabot.yml` is pre-configured for Python and npm dependencies
- Adjust package directories if your project layout differs

### 6. Review & Commit
- Run pre-commit manually:
```bash
pre-commit run --all-files
```
- Commit changes and push to GitHub

### 7. Optional: Project-Specific Additions
- Update `README.md`
- Add license file if needed
- Customize `.pre-commit-config.yaml` for project-specific linters or tools

---

**Result:** Your new repo is ready with automated testing, linting, dependency updates, and clear contributor expectations.
