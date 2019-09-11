https://github.com/dtersoff/full-stack-project front-end repo
https://dtersoff.github.io/full-stack-project/ front-end deploy
https://github.com/dtersoff/full-stack-project-api back-end repo
https://blooming-everglades-15045.herokuapp.com/ back-end deploy

# Fate/Grand Order Character Recorder

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
- [ ] Users can create a new Servant without filling in all fields. This can be fixed by the user updating to fill in any empty fields, but it should get some verification.
  - [ ] Change Servant Class field to a drop-down of existing available classes.
  - [ ] Change Rarity field to be a drop-down of 0-5 stars
  - [ ] Require a name to be entered during creation.
  - [ ] Either require level, attack, and hp to be filled on creation, or default level to 1 and attack and hp to 0 if left empty.

## Planning
