# Commands

Let's explore claude code [commands](https://docs.claude.com/en/docs/claude-code/slash-commands.md).

## /init

Once you start a project with claude code, you run `/init`. Claude will read the whole codebase and create a file in your project called `CLAUDE.md` in the porject path.

<img src="../images/05-cc-init-cmd.png" width="600"/>

The resulting `CLAUDE.md` will vary depending on the project, but likely to contain:
- Project overview
- Build and serve instructions
- Version management details
- Content structure explanation
- Configuration information

`CLAUDE.md` works as a form of cache so claude don't need read all the codebase all the time to figureout this information. Because:
* Claude code has no memory between sessions
* Reduce the ammount of tokens used in each interaction
* Prevents some guessing from claude

`CLAUDE.md` is documentation for AI not for humans. You should run this program everytime you start a new project with claude code.

## /context

This command allow you to see where claude code is using context from. It shows the files claude code has read to answer your questions.

<img src="../images/05-cc-context.png" width="600"/>

Why this is useful?
* Transparency: You can see exactly which files influenced the AI's response.
* Diagnostics:  See if you're running out of space.
* Debug: You can see what is being loaded to claude memory.

You should run this program time to time to see how the context is being used.

## /clear

This command clear the conversation history with claude code. It will remove all the messages exchanged in the current session.

## /compact

This command will compact the context used by claude code. It will remove some of the less relevant files from the context to make space for new files.

## /config

Allow you to configure several aspects of claude code. Like: If you want claude to auto-compact or not, if claude should show tips or not, what theme do you want in the terminal, the output style, what LLM model to use, to have code rewinding enabled or not, among other options.

IF you use subscription based, you can see when a progress bar of how much of your tokens quota you have used. Also when the reset will happen.

<img src="../images/05-cc-status-cmd.png" width="600"/>