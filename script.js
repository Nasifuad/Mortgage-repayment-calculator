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

function check_empty() {
  const amount_value = amount.value;
  const term_value = term.value;
  const rate_value = rate.value;
  if (amount_value === "") {
    error_amount.style.display = "block";
    euro.classList.add("erreuro");
    ammount.classList.add("red");
  } else {
    error_amount.style.display = "none";
    euro.classList.remove("erreuro");
    ammount.classList.remove("red");
  }
  if (rate_value === "") {
    error_rate.style.display = "block";
    percentage.classList.add("err");
    ratee.classList.add("red");
  } else {
    error_rate.style.display = "none";
    percentage.classList.remove("err");
    ratee.classList.remove("red");
  }
  if (term_value === "") {
    error_term.style.display = "block";
    year.classList.add("err");
    termm.classList.add("red");
  } else {
    error_term.style.display = "none";
    year.classList.remove("err");
    termm.classList.remove("red");
  }
}
