const submit = document.getElementById("submit");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const amount = document.getElementById("amount");
const term = document.getElementById("term");
const rate = document.getElementById("rate");
const error_term = document.getElementById("error_term");
const error_amount = document.getElementById("error_amount");
const euro = document.getElementById("euro");
const percentage = document.getElementById("percentage");
const year = document.getElementById("year");
const error_rate = document.getElementById("error_rate");
const ammount = document.getElementById("ammount");
const termm = document.getElementById("termm");
const ratee = document.getElementById("ratee");

submit.addEventListener("click", () => {
  if (check_empty() === true) {
    console.log("true");
    box2.style.display = "none";
    box1.style.display = "flex";
  } else {
    console.log("false");
    error();
  }
});
