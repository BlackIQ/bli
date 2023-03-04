import dotenv from "dotenv";
dotenv.config();

const env = process.env;

export default {
  socks5: env.PROXY_SOCKS5,
};
