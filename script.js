/* script.js */
document.getElementById("toggle-info")?.addEventListener("click", () => {
    const tip = document.getElementById("dancing-tracker");
    tip.classList.toggle("hidden");
  });
  
  document.getElementById("dance-class-tracker")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const classInput = document.getElementById("class");
    const classList = document.getElementById("class-list");
  
    if (classInput.value.trim() !== "") {
      const newItem = document.createElement("li");
      newItem.textContent = classInput.value;
      classList.appendChild(newItem);
      classInput.value = "";
    }
  });
