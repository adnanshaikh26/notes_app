const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/status", (req, res) => {
  res.json({ status: "OK" });
});

app.post("/", (req, res) => {
  const data = req.body;
  console.log("Received data:", data);
  res.json({ message: "User received", data });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
