import dotenv from "dotenv";

dotenv.config({});

declare const process: any;

export default {
  server: {
    port: process.env.PORT,
  },
  JWT: {
    secretKey: process.env.JWT_SECRET_KEY,
  },
  database: {
    mongo: {
      user: process.env.MONGO_USERNAME,
      password: process.env.MONGO_PASSWORD,
      host: process.env.MONGO_HOST,
      port: process.env.MONGO_PORT,
      database: process.env.MONGO_DATABASE,
    },
  },
};
