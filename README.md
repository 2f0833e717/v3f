# WIP...

if you build & run
```bash
cat package.json
```
->>
  "scripts": {
  ...
<<-
how 2 use
```bash
npm run {scripts command}
```
```bash e.g. package.json ->> "dev": "quasar dev",
npm run dev
```

[install nodejs & npm(n package stable)] on ubuntu 18.04 LTS
```bash step1
sudo apt-get update
sudo apt-get install -y nodejs
sudo apt-get install -y npm

sudo npm cache clean
sudo npm install -g n

sudo n stable
sudo ln -sf /usr/local/bin/node /usr/bin/node

sudo apt-get purge nodejs
sudo apt-get purge npm
sudo apt-get autoremove #Y
```
```bash step2
sudo n stable
sudo ln -sf /usr/local/bin/node /usr/bin/node

cat /etc/lsb-release
node -v
npm -v
n --version
sudo npm list --depth=0
```

reload package.json command
```bash
sudo npm cache clean -f
sudo killall node
sudo rm -r -f node_modules
sudo rm -r -f package.lock.json
sudo npm i
```

firebase deploy fix.
```package.json
firebase.json
  "hosting": {
    "public": "dist/spa",
```

vscode install on ubuntu 18.04 LTS
```bash
sudo apt install curl
curl -L https://go.microsoft.com/fwlink/?LinkID=760868 -o vscode.deb
sudo apt autoremove -y
sudo apt install ./vscode.deb
#not work root user.
code --version
#sudo apt remove code
```

git ssh Qiita
https://qiita.com/knife0125/items/50b80ad45d21ddec61a9

git ssh login settings.
```vscode open terminal on vscode editor
Ctrl + Shift + 0
```

```vsccode terminal
git config --global user.name 2f0833e717
git config --global user.email skinoshita202001082135@gmail.com
```

add remote repository.
```vsccode terminal
git remote add origin https://github.com/2f0833e717/v3f
```

get branch
```vsccode terminal
git branch
git branch -a
```

TBD:checkout, pull, push, commit, ... alias
```
TBD:
```

TBD:Install:Vue.js(vue-cli, vuex, vue-router...),
    Quasar Frame work,
    other node packages...
```
TBD:
```

# Quasar App (my-app)

A Quasar Framework app

## Install the dependencies

```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
npm run lint
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
