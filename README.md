#Prime Academy Week 5 Weekend Challenge
---
##Project can be found at:


##Setup


##Challenge Objectives:
1. working with Angular and the OMDB API
2. build an application that can search movies
3. Store movies as favorites

##Technology Used
- Angular
- Node
- Express
- Mongo DB
- Bootstrap

---

##Base Mode

####There should be two views to the application, one side that searches and displays movie information made available from OMDB. This should be accomplished by having an entry field for the search string, then a submit button that sends the information to OMDB.

####When the API returns the response, the response should be data bound between an object and the response so that the search information appears as soon as the response returns from the API.

####You MUST use an Angular factory to send the API call ($http).

####The information that is returned from the API will be a movie object. You must display some of the movie information on the DOM in a meaningful way. Additionally, you must have an 'add to favorites' button on those results.

####When the 'add to favorites' button is clicked, it should record the information for the movie and store it into an array of favorites.

####The other view should display the favorite movies selected by the user.

###Tasks
1. [] MVP
  - [] Spin up server
  - [] Connect server to DB
  - [] Create and connect front end to back end
2. [] Set Up DOM and connect to API
  - [] Search input and submit buttons as a part of controller 1 (C1)
  - [] connect search button to API with Angular factory
  - [] Display result to DOM (C1)
  - [] create add to favorites button on results and send information to an array
  - [] set up controller 2 to show favorites array to DOM

---

##Hard Mode
####When a favorite is added to the favorites list, store the favorites list in a Mongo Database.

###Tasks
1. [] Set up Mongo DB
2. [] Post statement to Mongo DB
  - [] Connect add to favorites button with the DB
3. [] Get statement to Mongo DB
  - [] set up Get statement to load on page load

---
###Pro Mode
####Add the ability to remove a movie from the Mongo Database, and ensure that the favorites view updates as well.
1. [] Delete Button and connect to DB
---
###Master Mode
####Host the application on Heroku and mLabs. No need to do a data dump of an existing database.
