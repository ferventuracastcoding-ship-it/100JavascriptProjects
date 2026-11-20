<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <!-- Makes the game responsive on mobile devices. -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Rock Paper Scissors</title>

    <style>
        /* Apply consistent sizing to every element. */
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        /* Main page styling. */
        body {
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
            background:
                radial-gradient(circle at top, #293746, #080b0f 65%);
            color: white;
            font-family: Arial, sans-serif;
        }

        /* Main game container. */
        .game {
            width: 100%;
            max-width: 850px;
            padding: 30px;
            border: 1px solid #35414d;
            border-radius: 24px;
            background: #121820;
            box-shadow: 0 25px 70px rgba(0, 0, 0, 0.5);
        }

        /* Game title. */
        h1 {
            text-align: center;
            font-size: 2.4rem;
            letter-spacing: 3px;
            margin-bottom: 8px;
        }

        /* Subtitle. */
        .subtitle {
            text-align: center;
            color: #9ca9b6;
            margin-bottom: 25px;
        }

        /* Scoreboard layout. */
        .scoreboard {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-bottom: 20px;
        }

        /* Individual score card. */
        .score-card {
            padding: 20px;
            text-align: center;
            border-radius: 16px;
            background: #1b242e;
            border: 1px solid #2d3945;
        }

        /* Score card title. */
        .score-card h2 {
            font-size: 1rem;
            color: #aeb9c5;
            margin-bottom: 8px;
        }

        /* Score number. */
        .score {
            font-size: 3rem;
            font-weight: bold;
        }

        /* Round result display. */
        .result {
            min-height: 120px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
            margin-bottom: 20px;
            border-radius: 18px;
            background: #080c10;
            border: 1px solid #29343e;
            text-align: center;
        }

        /* Main result message. */
        #resultMessage {
            font-size: 1.6rem;
            font-weight: bold;
        }

        /* Player/computer choices. */
        .choices {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
            margin-bottom: 20px;
        }

        /* Choice button. */
        .choice {
            min-height: 130px;
            border: 1px solid #35414d;
            border-radius: 18px;
            background: #1c2630;
            color: white;
            cursor: pointer;
            font-size: 3rem;
            transition:
                transform 0.15s,
                background 0.15s,
                border-color 0.15s;
        }

        /* Choice button hover. */
        .choice:hover {
            transform: translateY(-5px);
            background: #293643;
            border-color: #647789;
        }

        /* Choice button press. */
        .choice:active {
            transform: scale(0.95);
        }

        /* Choice name. */
        .choice span {
            display: block;
            margin-top: 8px;
            font-size: 1rem;
            font-weight: bold;
        }

        /* Computer thinking animation. */
        .thinking {
            animation: pulse 0.5s infinite alternate;
        }

        /* Pulse animation. */
        @keyframes pulse {
            from {
                opacity: 0.4;
                transform: scale(0.95);
            }

            to {
                opacity: 1;
                transform: scale(1.05);
            }
        }

        /* Battle display. */
        .battle {
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            align-items: center;
            gap: 15px;
            margin-bottom: 20px;
        }

        /* Battle player section. */
        .fighter {
            padding: 20px;
            text-align: center;
            border-radius: 16px;
            background: #1b242e;
        }

        /* Fighter heading. */
        .fighter h3 {
            color: #9da9b5;
            font-size: 0.9rem;
            margin-bottom: 10px;
        }

        /* Fighter emoji. */
        .fighter-choice {
            font-size: 3rem;
        }

        /* VS text. */
        .vs {
            font-size: 1.3rem;
            font-weight: bold;
            color: #778593;
        }

        /* Reset button. */
        .reset {
            display: block;
            margin: 0 auto 20px;
            padding: 12px 25px;
            border: none;
            border-radius: 10px;
            background: #713d3d;
            color: white;
            cursor: pointer;
            font-weight: bold;
        }

        /* Reset hover. */
        .reset:hover {
            background: #8c4a4a;
        }

        /* History section. */
        .history {
            padding: 18px;
            border-radius: 15px;
            background: #0b1015;
            border: 1px solid #29333d;
        }

        /* History heading. */
        .history h2 {
            font-size: 1rem;
            color: #aeb9c5;
            margin-bottom: 10px;
        }

        /* History list. */
        #historyList {
            list-style: none;
            max-height: 150px;
            overflow-y: auto;
        }

        /* History entry. */
        #historyList li {
            padding: 8px 0;
            border-bottom: 1px solid #222b34;
            color: #aeb9c5;
            font-size: 0.85rem;
        }

        /* Keyboard information. */
        .keyboard {
            text-align: center;
            margin-top: 15px;
            color: #71808e;
            font-size: 0.8rem;
        }

        /* Mobile layout. */
        @media (max-width: 600px) {
            .game {
                padding: 20px;
            }

            h1 {
                font-size: 1.7rem;
            }

            .choice {
                min-height: 100px;
                font-size: 2.3rem;
            }

            .battle {
                grid-template-columns: 1fr;
            }

            .vs {
                text-align: center;
            }

            .score {
                font-size: 2.3rem;
            }
        }
    </style>
</head>

<body>

    <!-- Main game container. -->
    <main class="game">

        <!-- Game title. -->
        <h1>✊ ROCK PAPER SCISSORS</h1>

        <!-- Game subtitle. -->
        <p class="subtitle">
            Player vs. Computer
        </p>

        <!-- Scoreboard. -->
        <section class="scoreboard">

            <!-- Player score. -->
            <div class="score-card">

                <h2>PLAYER</h2>

                <div id="playerScore" class="score">
                    0
                </div>

            </div>

            <!-- Computer score. -->
            <div class="score-card">

                <h2>COMPUTER</h2>

                <div id="computerScore" class="score">
                    0
                </div>

            </div>

        </section>

        <!-- Battle display. -->
        <section class="battle">

            <!-- Player choice. -->
            <div class="fighter">

                <h3>YOUR CHOICE</h3>

                <div id="playerChoice" class="fighter-choice">
                    ❔
                </div>

            </div>

            <!-- VS label. -->
            <div class="vs">
                VS
            </div>

            <!-- Computer choice. -->
            <div class="fighter">

                <h3>COMPUTER CHOICE</h3>

                <div id="computerChoice" class="fighter-choice">
                    ❔
                </div>

            </div>

        </section>

        <!-- Result message. -->
        <section class="result">

            <div id="resultMessage">
                Choose your weapon!
            </div>

        </section>

        <!-- Player choices. -->
        <section class="choices">

            <!-- Rock button. -->
            <button
                class="choice"
                data-choice="rock">
                ✊
                <span>Rock</span>
            </button>

            <!-- Paper button. -->
            <button
                class="choice"
                data-choice="paper">
                ✋
                <span>Paper</span>
            </button>

            <!-- Scissors button. -->
            <button
                class="choice"
                data-choice="scissors">
                ✌️
                <span>Scissors</span>
            </button>

        </section>

        <!-- Reset game button. -->
        <button id="resetButton" class="reset">
            RESET GAME
        </button>

        <!-- Game history. -->
        <section class="history">

            <h2>
                ROUND HISTORY
            </h2>

            <ul id="historyList">
                <li>
                    No rounds played yet.
                </li>
            </ul>

        </section>

        <!-- Keyboard instructions. -->
        <div class="keyboard">
            R = Rock &nbsp; | &nbsp;
            P = Paper &nbsp; | &nbsp;
            S = Scissors
        </div>

    </main>

    <script>

        // Store the player's score.
        let playerScore = 0;

        // Store the computer's score.
        let computerScore = 0;

        // Store the number of draws.
        let draws = 0;

        // Store the available choices.
        const choices = [
            "rock",
            "paper",
            "scissors"
        ];

        // Map each choice to an emoji.
        const emojis = {
            rock: "✊",
            paper: "✋",
            scissors: "✌️"
        };

        // Get the player score element.
        const playerScoreElement =
            document.getElementById("playerScore");

        // Get the computer score element.
        const computerScoreElement =
            document.getElementById("computerScore");

        // Get the player choice element.
        const playerChoiceElement =
            document.getElementById("playerChoice");

        // Get the computer choice element.
        const computerChoiceElement =
            document.getElementById("computerChoice");

        // Get the result message.
        const resultMessage =
            document.getElementById("resultMessage");

        // Get the history list.
        const historyList =
            document.getElementById("historyList");

        // Get the reset button.
        const resetButton =
            document.getElementById("resetButton");

        // Generate a random computer choice.
        function getComputerChoice() {

            // Generate a random array index.
            const randomIndex =
                Math.floor(
                    Math.random() * choices.length
                );

            // Return the randomly selected choice.
            return choices[randomIndex];
        }

        // Determine the winner of a round.
        function determineWinner(player, computer) {

            // Check for a draw.
            if (player === computer) {
                return "draw";
            }

            // Rock beats scissors.
            if (
                player === "rock" &&
                computer === "scissors"
            ) {
                return "player";
            }

            // Paper beats rock.
            if (
                player === "paper" &&
                computer === "rock"
            ) {
                return "player";
            }

            // Scissors beats paper.
            if (
                player === "scissors" &&
                computer === "paper"
            ) {
                return "player";
            }

            // If the player didn't win or draw,
            // the computer wins.
            return "computer";
        }

        // Convert a choice into a readable name.
        function capitalize(choice) {

            // Capitalize the first letter.
            return choice.charAt(0).toUpperCase()
                + choice.slice(1);
        }

        // Play one round.
        function playRound(playerChoice) {

            // Temporarily disable the choice buttons.
            document
                .querySelectorAll(".choice")
                .forEach(button => {
                    button.disabled = true;
                });

            // Display the player's selection.
            playerChoiceElement.textContent =
                emojis[playerChoice];

            // Show a thinking animation.
            computerChoiceElement.textContent = "🤔";

            // Add thinking animation.
            computerChoiceElement.classList.add(
                "thinking"
            );

            // Change result message.
            resultMessage.textContent =
                "Computer is thinking...";

            // Wait before revealing the computer's choice.
            setTimeout(function () {

                // Remove thinking animation.
                computerChoiceElement.classList.remove(
                    "thinking"
                );

                // Generate the computer's choice.
                const computerChoice =
                    getComputerChoice();

                // Display the computer's choice.
                computerChoiceElement.textContent =
                    emojis[computerChoice];

                // Determine the winner.
                const winner =
                    determineWinner(
                        playerChoice,
                        computerChoice
                    );

                // Handle a player victory.
                if (winner === "player") {

                    // Increase player score.
                    playerScore++;

                    // Display victory message.
                    resultMessage.textContent =
                        "🎉 You Win!";

                }

                // Handle a computer victory.
                else if (winner === "computer") {

                    // Increase computer score.
                    computerScore++;

                    // Display defeat message.
                    resultMessage.textContent =
                        "💻 Computer Wins!";
                }

                // Handle a draw.
                else {

                    // Increase draw count.
                    draws++;

                    // Display draw message.
                    resultMessage.textContent =
                        "🤝 It's a Draw!";
                }

                // Update the score display.
                updateScore();

                // Add the round to history.
                addHistory(
                    playerChoice,
                    computerChoice,
                    winner
                );

                // Re-enable the buttons.
                document
                    .querySelectorAll(".choice")
                    .forEach(button => {
                        button.disabled = false;
                    });

            }, 700);
        }


        // Update the scoreboard.
        function updateScore() {

            // Display player's score.
            playerScoreElement.textContent =
                playerScore;

            // Display computer's score.
            computerScoreElement.textContent =
                computerScore;
        }

        // Add a completed round to the history.
        function addHistory(
            playerChoice,
            computerChoice,
            winner
        ) {

            // Clear the initial history message.
            if (
                historyList.children.length === 1 &&
                historyList.children[0].textContent.includes(
                    "No rounds"
                )
            ) {

                // Remove the message.
                historyList.innerHTML = "";
            }

            // Create a new history item.
            const item =
                document.createElement("li");

            // Create the result text.
            let resultText;

            // Determine the readable result.
            if (winner === "player") {

                resultText = "You won";

            } else if (winner === "computer") {

                resultText = "Computer won";

            } else {

                resultText = "Draw";
            }

            // Display the round information.
            item.textContent =
                `${emojis[playerChoice]} ${capitalize(playerChoice)}
                vs
                ${emojis[computerChoice]} ${capitalize(computerChoice)}
                → ${resultText}`;

            // Add the newest round to the top.
            historyList.prepend(item);

            // Keep only the last 10 rounds.
            while (
                historyList.children.length > 10
            ) {

                // Remove the oldest round.
                historyList.removeChild(
                    historyList.lastChild
                );
            }
        }

        // Reset the entire game.
        function resetGame() {

            // Reset player score.
            playerScore = 0;

            // Reset computer score.
            computerScore = 0;

            // Reset draws.
            draws = 0;

            // Reset player choice display.
            playerChoiceElement.textContent = "❔";

            // Reset computer choice display.
            computerChoiceElement.textContent = "❔";

            // Reset result message.
            resultMessage.textContent =
                "Choose your weapon!";

            // Clear history.
            historyList.innerHTML = `
                <li>No rounds played yet.</li>
            `;

            // Update scoreboard.
            updateScore();
        }

        // Listen for clicks on the choice buttons.
        document
            .querySelectorAll(".choice")
            .forEach(button => {

                // Add a click event listener.
                button.addEventListener(
                    "click",
                    function () {

                        // Read the selected choice.
                        const choice =
                            this.dataset.choice;

                        // Play the round.
                        playRound(choice);
                    }
                );
            });

        // Listen for the reset button.
        resetButton.addEventListener(
            "click",
            resetGame
        );

        // Add keyboard controls.
        document.addEventListener(
            "keydown",
            function(event) {

                // Convert the key to lowercase.
                const key =
                    event.key.toLowerCase();

                // R = Rock.
                if (key === "r") {

                    // Play rock.
                    playRound("rock");
                }

                // P = Paper.
                else if (key === "p") {

                    // Play paper.
                    playRound("paper");
                }

                // S = Scissors.
                else if (key === "s") {

                    // Play scissors.
                    playRound("scissors");
                }

                // Escape resets the game.
                else if (key === "escape") {

                    // Reset the game.
                    resetGame();
                }

            }
        );

    </script>

</body>
</html>
