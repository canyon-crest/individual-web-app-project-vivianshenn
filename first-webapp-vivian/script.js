function showFact() {
    const fact = "Dancing is one of the oldest art forms, over 20,000 years old.";
    document.getElementById("danceFact").textContent = fact;
}

function respondStyle() {
    const style = document.getElementById("favoriteStyle").value;
    const response = document.getElementById("styleResponse");

    if (style === "") {
        response.textContent = "Please enter a dance style!";
    } else {
        response.textContent = style + " is such a beautiful dance style!";
    }
}

function toggleInfo(id) {
    const element = document.getElementById(id);

    if (element.classList.contains("hidden")) {
        element.classList.remove("hidden");
    } else {
        element.classList.add("hidden");
    }
}
