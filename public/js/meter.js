let amountEl = document.getElementById("amount");
let counter = document.getElementById("counter");
const minusBtn = document.querySelector(".decrement");
const plusBtn = document.querySelector(".increment");

var enzoSavings = localStorage.getItem("enzoSavings");
counter.textContent = "$" + enzoSavings;
const thermometerHeight = function () {
  let yTranslate = enzoSavings * -1.4 - 10.9;
  console.log(yTranslate);
  amountEl.style.height = enzoSavings * 10 + "%";
  document.getElementById(
    "mario"
  ).style.transform = `translate(-25%, ${yTranslate}em)`;
};
thermometerHeight();

plusBtn.addEventListener("click", function () {
  console.log("plus clicked");
  if (enzoSavings < 10) {
    enzoSavings++;
    counter.textContent = "$" + enzoSavings;
    localStorage.setItem("enzoSavings", enzoSavings);
    amountEl.style.height = enzoSavings * 10 + "%";
    document.getElementById("mario").style.transform = `translate(-25%, ${
      enzoSavings * -1.3 - 10.9
    }em)`;
  }
});

minusBtn.addEventListener("click", function () {
  console.log("minus clicked");
  if (enzoSavings > 0) {
    enzoSavings--;
    counter.textContent = "$" + enzoSavings;
    localStorage.setItem("enzoSavings", enzoSavings);
    amountEl.style.height = enzoSavings * 10 + "%";
    document.getElementById("mario").style.transform = `translate(-25%, ${
      enzoSavings * -1.3 - 10.9
    }em)`;
  }
});
