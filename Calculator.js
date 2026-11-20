<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <!-- Make the calculator responsive on mobile devices. -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>JavaScript Calculator</title>

    <style>
        /* Remove default spacing and use border-box sizing. */
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        /* Center the calculator on the page. */
        body {
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background:
                radial-gradient(circle at top, #263238, #0d1117 60%);
            font-family: Arial, sans-serif;
            color: white;
            padding: 20px;
        }

        /* Main calculator container. */
        .calculator {
            width: 100%;
            max-width: 420px;
            padding: 20px;
            border-radius: 24px;
            background: #151b23;
            border: 1px solid #303944;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }

        /* Calculator title. */
        h1 {
            text-align: center;
            margin-bottom: 15px;
            font-size: 1.5rem;
            letter-spacing: 2px;
        }

        /* Display area. */
        .display {
            min-height: 120px;
            padding: 20px;
            margin-bottom: 15px;
            border-radius: 16px;
            background: #090c10;
            border: 1px solid #29313a;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            text-align: right;
            overflow: hidden;
        }

        /* Shows the previous calculation. */
        .previous {
            min-height: 25px;
            color: #8b98a8;
            font-size: 0.95rem;
            word-wrap: break-word;
        }

        /* Shows the current number. */
        .current {
            margin-top: 5px;
            font-size: 2.5rem;
            font-weight: bold;
            overflow-wrap: anywhere;
        }

        /* Keyboard status indicator. */
        .keyboard-info {
            text-align: center;
            color: #8995a3;
            font-size: 0.75rem;
            margin-bottom: 12px;
        }

        /* Calculator button grid. */
        .buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }

        /* General button styling. */
        button {
            min-height: 65px;
            border: none;
            border-radius: 14px;
            background: #242c35;
            color: white;
            font-size: 1.25rem;
            font-weight: bold;
            cursor: pointer;
            transition:
                transform 0.1s,
                background 0.15s,
                box-shadow 0.15s;
        }

        /* Button hover effect. */
        button:hover {
            background: #323c48;
        }

        /* Button pressed effect. */
        button:active {
            transform: scale(0.94);
        }

        /* Operator buttons. */
        .operator {
            background: #354d63;
        }

        /* Operator hover state. */
        .operator:hover {
            background: #45647e;
        }

        /* Clear button. */
        .clear {
            background: #713c3c;
        }

        /* Clear hover state. */
        .clear:hover {
            background: #8d4a4a;
        }

        /* Equals button. */
        .equals {
            background: #246b52;
        }

        /* Equals hover state. */
        .equals:hover {
            background: #2d8667;
        }

        /* Zero button spans two columns. */
        .zero {
            grid-column: span 2;
        }

        /* History section. */
        .history {
            margin-top: 20px;
            padding-top: 15px;
            border-top: 1px solid #303944;
        }

        /* History heading. */
        .history h2 {
            font-size: 0.9rem;
            color: #9da8b5;
            margin-bottom: 8px;
        }

        /* History list. */
        #historyList {
            max-height: 120px;
            overflow-y: auto;
            list-style: none;
        }

        /* Individual history item. */
        #historyList li {
            padding: 6px 0;
            color: #cbd3dc;
            font-size: 0.85rem;
            border-bottom: 1px solid #252c34;
        }

        /* Mobile adjustments. */
        @media (max-width: 450px) {
            .calculator {
                padding: 15px;
            }

            button {
                min-height: 58px;
            }

            .current {
                font-size: 2rem;
            }
        }
    </style>
</head>

<body>

    <!-- Main calculator. -->
    <main class="calculator">

        <!-- Calculator title. -->
        <h1>JAVASCRIPT CALCULATOR</h1>

        <!-- Display. -->
        <section class="display">

            <!-- Previous calculation appears here. -->
            <div id="previous" class="previous"></div>

            <!-- Current number appears here. -->
            <div id="current" class="current">0</div>

        </section>

        <!-- Keyboard instructions. -->
        <div class="keyboard-info">
            Keyboard: 0-9 • + • - • * • / • Enter • Escape • Backspace
        </div>

        <!-- Calculator buttons. -->
        <section class="buttons">

            <!-- Clear everything. -->
            <button class="clear" data-action="clear">AC</button>

            <!-- Delete one character. -->
            <button data-action="delete">DEL</button>

            <!-- Percentage. -->
            <button data-action="percent">%</button>

            <!-- Division. -->
            <button class="operator" data-operator="/">÷</button>

            <!-- Number 7. -->
            <button data-number="7">7</button>

            <!-- Number 8. -->
            <button data-number="8">8</button>

            <!-- Number 9. -->
            <button data-number="9">9</button>

            <!-- Multiplication. -->
            <button class="operator" data-operator="*">×</button>

            <!-- Number 4. -->
            <button data-number="4">4</button>

            <!-- Number 5. -->
            <button data-number="5">5</button>

            <!-- Number 6. -->
            <button data-number="6">6</button>

            <!-- Subtraction. -->
            <button class="operator" data-operator="-">−</button>

            <!-- Number 1. -->
            <button data-number="1">1</button>

            <!-- Number 2. -->
            <button data-number="2">2</button>

            <!-- Number 3. -->
            <button data-number="3">3</button>

            <!-- Addition. -->
            <button class="operator" data-operator="+">+</button>

            <!-- Number 0. -->
            <button class="zero" data-number="0">0</button>

            <!-- Decimal point. -->
            <button data-action="decimal">.</button>

            <!-- Equals. -->
            <button class="equals" data-action="equals">=</button>

        </section>

        <!-- Calculation history. -->
        <section class="history">

            <!-- History heading. -->
            <h2>CALCULATION HISTORY</h2>

            <!-- History entries will be inserted here. -->
            <ul id="historyList"></ul>

        </section>

    </main>

    <script>
        // Store the current number shown on the calculator.
        let currentValue = "0";

        // Store the previous number.
        let previousValue = "";

        // Store the selected mathematical operator.
        let operator = null;

        // Determine whether the next number should replace the display.
        let waitingForOperand = false;

        // Get the current display element.
        const currentDisplay = document.getElementById("current");

        // Get the previous display element.
        const previousDisplay = document.getElementById("previous");

        // Get the history list.
        const historyList = document.getElementById("historyList");


        // Update the calculator display.
        function updateDisplay() {

            // Display the current value.
            currentDisplay.textContent = formatNumber(currentValue);

            // Display the previous calculation.
            if (previousValue && operator) {

                // Convert multiplication and division symbols for display.
                let displayOperator = operator;

                if (operator === "*") {
                    displayOperator = "×";
                }

                if (operator === "/") {
                    displayOperator = "÷";
                }

                // Show previous number and operator.
                previousDisplay.textContent =
                    `${formatNumber(previousValue)} ${displayOperator}`;
            } else {

                // Clear the previous display.
                previousDisplay.textContent = "";
            }
        }


        // Format large numbers with commas.
        function formatNumber(value) {

            // Do not modify an empty value.
            if (value === "") {
                return "";
            }

            // Handle decimal values.
            if (value.includes(".")) {

                // Split the number around the decimal point.
                const parts = value.split(".");

                // Format the integer portion.
                const integerPart =
                    Number(parts[0]).toLocaleString("en-US");

                // Return the formatted decimal.
                return `${integerPart}.${parts[1]}`;
            }

            // Format normal integers.
            return Number(value).toLocaleString("en-US");
        }


        // Add a number to the display.
        function inputNumber(number) {

            // Replace the display after an operator or calculation.
            if (waitingForOperand) {

                // Start with the new number.
                currentValue = number;

                // Stop waiting for an operand.
                waitingForOperand = false;

            } else {

                // Replace the initial zero.
                if (currentValue === "0") {

                    // Set the current number.
                    currentValue = number;

                } else {

                    // Add the number to the existing value.
                    currentValue += number;
                }
            }

            // Refresh the display.
            updateDisplay();
        }


        // Add a decimal point.
        function inputDecimal() {

            // Replace the display if waiting for a new operand.
            if (waitingForOperand) {

                // Start a new decimal number.
                currentValue = "0.";

                // Stop waiting.
                waitingForOperand = false;

                // Update the display.
                updateDisplay();

                // Exit the function.
                return;
            }

            // Only allow one decimal point.
            if (!currentValue.includes(".")) {

                // Add the decimal point.
                currentValue += ".";

                // Update the display.
                updateDisplay();
            }
        }


        // Select an arithmetic operator.
        function chooseOperator(nextOperator) {

            // Convert the current value to a number.
            const inputValue = parseFloat(currentValue);

            // If an operator already exists, calculate first.
            if (operator && waitingForOperand) {

                // Replace the existing operator.
                operator = nextOperator;

                // Update the display.
                updateDisplay();

                // Exit the function.
                return;
            }

            // If a previous value exists, perform the calculation.
            if (previousValue !== "") {

                // Calculate the result.
                calculate();

            } else {

                // Store the current number.
                previousValue = currentValue;
            }

            // Store the selected operator.
            operator = nextOperator;

            // Wait for the next number.
            waitingForOperand = true;

            // Update the display.
            updateDisplay();
        }


        // Perform the calculation.
        function calculate() {

            // Convert the stored number to a number.
            const firstNumber = parseFloat(previousValue);

            // Convert the current number to a number.
            const secondNumber = parseFloat(currentValue);

            // Variable for the result.
            let result;

            // Make sure both values are valid.
            if (
                Number.isNaN(firstNumber) ||
                Number.isNaN(secondNumber)
            ) {
                return;
            }

            // Perform addition.
            if (operator === "+") {
                result = firstNumber + secondNumber;
            }

            // Perform subtraction.
            if (operator === "-") {
                result = firstNumber - secondNumber;
            }

            // Perform multiplication.
            if (operator === "*") {
                result = firstNumber * secondNumber;
            }

            // Perform division.
            if (operator === "/") {

                // Prevent division by zero.
                if (secondNumber === 0) {

                    // Show an error.
                    currentValue = "Error";

                    // Reset calculator state.
                    previousValue = "";
                    operator = null;
                    waitingForOperand = true;

                    // Update display.
                    updateDisplay();

                    // Exit.
                    return;
                }

                // Divide the numbers.
                result = firstNumber / secondNumber;
            }

            // Round floating-point errors.
            result = Number(result.toPrecision(12));

            // Create a readable operation.
            let displayOperator = operator;

            // Replace symbols for the history.
            if (operator === "*") {
                displayOperator = "×";
            }

            if (operator === "/") {
                displayOperator = "÷";
            }

            // Create the history entry.
            const calculation =
                `${formatNumber(previousValue)} ${displayOperator} ${formatNumber(currentValue)} = ${formatNumber(String(result))}`;

            // Add the calculation to history.
            addHistory(calculation);

            // Store the result.
            currentValue = String(result);

            // Clear the previous number.
            previousValue = "";

            // Clear the operator.
            operator = null;

            // Wait for another operand.
            waitingForOperand = true;

            // Update the display.
            updateDisplay();
        }


        // Delete the last digit.
        function deleteLastDigit() {

            // Do nothing when waiting for a new operand.
            if (waitingForOperand) {
                return;
            }

            // If there is only one digit, return to zero.
            if (
                currentValue.length <= 1 ||
                currentValue === "Error"
            ) {

                // Reset to zero.
                currentValue = "0";

            } else {

                // Remove the final character.
                currentValue =
                    currentValue.slice(0, -1);
            }

            // Update the display.
            updateDisplay();
        }


        // Convert the current number to a percentage.
        function percentage() {

            // Convert the value to a number.
            const value = parseFloat(currentValue);

            // Calculate one percent of the value.
            currentValue = String(value / 100);

            // Update the display.
            updateDisplay();
        }


        // Clear the entire calculator.
        function clearCalculator() {

            // Reset current value.
            currentValue = "0";

            // Reset previous value.
            previousValue = "";

            // Reset operator.
            operator = null;

            // Reset operand state.
            waitingForOperand = false;

            // Update the display.
            updateDisplay();
        }


        // Add a calculation to the history.
        function addHistory(calculation) {

            // Create a new list item.
            const item = document.createElement("li");

            // Set the calculation text.
            item.textContent = calculation;

            // Add it to the beginning of the list.
            historyList.prepend(item);

            // Keep only the latest 10 calculations.
            while (historyList.children.length > 10) {

                // Remove the oldest entry.
                historyList.removeChild(
                    historyList.lastChild
                );
            }
        }


        // Listen for calculator button clicks.
        document
            .querySelector(".buttons")
            .addEventListener("click", function(event) {

                // Find the clicked button.
                const button = event.target.closest("button");

                // Ignore clicks outside buttons.
                if (!button) {
                    return;
                }

                // Check whether the button contains a number.
                if (button.dataset.number !== undefined) {

                    // Enter the number.
                    inputNumber(button.dataset.number);

                    // Stop processing.
                    return;
                }

                // Check whether the button contains an operator.
                if (button.dataset.operator !== undefined) {

                    // Select the operator.
                    chooseOperator(button.dataset.operator);

                    // Stop processing.
                    return;
                }

                // Read the button action.
                const action = button.dataset.action;

                // Perform the requested action.
                if (action === "decimal") {
                    inputDecimal();
                }

                if (action === "equals") {
                    calculate();
                }

                if (action === "clear") {
                    clearCalculator();
                }

                if (action === "delete") {
                    deleteLastDigit();
                }

                if (action === "percent") {
                    percentage();
                }
            });


        // Add keyboard support.
        document.addEventListener("keydown", function(event) {

            // Read the pressed keyboard key.
            const key = event.key;

            // Handle numbers.
            if (key >= "0" && key <= "9") {

                // Enter the number.
                inputNumber(key);

                // Stop default browser behavior.
                event.preventDefault();

                // Exit.
                return;
            }

            // Handle the decimal point.
            if (key === ".") {

                // Enter decimal.
                inputDecimal();

                // Prevent browser behavior.
                event.preventDefault();

                // Exit.
                return;
            }

            // Handle arithmetic operators.
            if (
                key === "+" ||
                key === "-" ||
                key === "*" ||
                key === "/"
            ) {

                // Select the operator.
                chooseOperator(key);

                // Prevent browser behavior.
                event.preventDefault();

                // Exit.
                return;
            }

            // Handle Enter and equals.
            if (key === "Enter" || key === "=") {

                // Calculate the result.
                calculate();

                // Prevent browser behavior.
                event.preventDefault();

                // Exit.
                return;
            }

            // Handle Escape.
            if (key === "Escape") {

                // Clear the calculator.
                clearCalculator();

                // Prevent browser behavior.
                event.preventDefault();

                // Exit.
                return;
            }

            // Handle Backspace.
            if (key === "Backspace") {

                // Delete the last digit.
                deleteLastDigit();

                // Prevent browser behavior.
                event.preventDefault();

                // Exit.
                return;
            }

            // Handle percentage.
            if (key === "%") {

                // Calculate percentage.
                percentage();

                // Prevent browser behavior.
                event.preventDefault();
            }
        });


        // Initialize the calculator display.
        updateDisplay();
    </script>

</body>
</html>
