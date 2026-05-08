const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/notifications", (req, res) => {
  res.json([
    {
      id: 1,
      type: "Placement",
      message: "TCS Hiring"
    },
    {
      id: 2,
      type: "Result",
      message: "Mid Sem Result"
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});