import dotenv from "dotenv";
dotenv.config();

const env = process.env;

export default {
  environment: env.APP_ENVIRONMENT,
  published: env.APP_ENVIRONMENT === "production" ? true : false,
};
