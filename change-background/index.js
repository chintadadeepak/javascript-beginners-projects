const tiles = document.querySelectorAll(".tile");
const body = document.querySelector("body");

tiles.forEach((tile) => {
  tile.addEventListener("click", (event) => {
    switch (event.target.id) {
      case "blue":
        body.style.backgroundColor = event.target.id;
        break;
      case "yellow":
        body.style.backgroundColor = event.target.id;
        break;
      case "green":
        body.style.backgroundColor = event.target.id;
        break;
      case "pink":
        body.style.backgroundColor = event.target.id;
        break;
    }
  });
});
