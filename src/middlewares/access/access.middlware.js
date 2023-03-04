import { botConfig } from "$config/index.js";

const message = async (ctx, next) => {
  const { id } = ctx.from;

  if (String(id) !== String(botConfig.uid)) {
    ctx.reply("You are not allowed");
    return;
  }

  next();
};

export default message;
