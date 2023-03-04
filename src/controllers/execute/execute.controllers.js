import { exec } from "child_process";

export const RUN = async (ctx) => {
  const command = ctx.message.text;

  exec(command, (err, stdout, stderr) => {
    if (err) {
      ctx.reply(err.message);
      return;
    }
    if (stderr) {
      ctx.reply(stderr);
      return;
    }
    ctx.reply(stdout);
  });
};
