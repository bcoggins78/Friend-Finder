var friends = require("../data/friends");


module.exports = function(app) {
  
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    
    var newFriend = req.body;

    console.log(newFriend);

    var userScore = newFriend.scores;
    var matchName;
    var matchProf;
    var matchPhoto;
    var totalDiff = 100;

    for (var i = 0; i < friends.length; i++) {
      
      var difference = 0;

      for (var j = 0; j < userScore.length; j++) {
      
      difference += Math.abs(userScore[j] - friends[i].scores[j]);

      }

      if (difference < totalDiff) {

        totalDiff = difference;
        matchName = friends[i].name;
        matchProf = friends[i].profession;
        matchPhoto = friends[i].photo;

      }
    }

    console.log("Total Difference: " + totalDiff);
    console.log("Best Match Name: " + matchName);
    console.log("Best Match Profession: " + matchProf);
    console.log("Best Match Photo: " + matchPhoto);
    

    res.json({status: 'OK', name: matchName, profession: matchProf, photo: matchPhoto});

    friends.push(newFriend);
    
  });
  
};