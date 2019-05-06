// This displays the current friends that have been added to the array of objects

$(document).ready(function () {



    function displayMemb() {
                
        $.ajax({  // Makes the API call to get the friends json data
            url: "/api/friends",
            method: "GET"
        })

            .then(function (friends) {
                
                console.log(friends);

                // Reverse for loop to display the newest friend first
                for (var i = friends.length - 1; i >= 0; i--) {
                    var brk = $("<br>");
                    var imageDiv = $("<div>");
                    var pName = $("<p>").html("<b>Name: </b>" + friends[i].name);
                    pName.addClass("name");
                    var pProf = $("<p>").html("<b>Profession: </b>" + friends[i].profession);
                    pProf.addClass("profession");
                    var photo = $("<img>");
                    photo.attr("src", friends[i].photo);                   
                    photo.addClass("photo");
                    imageDiv.addClass("image-div col-lg-12");
                    imageDiv.append(photo);
                    imageDiv.append(pName);
                    imageDiv.append(pProf);
                    $("#member-list").append(imageDiv);

                }
            });
    }



displayMemb();







});