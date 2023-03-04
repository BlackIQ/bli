import dotenv from "dotenv";
dotenv.config();

const env = process.env;

export default {
  token: env.BOT_TOKEN,
  uid: env.USER_ID,
};
