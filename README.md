# Project Title

React minesweeper - A reactjs remake version of classic minesweeper game.

Live at this url: https://manuelpereira2016.github.io/react-minesweeper/

## Getting Started

Install all dependencies by running `npm install` or `yarn` .

### Decisions taken

1. Develop an algorithm from scratch, take the needed time to think and develop the needed functions as independant file so it can be implemented as a API in the future more easier.

2. Some functionalities like supporting multiple users may spent more time as they need another UI component, so i take the decision to leave to a next version and focus on finish with persistence as persistence by localStorage is needed to implement this too.

3. I take the decision of make an special object (`gameApi`) for our kind of "game engine" for minesweeper and is mostly independant of react or any library as is just plain ecmascript 6/7 code.

### Time you spent on the challenge.

Mostly it was five or six hours, but in the beginning i was designing the algorithm of the game from scratch in some papers.

### The following is a list of features implemented on this version:

1. When a cell with no adjacent mines is revealed, all adjacent squares will be revealed (and repeat)

2. Ability to 'flag' a cell with a question mark or red flag

3. Alert when game is over

4. Persistence. Not to lose the game if browser is closed

5. Time tracking

6. Ability to select the game parameters: number of rows, columns, and mines

7. Nice user experience (eg avoid page reload while playing)

### TODO:

1. Ability to start a new game and preserve/resume the old ones (it will take few time to implement this it should be easier as we already have persistence, so its only implement UI).

2. Ability to support multiple users/accounts (Using the persistence through `localStorage` object in the browser, again we can make the needed UI and correspondants functions)

3. Design and implement an API for the game (think of a mobile app for your API): This is basically almost done with our object `gameApi.js` this can be implemented on a server too so can later be accessed through internet with mobile apps.

## Authors

* **Manuel Pereira**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
