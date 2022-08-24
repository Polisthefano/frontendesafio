let express = require("express");
let path = require("path");

const app = express();

app.use(express.static(__dirname+"/dist/frontenddesafio"));
app.get("/*", (req, res) => {
  res.sendFile(__dirname+"/dist/frontenddesafio/index.html");
});

app.listen(process.env.PORT || 8080);
console.log(
  `Running on port ${process.env.PORT || 8080}`,
  path.join(__dirname, "./dist/front-end-desafio-expresiones")
);
