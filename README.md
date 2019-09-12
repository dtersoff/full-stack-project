https://github.com/dtersoff/full-stack-project front-end repo
https://dtersoff.github.io/full-stack-project/ front-end deploy
https://github.com/dtersoff/full-stack-project-api back-end repo
https://blooming-everglades-15045.herokuapp.com/ back-end deploy

# Fate/Grand Order Character Recorder
An app that keeps track of the characters a user has unlocked in FGO (a phone game), and their stats, class, strengths and weaknesses, etc. I came up with the idea because I have 2 or 3 multiple-tab spreadsheets saved in Numbers to actually do this and run calculations for me, and it would be so much nicer to be able to put in inputs and hit a button and have it do all the sorting for me. As for who would use it, I would (clearly), and I have friends who play the game who might use it too.


## Technologies Used
- Boostrap
- Handlebars
- HTML
- Javascript
- Rails
- Ruby
- SCSS

## Unsolved Problems
Currently none of the problems with the app prevent it from meeting minimum viable product, but there are improvements I would like to make:
- [ ] Cannot currently verify that a user has entered a Servant that actually exists in the game, or that their stats are correct. This is acceptable for now, seeing as how it only matters for a user's personal use, so making a character up won't harm anybody else. Also the amount of seeding required to make a database of all existing characters, as well as what their stats should be at all levels, would consume a lot of time. May address in a future update, just for the convenience of only having to adjust a character's level, and have the app automatically adjust their stats accordingly.
- [ ] Prevent users from creating a servant without filling in all of the fields.
  - [x] Change Servant Class field to a drop-down of existing available classes.
  - [x] Change Rarity field to be a drop-down of 0-5 stars.
  - [ ] Require a name to be entered during creation.
  - [ ] Either require level, attack, and hp to be filled on creation, or default level to 1 and attack and hp to 0 if left empty.
- [ ] Allow users to enter which classes are listed to appear in a mission, and recieve a list of servants sorted by attack, hp, or balance, modified to reflect type advantages.
- [x] Class sort button works, but within the same class the sorting seems to be arbitrary based on what order javascript thinks objects should be sorted in.
  - [x] Secondary sort should be by Rarity.
  - [x] Tertiary sort should be alphabetical.

## Planning
#### Initial timetable
- Set up user API
- Set up servant API
- Build front end
  - Make HTML prototypes of pages
  - recreate as handlebars
- Set up handlers for login
- Set up handlers for view changes
- Set up handlers for servant API
- Stretch goals if time is available

#### Development Process
Roughly followed the initial timetable with a few differences.

When setting up my front end, rather than make an HTML prototype and then move it into a handlebar, I started out with a handlebar for the front page, and a second one for the display after signing in. Partway through, I began to make separate handlebars for each feature/view, with a navbar in another handlebar at the top of the page. This was primarily so that my screen would be less cluttered and I could easily navigate to the relevant feature for testing, but ended up staying as my final design. At this point my process changed from what was on my initial timetable to instead be:
- Create handlebar for current feature
- Set up handlers for view change
- Set up handler for servant API
- Repeat for next feature

After meeting MVP for the project, I mostly worked on stretch goal features as they occured to me. For most of them, my problem solving strategy was usually to start writing what I knew I would need and test as I went along. For more complex problems, I'd pause to think them over and break them down mentally before moving on. In the future, I'd like to get into the habit of writing out these thoughts in comments, in order to help with my tendancy to forget about commenting while coding.

## User Stories and Wireframes
#### User Stories

- As a user I want to be able to sign in
- As a user I want to be able to change my password
- As a user I want to be able to sign out
- As a user I want to be able to create a record of a Servant (character in the game)
- As a user I want to be able to edit/update a Servant
- As a user I want to be able to delete a Servant
- As a user I want to be able to access a list of all of my Servants
- As a user I want to be able to access an individual Servant
- As a user I want to be able to have the program run various calculations and make recommendations based on character strengths and weaknesses (save for after MVP)

#### Wireframes
https://imgur.com/ompOaFg
https://imgur.com/CZ97eR0
