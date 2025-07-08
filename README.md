# SU-2025-07

## Updates
- 2025-07-01 - Web development - Git, SSH key, Visual Studio Code (VS code), 
HTML
- 2025-07-02 - CSS, DJ personal website (starting point) - Example project #2
- 2025-07-03 - Example project #2 - Add the other web pages, css and js
- 2025-07-04 - JS, Example project #1 - Add JS (JavaScript) code
- 2025-07-05 & 06 - JS, Example project #1 - Completion

## I. Developers Tools

### 1. Git
- Install https://git-scm.com/downloads
- Windows - Git Bash (console).
- Windows console commands: 
https://www.thomas-krenn.com/en/wiki/Cmd_commands_under_Windows

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
- Start SSH agent: `eval $(ssh-agent -s)`
- Add your personal SSH key: `ssh-add ~/.ssh/id_your_private_ssh_key`

## II. Web desing & development

### 1. Editor & IDE (Integrated Development Environment)

#### Most in use - Visual Studio Code (VS code)
- Download and install: https://code.visualstudio.com/
- Implement AI agent: https://www.youtube.com/watch?v=dutyOc_cAEU
- Console command to run VScode in the current folder: `code .`

### 2. HTML
- Learn resource: https://www.w3schools.com/html/
- Official documentation: https://developer.mozilla.org/en-US/docs/Web/HTML
- Our example HTML code: [index.html](/README.md)

### 3. CSS

#### 3.1. Implement CSS in HTML
- Separate CSS file (*.css)
- Direct HTML implementation:
```
<style>...</style>
```
- Direct HTML element CSS inline attachment

#### 3.2. CSS Resources
- Official CSS documentation: https://developer.mozilla.org/en-US/docs/Web/CSS
- Learning CSS: https://www.w3schools.com/css/

#### 3.3. CSS and websites designs - examples (ready-to-use)
- https://themeforest.net/
- CSS frameworks - TailwindCSS, Boostrap, W3CSS, etc.
- Bootstrap CSS framework: https://getbootstrap.com/


### 4. javaScript

#### 4.1. Implement JavaScript (JS) in HTML
- Right before the closing tag </body> and between tags:
```
<script>
...
</script>
```
- In a separate .js file

#### 4.2. JavaScript resources:
- Official documentation: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript
- Learn JS / JavaScript: https://www.w3schools.com/js/

#### 4.3. JavaScript frameworks
- ReactJS with both JS (JavaScript) & TS (TypeScript) - https://react.dev/
- NextJS - framework based on top of React (both JS & TS) - https://nextjs.org/
- Many other JS frameworks - VueJS / NuxtJS (as an opposit of React/Next), 
AngularJS, ExtJS, PreactJS, etc.


### 5. Example project #1
- Create an example HTML page (index.html)
- Move CSS styles in a separated file (styles.css)
- Add JS code in the HTML (index.html) - AI generated
- Move all the JS code into a separate file: scripts.js
- Separate all HTML pages within files.
- Project #1 completion and testing.
- Commit (Git) all the project #1 files on the public repository:
https://github.com/moderna-bg-ltd/SU-2025-07/

### 6. AI in use
Add an AI agent in your VS Code editor:
- Example: https://www.youtube.com/watch?v=aKx5I0Mrr9g


### 7. Example project #2 - Official DJ Website
- https://github.com/moderna-bg-ltd/dj-website
- Add most of the ready-to use HTML pages


### 8. Best code practices & standards
- Code style - max 80 characters per line, empty line at the end
