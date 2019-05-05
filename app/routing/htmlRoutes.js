var path = require("path");

module.exports = function (app) {

  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/members", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

  app.get("*", function (req, res) {
    var error404 = "<html>" +
      "<body><h1>404 Not Found </h1>" +
      "<p>The page you were looking for: " + req.url + " can not be found</p>" +
      "</body></html>";

    
    res.status(404);

    
    res.send(error404);
  });

};