#Crank-O-Meter
![alt text] (/pics/version6.png "Closing in on the final version")

View it <a href="https://crank-o-meter.herokuapp.com/">here!</a><br>
For our group project we decided to build an app that measures someone's crankiness. In order to measure the user's crankiness we developed 5 questions with score buttons attached. When a button is clicked (rating how angry the user is) the score is rendered on the Crank-O-Meter as well as being translated into a score below the questions. 
Once the user receives their score they will be given a funny/cute GIF or video which may help to calm their anger. They can scroll down some more to find a login/register so they can begin their "apology" letter. The inputs rendered for the apology letter will have sentences already prepopulated and able to be switched to a new sentence if the user prefers. The user may also edit the sentences/letter themself before the letter is sent. 
The user will click send to email the specified party's email. Nodemailer will initiate the email service and will send out via a dedicated gmail account set up specifically for the app.

##Technologies Used
*   [React](https://facebook.github.io/react/docs/getting-started.html) - used to create a one page app allowing for efficent DOM updates. We have multiple components on the page that will need to be updated, including the actual crank-o-meter, rendering of the questions, user score and the sentences for the user's letter.
*   Javascript - Primary language used for the app. Throughout the app you'll notice variations of javascript such as jquery and the use of jsx syntax for React functionality.
*   [Express](http://expressjs.com/) - The framework we will use to make requests to our API to give our app C.R.U.D. functionality.
*   SQL - Database for user name, email, passwords and letters. A second database was created for pre-populated sentences which can be eidted and updated by the user.
*   [PostgreSQL](https://www.postgresql.org/docs/) - Database management system
*   Object Relational Mapper - our userDAO (Data Access Object) and sentenceDAO act as our ORMs, translating the objects for database consumption.
*   [Nodemailer](https://nodemailer.com/) - allows for the user to email their apology letter created in the app.
*   [Trello](https://trello.com/) - We used trello to direct, organize and manage our ptoject flow. Trello was an essential tool to communicate the progress of the assigned user stories. It was especially helpful when working remotely.
*   [GitHub](https://github.com/) - Used to update, review and merge code for app development and functionality.
*   CSS - Styling for our app as well as making the app responsive for both mobile and web use. After consulting with the UX team, we decided it would best to develop an app that was first mobile responsive. This would align with the targetted user's intent.
*   HTML


##Approach##
1. As a team we brainstormed a fullstack web app that we thought could be useful for public consumption. We came to consensus on developing an app that could help both rate one's anger and help develop an "apology" letter.

2. After developing the idea, we talked, walked (both literally and figuratively) and sketched through the functionality of our app and what we might want the user interface to look like. 

3. Gathering our thoughts and sketches (Ariana's) we met with colleagues from the UX immersive. We spent a few hours together and went through the abbreviated development process from the UX perspective. We had the opportunity to finetune our ideas but to also receive valuable and insightful feedback. The six of us were able to whittle the app down to its essentials. The UX team also advised us to focus on mobile development since the target user should want immediate access.

4. From brainchild to robust outline we then pushed ourselves to use the SCRUM process developed for the Agile principles. We spent some time breaking down the app into user stories. Trello was a great tool in helping us manage the stories and our sprints. Each morning or beginning of our coding sessions we would "StandUp" to reflect on code and our process.

5. We all found that the process worked smoothly. The bumpy parts were tackling some of the blockers. Throughout the process we supported each other as best as we could. We paired with each other, researched answers to our questions, enlisted other classmates for help and called upon our instructors to rubber ducky us through the problem. At day's end we overcame many of the obstacles keeping us from a working app.'
    
6. Consistently updating and merging our code was esential throughout the development process. We each took the time to thoroughly review eachothers' code, comment and make revisions. It helped us each better understand how the app functions but also to see someone else's coding process.'

##Unsolved Problems##
*   Coding the route to the dashboard after login authorization. The point of the app is to have the user gauge their anger based on five questions, after rating they are prompted to register/login to have access to a suggested "apology" letter. 
*   State and updating state was a consistent thorn in our side in the development process. While the Nodemailer allows the user to email the letter, we were not able to keep the state of the updated letter to send on to the inputted email address.
*   As mentioned before the user will have to register to have access to the letter. Despite having the create, read and update for all of our app, the delete function is a whole other beast that will have to be solved after project submission.

##Next Steps##
By meeting with the UX team, we realized what functions were essential to the app and what should be next steps.
*   User access to time stamped letters along with score of their anger that they had at the time.
*   Specific sentences/letters related to situations but also connected to the level of anger. 
*   Feel good videos that can randomize on the page to divert anger. Also rendering of a congratulatory video after the letter is sent.

##Photographic Timeline##

####Initial Sketch of the app
![alt text] (/pics/version1.jpg "Initial Sketch of app")

####Revised app after meeting with UX team
![alt text] (/pics/version2.jpg "Revised app after meeting with UX team")

####Close up of the revised Crank-o-meter
![alt text] (/pics/version2.1.jpg "Close up of app")

####User Stories   
![alt text] (/pics/userStories.jpg "Our user stories")

####Crank-o-meter directory
![alt text] (/pics/directory.png "app directory")

####Initial render with divs
![alt text] (/pics/divColorsRender.png "Initial render of our divs")

##Installation Instructions##
Below you will find a full list of the dependencies used for the crank-o-meter:
*   Babel: core, loader, preset-es2015, preset-react
*   bcrypt
*   body-parser
*   cookie-parser
*   dotenv
*   eslint: airbnb, import, jsx-ally, react
*   express: history-api-fallback, session
*   jsonwebtoken
*   morgan
*   nodemailer
*   pg-promise
*   react: cookie, dom, router
*   superagent
*   webpack: dev-middleware, dev-server, hot-middleware

##Additional Pictures
![alt text] (/pics/wireframe.jpg "front and back")
![alt text] (/pics/db.jpg "first iteration of the databases")
![alt text] (/pics/gamePlan.jpg "Our weekend game plan")
