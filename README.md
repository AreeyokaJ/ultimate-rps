# Ultimate Rock Paper Scissors - README

Welcome to **Ultimate Rock Paper Scissors**, an extended version of the classic game with exciting new gestures and features! This project combines creativity, fun gameplay, and dynamic interaction with the power of APIs.

## Features
- **Expanded Gestures:** Choose from an array of gestures beyond the traditional Rock, Paper, and Scissors. Options include:
  - Gun
  - Dynamite
  - Nuke
  - Lightning
  - Devil
  - Dragon
  - Alien
  - Water
  - Bowl
  - Air
  - Moon
  - Paper
  - Sponge
  - Wolf
  - Cockroach
  - Tree
  - Man
  - Woman
  - Monkey
  - Snake
  - Axe
  - Scissors
  - Fire
  - Sun
  - Rock

- **Player Choice:** The game allows the player to select their desired gesture from the available options.

- **Computer Opponent:** The computer randomly selects a gesture for each round.

- **Winner Declaration:** The program determines the winner of each round based on the extended gesture rules.

- **Random Quotes:** After each round, a random quote is displayed, fetched dynamically from the [API Ninjas Quote API](https://api-ninjas.com/api/quotes). Quotes can be inspirational, humorous, or thought-provoking.

- **Score Tracker:** The game includes a score tracker that updates after each round, showing the player's and the computer's current scores.

## Setup

### Prerequisites
Ensure you have the following:
- A web browser (for running the game locally).
- An active internet connection (required for fetching quotes from the API).

### Installation
1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/ultimate-rps.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ultimate-rps
   ```
3. Open the `index.html` file in your web browser to start the game.

## Usage
1. Open the `index.html` file in your web browser.
2. Follow the on-screen prompts to select your gesture.
3. The computer will make its choice, and the winner will be determined based on the rules.
4. A random quote will be displayed after each round.
5. Keep playing to track your score against the computer!

## Rules
Each gesture has unique interactions with the others. The program implements a custom rule set for determining winners. For example:
- Rock crushes Scissors.
- Alien abducts Dragon.
- Water extinguishes Dynamite.

The full rule set is available in the source code for reference.

## API Integration
This project integrates with the [API Ninjas Quote API](https://api-ninjas.com/api/quotes) to fetch random quotes after each round. Ensure you have an API key and include it in your JavaScript code:

```javascript
const apiKey = 'your_api_key_here';
```

## File Structure
- `index.html`: Main HTML file for the game interface.
- `style.css`: Contains styles for the game layout and design.
- `script.js`: Implements the game logic and API integration.
- `README.md`: Project documentation.

## Future Enhancements
- Adding animations for gestures in a graphical version.
- Multiplayer support.
- Customizable gesture sets.

## Contributing
Contributions are welcome! Feel free to fork the repository and submit pull requests with your improvements.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

Enjoy the game and may the best gesture win!

