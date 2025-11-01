# Custom Commands

Another very good feature in claude code is custom commands. Custom commands allow you to create your own commands. The nice thing is that claude will never run them, it will only run if you explicitly tell it to. This is useful for creating commands that you want to use frequently without having to type them out each time.

Custom commands are useful for expensive tasks that you don't run often between sessions but don't run on every prompt. Here are some examples of custom commands:
* /report.md: A command to generate a report based on data from a database.
* /english.md: A command that fix your english typos and grammar.
* /summarize.md: A command that summarizes long texts into concise points.
* /translate.md: A command that translates text from one language to another.

To create a custom command, you simply create a markdown file in the `~/.claude/commands/` directory with the name of the command you want to create. For example, to create a custom command called `/report.md`, you would create a file called `report.md` in the `~/.claude/commands/` directory.

Commands are just a markdown file with instructions on what to do. You can use any markdown formatting you like, including code blocks, lists, and images.

## Custom Commands Examples

Example 1: Code Review Command
```
File: .claude/commands/review.md
Review the changes in this file for:
- Bugs and edge cases
- Performance issues
- Security vulnerabilities
- Code style and best practices
- Missing error handling

Provide specific line numbers for issues found.

Usage: /review @src/auth.js
```

Example 2: Test Generation Command
```
File: .claude/commands/tests.md
Generate comprehensive tests for $1 covering:
- Happy path scenarios
- Edge cases
- Error conditions
- Boundary values

Use the existing test patterns in this project.

Usage: /tests src/utils/validator.js
```

Example 3: Performance Audit
```
File: .claude/commands/perf.md
Analyze $1 for performance issues:
- Unnecessary loops or iterations
- Database query optimization
- Memory allocations
- Blocking operations
- Caching opportunities

Suggest specific optimizations with code snippets.

Usage: /perf @api/users.ts
```