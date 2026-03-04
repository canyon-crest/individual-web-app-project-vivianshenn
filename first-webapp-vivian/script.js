function showFact() {
    const fact = "Dancing is one of the oldest art forms, with cave paintings showing people dancing over 20,000 years ago, long before written records.";
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
