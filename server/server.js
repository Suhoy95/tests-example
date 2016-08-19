import express from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import path from "path";
let app = express();

app.use(express.static("assets"));
app.use(bodyParser.json({limit: "2mb"}));
app.use(cookieSession({keys: ["auth"]}));

const index = path.resolve(`${__dirname}/../assets/index.html`);
app.use((req, res) => res.sendFile(index));

app.use(function(err, req, res, next) {
  console.log(err);
  res.status(542).json({error: true, message: err.message, stack: err.stack});
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
