/* eslint no-console: "off" */

var path = require("path"),
 express = require("express"),
 app = express();

app.use(express.static(path.resolve(__dirname, './browser')));

app.listen(8080); //app.listen(port number, IP address);

console.log("Serving on http://127.0.0.1:8080");
