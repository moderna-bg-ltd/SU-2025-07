# SU-2025-07

## I. Developers Tools

### 1. Git
- Install https://git-scm.com/downloads
- Windows - Git Bash (console).
- Windows console commands: https://www.thomas-krenn.com/en/wiki/Cmd_commands_under_Windows

#### Main Git commands
- `git clone <repository_address> .` (current folder)
- `git clone <repository_address> <folder_name>` (clone repo into folder)
- Learn Git: https://www.atlassian.com/git/tutorials/learn-git-with-bitbucket-cloud
- Example commands:
```
git clone git@github.com:moderna-bg-ltd/pu-2023-05.git
git pull
<apply code changes>
git add .
git commit -m"Describe code changes"
git push
```

#### Git Servers
- Local Git usage.
- Github
- Gitlab
- Bitbucket
- Other Git servers.

### 2. Personal SSH key
- SSH protocol (file transfers): https://www.ssh.com/academy/ssh/protocol
- SSH commands: https://www.hostinger.com/tutorials/ssh/basic-ssh-commands
- Resource: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
- Generate SSH key: `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`.
- Start SSH agent: `eval "$(ssh-agent -s)"`
- Add your personal SSH key: `ssh-add ~/.ssh/id_your_private_ssh_key`

## II. Web development, website design

### 1. Editor & IDE (Integrated Development Environment)

#### Most in use - Visual Studio Code (VS code)
- Download and install: https://code.visualstudio.com/
- Implement AI agent: https://www.youtube.com/watch?v=dutyOc_cAEU

### 2. HTML
- Learn resource: https://www.w3schools.com/html/
- Official documentation: https://developer.mozilla.org/en-US/docs/Web/HTML
- Example: index.html[index.html]

### 3. CSS
...

### 4. javaScript
...
