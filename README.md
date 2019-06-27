# Tic-Tac-Toe Game Project

## List of Technologies Used

* HTML
* SCSS (Sass)
* JavaScript
* jQuery
* AJAX
* Bootstrap
* API

## User Stories and Wireframe

[Wireframe Moqups Link](https://app.moqups.com/jiMYFEFAZq/view)

* As a user, I want to create a game so that two players can play this game
* As a user, I want to login successfully to play the game
* As a user, I want to see the that the game shows up as X and O as turns rotate
* As a user, I want to know whose turn it is next
* As a user, I want to see whether or not I have made a match or a draw
* As a user, I want to see the total number of games played so that I can keep track of the record of times I have played
* As a user, I want to be able to click on a button that will reset the gameboard
* As a user, I want to be able to log out of my session/game

## Planning and Development

Initially, I created the wireframe and the user stories as a visual on how to tackle my project. Little did I know that this would all come crashing down on me as the final version of my project does not look like my wireframe at all. I did pretty much everything mentioned on my user stories though.

The planning stages was quite easy really because I knew what I wanted - to create a functional tic tac toe game that everyone grew up playing. I had the visual imagery down and not so much of the logistics as I ran into a problem with the actual implementation of my project.

I started my project with specific goals in mind that I set for myself to tackle as I progressed with my project. To start off, I started with HTML to get my buttons listed at the top of the page and bootstrap to get a 3x3 grid right below it. I used CSS to color it after so that I got some representation to show off. Then I proceeded to build a functional game logic with event listeners to target my gameboard so that it will switch to X and O. Once I completed that game logic, I went into a hole where I wanted to continue making the game logic that stops the transitions of X to O or vice versa and that was causing me a headache. Deciding that I wasn't going anywhere, I decided to set up the authentication API and make the buttons work since it was a lesson that was still fresh on my mind.

I got the authentication API functional using AJAX request and proper parameters and tested out all my event listeners that I had pointing the buttons of the authentication forms (sign up, sign in, change password and sign out. Once I got that to work, I decided to move onto the get game API since I knew my board would have a problem pointing back to the APIs if I didn't get that side to work. I created the GET and POST portion of the game API first because it was easier to do. Once I noticed how much the parameters I needed to pass through for the PATCH request I decided to move back to my game logic.

While working on my game logic, I decided mid-way to scratch the one I already have and re-create a new one. I imagined that I should create a logic that composed of three components - gameboard logic, player turn logic, and check for wins logic. Going off of those three components, I started building my win conditions first since that was possibly the easiest to visualize when looking at a tic tac toe board. I proceeded to then create the gameboard logic where it stores clicks if the board is empty and it stores a value of X or O if it is taken. Then I proceeded to the player turn logic to help map out the logic that if the board already has a value, then do not do anything and return it back whereas if the board does not have a value then display that the player is either X or O. Once I completed this, I noticed that the PATCH game API needed to be completed to make my gameboard functional again so I proceeded to do it.

I noticed along the way that the PATCH request for the gameboard is probably the hardest assignment on this game project (other than troubleshooting the bugs). I noticed that during this process I was missing a lot of the parameters that the PATCH API required so I went around and console.log all my function to troubleshoot and pinpoint the errors in my blocks of codes. Once everything became functional - I decided to style it.

I came to realize that styling the gameboard using bootscrap was by far the best idea since it was saved me lots of time. I completed the bootscrap with some SASS functionality and it became what we see now.

## Unsolved Problems and Future Plans

I wouldn't say that I have an unsolved problem, but I do see that when we are clicking back and forth between the sign up and sign in function that it creates an effect on the form that starts off on the right disappears to the left and then finally centers itself. It is the same for both my sign up and sign in forms. I would like to say that this adds a pretty cool effect to it, but I may want to fix it in the near future.

My future plans would be to make the game compete with an AI both basic and advanced. If I could ever come around to it, I would love to make it a multiplayer game where two user froms different devices can play the game.
