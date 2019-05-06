# Friend Finder

### UNC Coding Bootcamp Week 13 Homework Project


This week introduced the use of Express.js and creating a server to host a website. It is also the first project that is considered "Full Stack".

This project uses:

* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery
* Node.js
* Express.js

#### Instructions

To use the Friend Finder app, click on the survey link on the top navbar and answer all questions.  Once complete, click the submit button and you will be given the friend suggestion that is your closest match. The closest match is determined by subtracting the user's answer score from the potential friend's score. Then it takes the absolute value of each and gets the sum for all answers. The lowest score will be the best match.

The Friends link will display a list of users that have been added.

The API Friends List link will show the friends list in json format.  Recommend getting the json formatter extension to view this.

```
  Friend-Finder  
    - .gitignore
    - app
      - data
        - friends.js 
      - public
         - assets
           - css
             - style.css
           - javascript
             - app.js
             - members.js
           - media
             - screenshot.jpg
        - home.html
        - survey.html
        - friends.html
      - routing
        - apiRoutes.js
        - htmlRoutes.js
    - package.json
    - readme.md
    - server.js
  ```

  ![screenshot](/app/public/assets/media/screenshot.jpg)