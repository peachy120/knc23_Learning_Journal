window.addEventListener("load", function () {
    // Q2
    const fahrenheitInput = document.querySelector("#fahrenheit");
    const celsiusOutput = document.querySelector("#celsius");

    fahrenheitInput.addEventListener("keyup", function () {
        const f = parseFloat(fahrenheitInput.value);
        if (!isNaN(f)) {
            const c = ((f - 32) * 5 / 9).toFixed(2);
            celsiusOutput.textContent = `${c} °C`;
        } else {
            celsiusOutput.textContent = "";
        }
    });

    // Q3
    const form3 = document.querySelector("#form3");
    const input3 = document.querySelector("#input3");
    const div3 = document.querySelector("#div3");

    form3.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = input3.value.trim();
        const isValid = (
            email.length >= 20 &&
            (email.endsWith("@brighton.ac.uk") || email.endsWith("@uni.brighton.ac.uk"))
        );

        if (!isValid) {
            div3.textContent = "Invalid email. Must be at least 20 characters and end with '@brighton.ac.uk' or '@uni.brighton.ac.uk'.";
            input3.style.backgroundColor = "red";
        } else {
            div3.textContent = "";
            input3.style.backgroundColor = "lightgreen";
        }
    });

    // Q4
    const btnAdd = document.querySelector("#btn4add");
    const btnClear = document.querySelector("#btn4clear");
    const input4 = document.querySelector("#input4");
    const ul4 = document.querySelector("#ul4");

    btnAdd.addEventListener("click", function () {
        const value = input4.value.trim();
        if (value !== "") {
            const li = document.createElement("li");
            li.textContent = value;
            ul4.appendChild(li);
            input4.value = "";
        }
    });

    btnClear.addEventListener("click", function () {
        ul4.innerHTML = "";
    });

    // Q5
    const form5 = document.querySelector("#form5");

    form5.addEventListener("submit", function (e) {
        e.preventDefault();

        // Checkboxes
        const food = [...document.querySelectorAll("input[name='food']:checked")].map(cb => cb.value);
        console.log("Selected Food Items:", food.join(", ") || "None");

        // Radio buttons
        const pet = document.querySelector("input[name='pet']:checked");
        console.log("Preferred Pet:", pet ? pet.value : "None");

        // Select dropdown
        const fruit = document.querySelector("#fruitSelect").value;
        console.log("Selected Fruit:", fruit);

        // Textarea
        const feedback = document.querySelector("#feedback").value;
        console.log("Feedback:", feedback);
    });
});