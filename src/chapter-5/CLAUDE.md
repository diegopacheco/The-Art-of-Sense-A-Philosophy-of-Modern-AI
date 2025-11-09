# Claude.md

Claude.md is a global file. Consider this file to be like `~/.bashrc` or `~/.zshrc` for Claude Code. It's a global file that will be loaded into every single claude code session you start.

So you will want to have, very generic and global instructions here that you want claude to always follow.

IF something is very project specific, you should put that in the project level `claude.md` file. Which is generated when you run `/init` in claude code.

## Here is my CLAUDE.md file

```
~/.claude/CLAUDE.md
```

```
# CLAUDE.md

Diego Pacheco Claude global guidelines.

## General Guidelines

* Never use comments, never comment anything.
* Never use the words: "demo", "demonstration" or "example", never ever.
* Make sure the code is as simple as possible.
* Make sure the code is we'll written and make sense.
* Do not do things I did not ask for in explicit prompts.
* Use the least number of libraries as possible, if possible no libraries.

## Github Pull Request(PR) Guidelines

* Always explain the task
* Always put the whole prompt on the PR description
* Always run the tests and get the test output on the PR.

## When Writing BASH scripts

* Never use comments, never ever.
* Never do sleep bigger than 1
* When need to wait for a POD or a docker container in docker or k8s make sure you will use a loop and check the condition and do max sleep 1.
* Don't use icons and enomjis on bash script.

## Dockerfile

* Make sure you are using the latest versions
* Do not write comments, never comment.
* Make sure you don't do ENTER between commands make it compact

## Docker Compose

* This section only apply if you have docker-compose requirements otherwise ignore it.
* docker-compose it's alias to podman, keep that in mind.
* always have a start.sh where you start docker-compose.
* always have a stop.sh to stop docker-compose.
* always have a test.sh where you show the feature is working.
* Don't use timeouts more than 1 min
```