const input = document.getElementById("search-bar");
const cardName = document.getElementsByClassName("card-name");

input.addEventListener("keyup", (e) => {
  const inputValue = e.target.value.toLowerCase();

  for (let counter = 0; counter < cardName.length; counter++) {
    const searchValue = cardName[counter].textContent.toLowerCase();
    if (searchValue.includes(inputValue)) {
      cardName[counter].parentElement.style.display = "block";
    } else {
      cardName[counter].parentElement.style.display = "none";
    }
  }
});
