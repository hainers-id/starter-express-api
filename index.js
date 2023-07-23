const express = require("express");
const app = express();
app.all("/", (req, res) => {
  console.log("Just got a request!");
  res.json({
    ip: req.ip,
    headers: req.headers,
  });
});
app.listen(process.env.PORT || 3000);
