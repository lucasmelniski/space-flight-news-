import cors from "cors";
import express from "express";
import article from "./controllers/article";
import * as dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 1800;

app.listen(PORT, async () => {
  console.log(`Listening on port ${PORT}`);
});

app.get("/", (req: any, res: any) =>
  res.send("Fullstack Challenge 2021 🏅 - Space Flight News")
);

app.use("/articles", article);

export default app