window.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", (ev) => validateUsername(ev));

    const usernameInput = document.getElementById("id_username");
    usernameInput.addEventListener("input", (ev) => inputHandler(ev));
    const errSpan = document.createElement("span");
    errSpan.className = "error";
    errSpan.id = usernameInput.id + "-error";
    usernameInput.insertAdjacentElement("afterend", errSpan);
});

function inputHandler(event) {
    const element = event.target;
    if (element instanceof HTMLInputElement) {
        const errSpan = document.getElementById(element.id + "-error");
        if (errSpan != null) {
            const trimmed = element.value.trim();
            if (element.required) {
                const name = element.name[0].toUpperCase() + element.name.substring(1);
                if (trimmed == "") {
                    errSpan.innerText = name + " is required!";
                } else if (trimmed.length < element.minLength) {
                    errSpan.innerText = name + " must be at least " + element.minLength + " characters!";
                } else {
                    errSpan.innerText = "";
                }
            }
        }
    }
}

function validateUsername(event) {
    event.preventDefault();
    const username = document.getElementById("id_username");
    if (username == null) {
        // User may have deleted input html client side
        console.error("Couldn't find username field!");
    } else if (! (username instanceof HTMLInputElement)) {
        // User may have changed input html client side
        console.error("Username is not an input!");
    } else {
        //valid username field
        let errSpan = document.getElementById("id_username-error");
        if (errSpan == null) {
            errSpan = document.createElement("span");
            errSpan.className = "error";
            errSpan.id = "id_username-error";
            username.insertAdjacentElement("afterend", errSpan);
        }
        
        const trimmed = username.value.trim();
        if (trimmed == "") {
            errSpan.innerText = "Username is required!";
        } else if (trimmed.length < 8) {
            errSpan.innerText = "Username must be at least 8 characters."
        } else {
            errSpan.innerText = "";
        }
    }
}