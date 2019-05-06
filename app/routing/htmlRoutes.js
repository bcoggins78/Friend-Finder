var path = require("path");

module.exports = function (app) {

  // Route to the survey page
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // Route to the home page
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // Route to the friends page
  app.get("/friends", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/friends.html"));
  });

  // Route to the error page if the path is not recognized
  app.get("*", function (req, res) {
    var error404 = "<html>" +
      "<body><h1>404 Not Found </h1>" +
      "<p>The page you were looking for: " + req.url + " can not be found</p>" +
      "</body></html>";

    
    res.status(404);

    
    res.send(error404);
  });

};