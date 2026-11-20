<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <!-- Makes the application responsive on phones and tablets. -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>JavaScript Dice Simulator</title>

    <style>
        /* Apply border-box sizing to every element. */
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
                radial-gradient(circle at top, #243447, #090d12 65%);
            color: white;
            font-family: Arial, sans-serif;
        }

        /* Main application container. */
        .app {
            width: 100%;
            max-width: 900px;
            padding: 30px;
            border: 1px solid #33404d;
            border-radius: 24px;
            background: #111820;
            box-shadow: 0 25px 80px rgba(0, 0, 0, 0.5);
        }

        /* Application title. */
        h1 {
            text-align: center;
            font-size: 2.2rem;
            letter-spacing: 3px;
            margin-bottom: 8px;
        }

        /* Subtitle. */
        .subtitle {
            text-align: center;
            color: #9ba8b5;
            margin-bottom: 25px;
        }

        /* Control panel. */
        .controls {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            margin-bottom: 20px;
        }

        /* Individual control. */
        .control {
            padding: 15px;
            border-radius: 14px;
            background: #1b242e;
            border: 1px solid #2c3844;
        }

        /* Control labels. */
        label {
            display: block;
            margin-bottom: 8px;
            color: #aeb9c5;
            font-size: 0.85rem;
        }

        /* Select and number input. */
        select,
        input {
            width: 100%;
            padding: 12px;
            border: 1px solid #3b4855;
            border-radius: 10px;
            outline: none;
            background: #0b1015;
            color: white;
            font-size: 1rem;
        }

        /* Focus effect. */
        select:focus,
        input:focus {
            border-color: #6d91b3;
        }

        /* Roll button. */
        .roll-button {
            width: 100%;
            padding: 17px;
            margin-bottom: 20px;
            border: none;
            border-radius: 14px;
            background: #276749;
            color: white;
            font-size: 1.2rem;
            font-weight: bold;
            cursor: pointer;
            transition: 0.15s;
        }

        /* Roll button hover effect. */
        .roll-button:hover {
            background: #31845c;
        }

        /* Roll button pressed effect. */
        .roll-button:active {
            transform: scale(0.98);
        }

        /* Dice results area. */
        .dice-container {
            min-height: 180px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 15px;
            padding: 25px;
            margin-bottom: 20px;
            border-radius: 18px;
            background: #080c10;
            border: 1px solid #29333d;
        }

        /* Individual die. */
        .die {
            width: 85px;
            height: 85px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 16px;
            background: #f1f1f1;
            color: #111820;
            font-size: 2rem;
            font-weight: bold;
            box-shadow:
                inset 0 -5px 0 #c5c5c5,
                0 8px 20px rgba(0, 0, 0, 0.4);
        }

        /* Animation while the dice are rolling. */
        .rolling {
            animation: rollDice 0.15s infinite;
        }

        /* Dice rolling animation. */
        @keyframes rollDice {
            0% {
                transform: rotate(0deg) scale(1);
            }

            50% {
                transform: rotate(12deg) scale(1.08);
            }

            100% {
                transform: rotate(-12deg) scale(1);
            }
        }

        /* Statistics grid. */
        .stats {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
            margin-bottom: 20px;
        }

        /* Individual statistic card. */
        .stat {
            padding: 15px;
            text-align: center;
            border-radius: 14px;
            background: #1b242e;
            border: 1px solid #2c3844;
        }

        /* Statistic label. */
        .stat-label {
            display: block;
            color: #8f9ba8;
            font-size: 0.75rem;
            margin-bottom: 5px;
        }

        /* Statistic value. */
        .stat-value {
            font-size: 1.4rem;
            font-weight: bold;
        }

        /* History area. */
        .history {
            padding: 18px;
            border-radius: 14px;
            background: #0c1116;
            border: 1px solid #29333d;
        }

        /* History title. */
        .history h2 {
            font-size: 1rem;
            margin-bottom: 10px;
            color: #b8c3ce;
        }

        /* History list. */
        #historyList {
            max-height: 150px;
            overflow-y: auto;
            list-style: none;
        }

        /* History item. */
        #historyList li {
            padding: 8px 0;
            border-bottom: 1px solid #222b34;
            color: #aeb9c5;
            font-size: 0.85rem;
        }

        /* Empty history message. */
        .empty {
            color: #66727e;
        }

        /* Mobile layout. */
        @media (max-width: 650px) {
            .app {
                padding: 20px;
            }

            .controls {
                grid-template-columns: 1fr;
            }

            .stats {
                grid-template-columns: repeat(2, 1fr);
            }

            h1 {
                font-size: 1.6rem;
            }

            .die {
                width: 65px;
                height: 65px;
                font-size: 1.5rem;
            }
        }
    </style>
</head>

<body>

    <!-- Main dice simulator application. -->
    <main class="app">

        <!-- Application title. -->
        <h1>🎲 DICE SIMULATOR</h1>

        <!-- Application description. -->
        <p class="subtitle">
            Roll multiple dice with JavaScript
        </p>

        <!-- Configuration controls. -->
        <section class="controls">

            <!-- Number of dice control. -->
            <div class="control">

                <!-- Label for dice count. -->
                <label for="diceCount">
                    Number of Dice
                </label>

                <!-- Select number of dice. -->
                <select id="diceCount">

                    <!-- One die. -->
                    <option value="1">1 Die</option>

                    <!-- Two dice. -->
                    <option value="2">2 Dice</option>

                    <!-- Three dice. -->
                    <option value="3">3 Dice</option>

                    <!-- Four dice. -->
                    <option value="4">4 Dice</option>

                    <!-- Five dice. -->
                    <option value="5">5 Dice</option>

                    <!-- Six dice. -->
                    <option value="6">6 Dice</option>

                    <!-- Seven dice. -->
                    <option value="7">7 Dice</option>

                    <!-- Eight dice. -->
                    <option value="8">8 Dice</option>

                    <!-- Nine dice. -->
                    <option value="9">9 Dice</option>

                    <!-- Ten dice. -->
                    <option value="10">10 Dice</option>

                </select>
            </div>

            <!-- Dice size control. -->
            <div class="control">

                <!-- Label for dice type. -->
                <label for="diceSides">
                    Dice Type
                </label>

                <!-- Select dice sides. -->
                <select id="diceSides">

                    <!-- Four-sided die. -->
                    <option value="4">D4</option>

                    <!-- Six-sided die. -->
                    <option value="6" selected>D6</option>

                    <!-- Eight-sided die. -->
                    <option value="8">D8</option>

                    <!-- Ten-sided die. -->
                    <option value="10">D10</option>

                    <!-- Twelve-sided die. -->
                    <option value="12">D12</option>

                    <!-- Twenty-sided die. -->
                    <option value="20">D20</option>

                    <!-- One-hundred-sided die. -->
                    <option value="100">D100</option>

                </select>
            </div>

        </section>

        <!-- Main roll button. -->
        <button id="rollButton" class="roll-button">
            🎲 ROLL DICE
        </button>

        <!-- Dice results will appear here. -->
        <section id="diceContainer" class="dice-container">

            <!-- Initial message. -->
            <div id="startMessage">
                Press ROLL DICE to begin
            </div>

        </section>

        <!-- Statistics section. -->
        <section class="stats">

            <!-- Total statistic. -->
            <div class="stat">

                <span class="stat-label">
                    TOTAL
                </span>

                <span id="totalValue" class="stat-value">
                    0
                </span>

            </div>

            <!-- Average statistic. -->
            <div class="stat">

                <span class="stat-label">
                    AVERAGE
                </span>

                <span id="averageValue" class="stat-value">
                    0
                </span>

            </div>

            <!-- Highest statistic. -->
            <div class="stat">

                <span class="stat-label">
                    HIGHEST
                </span>

                <span id="highestValue" class="stat-value">
                    0
                </span>

            </div>

            <!-- Lowest statistic. -->
            <div class="stat">

                <span class="stat-label">
                    LOWEST
                </span>

                <span id="lowestValue" class="stat-value">
                    0
                </span>

            </div>

        </section>

        <!-- Roll history. -->
        <section class="history">

            <!-- History heading. -->
            <h2>
                ROLL HISTORY
            </h2>

            <!-- History entries. -->
            <ul id="historyList">

                <!-- Initial history message. -->
                <li class="empty">
                    No rolls yet.
                </li>

            </ul>

        </section>

    </main>


    <script>

        // Get the number-of-dice selector.
        const diceCount = document.getElementById("diceCount");

        // Get the dice-sides selector.
        const diceSides = document.getElementById("diceSides");

        // Get the roll button.
        const rollButton = document.getElementById("rollButton");

        // Get the dice display container.
        const diceContainer =
            document.getElementById("diceContainer");

        // Get the total display.
        const totalValue =
            document.getElementById("totalValue");

        // Get the average display.
        const averageValue =
            document.getElementById("averageValue");

        // Get the highest display.
        const highestValue =
            document.getElementById("highestValue");

        // Get the lowest display.
        const lowestValue =
            document.getElementById("lowestValue");

        // Get the history list.
        const historyList =
            document.getElementById("historyList");


        // Generate a random number between 1 and the number of sides.
        function rollDie(sides) {

            // Math.random() creates a number between 0 and 1.
            // Multiplication expands the range.
            // Math.floor() creates an integer.
            // +1 makes the minimum result 1.
            return Math.floor(Math.random() * sides) + 1;
        }


        // Create one visual die.
        function createDie(value) {

            // Create a new div element.
            const die = document.createElement("div");

            // Add the die CSS class.
            die.className = "die";

            // Display the rolled number.
            die.textContent = value;

            // Return the finished die.
            return die;
        }


        // Update all statistics.
        function updateStatistics(results) {

            // Calculate the total using reduce().
            const total =
                results.reduce(
                    (sum, value) => sum + value,
                    0
                );

            // Calculate the average.
            const average = total / results.length;

            // Find the highest roll.
            const highest = Math.max(...results);

            // Find the lowest roll.
            const lowest = Math.min(...results);

            // Display the total.
            totalValue.textContent = total;

            // Display the average with two decimal places.
            averageValue.textContent =
                average.toFixed(2);

            // Display the highest result.
            highestValue.textContent = highest;

            // Display the lowest result.
            lowestValue.textContent = lowest;
        }


        // Add the roll to the history.
        function addHistory(results, sides) {

            // Remove the empty history message.
            const emptyMessage =
                historyList.querySelector(".empty");

            // Check if the empty message exists.
            if (emptyMessage) {

                // Remove it.
                emptyMessage.remove();
            }

            // Create a history list item.
            const item = document.createElement("li");

            // Calculate the total.
            const total =
                results.reduce(
                    (sum, value) => sum + value,
                    0
                );

            // Create readable history text.
            item.textContent =
                `D${sides}: [${results.join(", ")}] → Total: ${total}`;

            // Add the newest result to the top.
            historyList.prepend(item);

            // Keep the history limited to 10 rolls.
            while (historyList.children.length > 10) {

                // Remove the oldest roll.
                historyList.removeChild(
                    historyList.lastChild
                );
            }
        }


        // Roll multiple dice.
        function rollDice() {

            // Read the number of dice.
            const numberOfDice =
                Number(diceCount.value);

            // Read the number of sides.
            const sides =
                Number(diceSides.value);

            // Remove previous dice.
            diceContainer.innerHTML = "";

            // Store all results.
            const results = [];

            // Create each die.
            for (
                let i = 0;
                i < numberOfDice;
                i++
            ) {

                // Create a temporary die.
                const die = createDie("?");

                // Add the rolling animation.
                die.classList.add("rolling");

                // Add the die to the display.
                diceContainer.appendChild(die);

                // Store the die's position.
                die.dataset.index = i;
            }


            // Animate the dice for a short period.
            setTimeout(function () {

                // Get all visual dice.
                const dice =
                    document.querySelectorAll(".die");

                // Generate a result for every die.
                dice.forEach(function (die) {

                    // Generate a random roll.
                    const result =
                        rollDie(sides);

                    // Store the result.
                    results.push(result);

                    // Display the result.
                    die.textContent = result;

                    // Remove the rolling animation.
                    die.classList.remove("rolling");
                });

                // Update statistics.
                updateStatistics(results);

                // Add this roll to history.
                addHistory(results, sides);

            }, 700);
        }


        // Listen for clicks on the roll button.
        rollButton.addEventListener(
            "click",
            rollDice
        );


        // Allow the Space key to roll the dice.
        document.addEventListener(
            "keydown",
            function(event) {

                // Check if the user pressed Space.
                if (event.code === "Space") {

                    // Prevent page scrolling.
                    event.preventDefault();

                    // Roll the dice.
                    rollDice();
                }

            }
        );

    </script>

</body>
</html>
