import express from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

let app = express();

app.use(express.static("assets"));
app.use(bodyParser.json({limit: "2mb"}));
app.use(cookieSession({keys: ["auth"]}));

app.use(function(err, req, res, next) {
  console.log(err);
  res.status(542).json({error: true, message: err.message, stack: err.stack});
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
