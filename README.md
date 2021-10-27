# Yahtzee

Online free yahtzee by two students ([Mickaël Rolland](https://github.com/mickaelrolland) and [Nathanaël Soulat](https://github.com/nsoulat)).

## How to play ?

Just go to [http://node.fenouil.ovh1.ec-m.fr](http://node.fenouil.ovh1.ec-m.fr) or [http://node.girofle.ovh1.ec-m.fr](http://node.girofle.ovh1.ec-m.fr) and play!

> The game is in French but if you know about Yahtzee it will be okay.

## How to setup the project ?

>If you are using Windows, you must change the script-shell that npm is using:
>As it is explained [here](https://stackoverflow.com/questions/23243353/how-to-set-shell-for-npm-run-scripts-in-windows): if you have a x64 version, run
>
>```bash
>npm config set script-shell "C:\\Program Files\\git\\bin\\bash.exe"
>```
>
>else
>
>```bash
>npm config set script-shell "C:\\Program Files (x86)\\git\\bin\\bash.exe"
>```
>
>It can be reverted with
>
>```bash
>npm config delete script-shell
>```

Clone the project then run

```bash
npm run update
```

`npm run update` will run `npm ci` for both backend and frontend packages.
You can also use `npm run install` (running `npm install` for back and front) but `npm run update` is more adequate here [according to npm](https://docs.npmjs.com/cli/v7/commands/npm-ci).

Then in the `backend/config` folder open the file `config.model.json` and replace the values by yours (according to your PostgreSQL database, your server port, etc...) and rename the file into `config.json`.

### Compiles and hot-reloads for development

For the backend (to launch the backend server)

```bash
npm run start
```

For the frontend (to launch the frontend server)

```bash
npm run dev
```

### Compiles and minifies for production

```bash
npm run build
```

This will build the frontend and update the `frontend/dist` folder which is used by the backend server for static files.
After the frontend build, you can start the backend server with:

```bash
npm run start
```

### Lints and fixes files

```bash
cd frontend
npm run lint
```

### Release managment

This command line will be effective only for linux servers (like the `ovh1.ec-m.fr` that we use).
Make sure that you have the rights to execute the scripts.
You can set those rights with this command:

```bash
chmod -R u+x scripts/
```

To release a new version:

```bash
npm run prod
```

This command is equivalent to:

```bash
git fetch
git pull
npm run update
npm run build
screen -X -S node quit
cd backend
/usr/bin/screen -d -m -S node node server.js
```

## Figma model

[Figma Yahtzee](https://www.figma.com/file/QQ74Ou5yLQ9YuvqtcWaJh8/Yahtzee)
