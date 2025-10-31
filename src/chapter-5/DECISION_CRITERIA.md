# Decision Criteria

When to Use: Hooks vs Commands vs Agents vs CLAUDE.md?

### 1. CLAUDE.md - Behavioral Guidelines

Use when: You want to change HOW Claude behaves globally or per-project

Criteria:

- ✅ Style preferences (no comments, no emojis, code formatting)
- ✅ Language/framework conventions (always use TypeScript strict mode)
- ✅ Project-specific patterns (our API always returns JSON with snake_case)
- ✅ Quality standards (always write tests, never use any type)
- ✅ Restrictions (never install packages without asking, avoid library X)

Examples:

~/.claude/CLAUDE.md (global)
- Never use comments
- Always use const over let
- Prefer functional programming
- Never use emojis

.claude/CLAUDE.md (project-specific)
- This project uses Redux Toolkit
- API responses are snake_case
- All components must have PropTypes
- Test files go in __tests__ directory

Think of it as: Your .eslintrc or .editorconfig but for Claude's behavior

---
### 2. Custom Commands - Reusable Prompts

Use when: You type the same instructions repeatedly

Criteria:

- ✅ You find yourself copy-pasting the same prompt
- ✅ Task is well-defined and repeatable
- ✅ You want quick access via /command-name
- ✅ Task is single-purpose and focused
- ✅ Works within a single conversation context

Examples:

.claude/commands/review.md
Review $1 for:
- Security vulnerabilities
- Performance issues
- Edge cases
- Code duplication

Usage: /review src/auth.ts

.claude/commands/test.md
Generate comprehensive tests for $ARGUMENTS including:
- Happy path
- Edge cases
- Error handling
- Mocks for external dependencies

Usage: /test src/payment.js

Think of it as: Git aliases or bash aliases for Claude

---
### 3. Hooks - Event-Driven Automation

Use when: You want something to happen automatically on events

Criteria:

- ✅ Needs to run automatically (no manual trigger)
- ✅ Responds to events (file write, tool call, session start)
- ✅ Integrates with external tools (git, linters, formatters)
- ✅ Validation or enforcement (block bad actions)
- ✅ Logging and monitoring

Examples:

Auto-format on save:
```
{
  "hooks": {
    "tool-result": {
      "command": "if [[ '${TOOL_NAME}' == 'Write' ]]; then prettier --write '${TOOL_ARGS}'; fi",
      "enabled": true
    }
  }
}
```

Prevent commits to main:
```
{
  "hooks": {
    "tool-call": {
      "command": "if [[ '${TOOL_NAME}' == 'Bash' ]] && echo '${TOOL_ARGS}' | grep -q 'git push.*main'; then
echo 'Blocked: Cannot push to main'; exit 1; fi",
      "enabled": true,
      "blocking": true
    }
  }
}
```

Think of it as: Git hooks or GitHub Actions for Claude

---
### 4. Custom Agents - Complex Multi-Step Tasks

Use when: Task requires multiple rounds of searching, analysis, and decision-making

Criteria:

- ✅ Task is exploratory (need to search, then decide, then search again)
- ✅ Multiple tool calls required (10+ operations)
- ✅ Requires decision trees (if X found, then do Y, else do Z)
- ✅ Needs to work autonomously without user input
- ✅ Complex context management across many files

Examples:

Refactoring Agent:
- Search for all usages of a function
- Analyze each usage context
- Determine safe refactoring strategy
- Apply changes across multiple files
- Verify nothing broke

Security Audit Agent:
- Scan codebase for patterns
- Analyze dependencies
- Check configuration files
- Cross-reference with CVE databases
- Generate report with severity levels

Migration Agent:
- Find all files using old API
- Understand usage patterns
- Generate migration plan
- Apply transformations
- Update tests

Think of it as: A specialized team member who can work independently on complex tasks

---
Decision Matrix

| Need                                      | Solution       |
|-------------------------------------------|----------------|
| Claude always formats code a certain way  | CLAUDE.md      |
| Run prettier after every file write       | Hook           |
| Quick code review on demand               | Custom Command |
| Audit entire codebase for security issues | Custom Agent   |
| Never use comments                        | CLAUDE.md      |
| Auto-run tests after changes              | Hook           |
| Generate API documentation                | Custom Command |
| Migrate 50 files from old to new API      | Custom Agent   |
| Enforce git commit message format         | Hook           |
| Refactor function with specific pattern   | Custom Command |
| Analyze and fix all TypeScript errors     | Custom Agent   |
| Always use tabs not spaces                | CLAUDE.md      |

---
Practical Combination Example

Scenario: You're building a React app and want comprehensive tooling

CLAUDE.md (Project-wide rules)
- Always use functional components
- Props use TypeScript interfaces
- State management uses Zustand
- Never use `any` type

Custom Commands (Quick actions)
/component - Generate new React component with tests
/hook - Create custom React hook
/test - Generate tests for component

Hooks (Automation)
```
{
  "tool-result": {
    "command": "prettier --write && eslint --fix",
    "enabled": true
  }
}
```

Custom Agent (Complex tasks)
- Component refactoring agent
- Accessibility audit agent
- Performance optimization agent

---
Quick Selection Guide

Ask yourself:

1. Is it about HOW Claude should work? → CLAUDE.md
2. Do I type this same prompt often? → Custom Command
3. Should this happen automatically? → Hook
4. Is this a complex multi-step investigation? → Custom Agent