var friends = require("../data/friends");

// Route for the API path
module.exports = function(app) {
  
  
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // Receives json data and then determines best match
  app.post("/api/friends", function(req, res) {
    
    // New friend data received and assigned variable
    var newFriend = req.body;

    console.log(newFriend);

    // Question score array assign variable
    var userScore = newFriend.scores;
    
    // Additional variables for handling the possible match
    var matchName;  
    var matchProf;
    var matchPhoto;

    // The user and matches total difference score initially set to higher number
    var totalDiff = 100;

    // For loop to go throuh each friend object in array
    for (var i = 0; i < friends.length; i++) {
      
      var difference = 0; // Sets the initial value of the difference variable

      // Another for loop that goes through each answer score for the current friend
      for (var j = 0; j < userScore.length; j++) {
      
        // The difference is calculated by subtracting the friend score from the user score, getting the absolute value, 
        // then getting the sum from all the answers, and assigning it to the difference variable
        difference += Math.abs(userScore[j] - friends[i].scores[j]);

      }

      // compares if the current difference value is less than the total difference
      if (difference < totalDiff) {

        // if it is less, then the totalDiff receives the new value from the difference var
        // and the other variables are updated to the current friend data in the array
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
    
    // json data is sent back with the current best match data.
    res.json({status: 'OK', name: matchName, profession: matchProf, photo: matchPhoto});

    // User data added to the array
    friends.push(newFriend);
    
  });
  
};