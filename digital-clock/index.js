const clock = document.querySelector("#clock");
console.log(clock);

clock.addEventListener("click", function (e) {
  setInterval(function () {
    const date = new Date();
    clock.innerHTML = `<H3>TIME: ${date.toLocaleTimeString()}</H3>`;
    console.log(date.toLocaleTimeString());
  }, 1000);
});
