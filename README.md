# javascript-beginners-projects

learning javascript and doing some basic level projects

# project one

## demo projects which deals with basic level events and dom manipulation, you can find the source code in this repo itself. Happy Coding :-)

## first project source code

```const tiles = document.querySelectorAll(".tile");
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
```

## second project source code

```
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  if (height < 0 || isNaN(height))
    alert(`${height}, which you've entered not a valid input!!`);
  if (weight < 0 || isNaN(weight))
    alert(`${weight}, which you've entered not a valid input!!`);
  else {
    const result = (weight / ((height * height) / 10000)).toFixed(3);
    document.querySelector(
      "#result"
    ).innerHTML = `<h2>YOUR BMI VALUE : ${result}</h2>`;
    if (result < 18.5)
      document.querySelector(
        "#suggestion"
      ).innerHTML = `<h3>BMI VALUE OF ${result} is regarded as Under Weight, kindly bulk up</h3>`;
    else if (result >= 18.5 && result < 24.9)
      document.querySelector(
        "#suggestion"
      ).innerHTML = `<h3>BMI VALUE OF ${result} is regarded as Healthy Weight, Congratulations</h3>`;
    else
      document.querySelector(
        "#suggestion"
      ).innerHTML = `<h3>BMI VALUE OF ${result} is regarded as Over Weight, kindly do exercises</h3>`;
  }
});

```

## third project source code

```
const clock = document.querySelector("#clock");
console.log(clock);

clock.addEventListener("click", function (e) {
  setInterval(function () {
    const date = new Date();
    clock.innerHTML = `<H3>TIME: ${date.toLocaleTimeString()}</H3>`;
    console.log(date.toLocaleTimeString());
  }, 1000);
});
```
