const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log("fidsoa");
  res.send("HELLO");
  res.status(200).json({
    msg: "fdsioa",
  });
});
app.use("/auth", require("./routes/auth"));
app.use("/posts", require("./routes/posts"));

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});
