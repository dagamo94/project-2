//For setting routes to the various html pages

// Dependencies
var db = require("../models"); 

// Routes  =======> Exported to ? file
module.exports = function(app) {
   // app.use("/css", express.static(__dirname + '/css'));

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../#"));
    });

    app.get("/#", function(req, res) {
        res.sendFile(path.join(__dirname, "../#"))
    });

    app.get("/#", function(req, res) {
        res.sendFile(path.join(__dirname, "../#"));
    });
};

