# Custom Commands 

Another very good feature in claude code is custom commands. Custom commands allow you to create your own commands. The nice thing is that claude will never run them, it will only run if you explicitly tell it to. This is useful for creating commands that you want to use frequently without having to type them out each time.

Custom commands are useful for expensive tasks and you dont often between sesions but dont run on every prompt. Here are some example of custom commands:
* /report.md: A command to generate a report based on data from a database.
* /english.md: A command that fix your english typos and grammar.
* /summarize.md: A command that summarizes long texts into concise points.
* /translate.md: A command that translates text from one language to another.

To create a custom command, you simply create a markdown file in the `~/.claude/commands/` directory with the name of the command you want to create. For example, to create a custom command called `/report.md`, you would create a file called `report.md` in the `~/.claude/commands/` directory.

Commands are just a markdown file with instructions on what to do. You can use any markdown formatting you like, including code blocks, lists, and images.