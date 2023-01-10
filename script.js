(function () {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let clean = document.querySelector(".clean");
  let equal = document.querySelector(".equal");

  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let value = e.target.dataset.num;
      screen.value += value;
    });
  });

    equal.addEventListener("click", function (b) {
      if (screen.value == "") {
        screen.value = "";
      } else {
        let answer = eval(screen.value);
        screen.value = answer;
      }
    });

    clean.addEventListener('click', function(e){
        screen.value="";
    })
})();
