# BLI

**BLI** is a Bot Line Interface. It's just a simple bot that you enter command ant it execute, then give you the output.

## Why using this tool?

Well I don't have access to laptop all the time and want to check something. Like `pm2 logs` or anything. So, I open Telegram and go to bot and enter commands!

## Requirements

First you need to have some stuff that is listed below:

- nvm
- NodeJs
- npm
- pm2

1. Ok, let's start from **nvm**.

With **nvm** you can install multi nodejs versions.

```shell
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

Ok. Next step.

2. Here we will install **Node** with **nvm**

```shell
$ nvm install v18
```

I suggest to install node v18.

After installing **NodeJs**, **NPM** installs too.

To test and be sure that you are successful in this step, check the versions.

```shell
$ node -v
$ npm -v
```

3. Installing **pm2**

So, what is pm2?

pm2 is a proccess manager. You can run your Laravel, Django, Node and even Front-End project with.

To install **pm2**, use **npm**.

```shell
$ npm i -g pm2
```

## How to use?

Just follow these steps.

1. Clone the repository in your server

```shell
$ git clone https://github.com/BlackIQ/bli && cd bli
```

2. Install dependencies

```shell
$ npm i
```

3. Copy `.env.example` file to `.env`

```shell
$ cp .env.example .env
```

4. Fill the blanks

```shell
$ nano .env
```

5. Run your app

```shell
$ pm2 start server.js --name bid
```

Now your app is running!

---

Docs will be updated more.
