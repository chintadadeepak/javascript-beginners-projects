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
