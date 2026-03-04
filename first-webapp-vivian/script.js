function toggleInfo(id) {
    const element = document.getElementById(id);
    element.classList.toggle("hidden");
}

function showMessage() {
    const name = document.getElementById("name").value;
    const style = document.getElementById("style").value;

    const response = document.getElementById("response");
    response.textContent = `Thank you, ${name}! ${style} is an amazing dance style!`;

    return false; // prevents page refresh
}
