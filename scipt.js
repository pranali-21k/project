
console.log("Script loaded successfully");

let string = "";
const buttons = document.querySelectorAll(".button");
const inputField = document.querySelector(".input");

if (!buttons || !inputField) {
    console.error("Buttons or input field not found. Check your HTML structure or selectors.");
}

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        const clickedButton = e.target.innerHTML;
        console.log("Button clicked:", clickedButton); // Debugging log

        if (clickedButton === "=") {
            try {
                string = eval(string); // Evaluate the expression
                inputField.value = string; // Display the result
            } catch {
                inputField.value = "Error"; // Show an error message for invalid input
                string = ""; // Reset the input string
            }
        } else if (clickedButton === "C") {
            string = ""; // Clear the input
            inputField.value = string;
        } else {
            string += clickedButton; // Append the button's value
            inputField.value = string; // Update the display
        }

        console.log("Current string:", string); // Debugging log
    });
});
