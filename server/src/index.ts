import { createConnection } from "typeorm";
import app from "./app";

const connection = async () =>
  await createConnection().then(() => {
    return app;
  });

export default connection();
