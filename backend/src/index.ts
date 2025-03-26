import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("¡Hello!");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });