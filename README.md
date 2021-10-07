# Yahtzee

Online free yahtzee by two students

## How to play ?

> The game is not released yet 

## How to setup the project ?

Clone the project then run 

```bash
npm run update
```

`npm run update` will run `npm ci` for both backend and frontend packages.
You can also use `npm run install` (running `npm install` for back and front) but `npm run update` is more adequate here [according to npm](https://docs.npmjs.com/cli/v7/commands/npm-ci).

Then in the `backend/config` folder open the file `config.model.json` and replace the values by yours (according to your PostgreSQL database, your server port, etc...) and rename the file into `config.json`.

### Compiles and hot-reloads for development

For the backend:

```bash
npm run start
```

For the frontend
```bash
npm run dev
```

### Compiles and minifies for production

```bash
npm run build
```

This will build the frontend and update the frontend/dist folder which is used by the backend server for static files.
After the frontend build, you can start the backend server with 

````bash
npm run start
```

### Lints and fixes files

```bash
npm run lint
```

## Figma model

https://www.figma.com/file/QQ74Ou5yLQ9YuvqtcWaJh8/Yahtzee
