import express, { json } from "express";
import fetch from 'node-fetch';
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/", async (req, res) => {
  const bodyData = req.body["message"];
  console.log(bodyData)

  const reponse = await fetch("https://veronica-ai-server.onrender.com", {
    method: "POST",
    headers: {"Content-Type":"Application/json"},
    body: JSON.stringify({ message: bodyData }),
  });
  const data = await reponse.json();
  console.log(data)

  res.status(200).json(data);
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
