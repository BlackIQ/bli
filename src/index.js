import { Socks5 } from "$connections/index.js";
import { botConfig, appConfig } from "$config/index.js";

import { Execute } from "$controllers/index.js";
import { access } from "$middlewares/index.js";

import { Telegraf } from "telegraf";

const bot = new Telegraf(botConfig.token, {
  telegram: {
    agent: !appConfig.published && Socks5,
  },
});

bot.start((ctx) => {
  ctx.reply("Welcome! Enter Linux command to execute.");
});

bot.on("text", access, (ctx) => Execute.RUN(ctx));

export default bot;
