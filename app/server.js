function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (!req.secure && req.get("x-forwarded-proto") !== "https") {
    return res.redirect("https://" + req.get("host") + req.url);
  }
  next();
}
const express = require("express");
const app2 = express();
app2.use(requireHTTPS);

app2.use(express.static("./dist/app"));

app2.get("/*", function (req, res) {
  console.log(process.cwd());
  res.sendFile("index.html", { root: "dist/app/" });
});

app2.listen(process.env.PORT || 8080);
