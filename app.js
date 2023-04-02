const express = require("express");
const bodyParser = require("body-parser");
const { routes } = require("./routes/route");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const hostname="0.0.0.0"

app.get("/", (req, res) => {
    res.sendFile("index.html", { root: __dirname });
  });

app.use("/", routes);
    var Server = app.listen( 8080,hostname, function () {
        var port = Server.address().port;
        console.log("App listening on port %s", port);
    });
