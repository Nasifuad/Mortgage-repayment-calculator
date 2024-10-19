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
  if (amount.value === "" || term.value === "" || rate.value === "") {
    return false;
  } else {
    return true;
  }
}
const error = () => {
  if (amount.value === "") {
    error_amount.style.display = "block";
    ammount.classList.add("red"); // Red border for amount input
    euro.classList.add("erreuro"); // Error styling for euro sign
  } else {
    error_amount.style.display = "none";
    ammount.classList.remove("red"); // Remove red border
    euro.classList.remove("erreuro"); // Remove error styling for euro sign
  }

  if (term.value === "") {
    error_term.style.display = "block";
    termm.classList.add("red");
    input;
    year.classList.add("err"); // Error styling for year
  } else {
    error_term.style.display = "none";
    termm.classList.remove("red");
    year.classList.remove("err");
  }

  if (rate.value === "") {
    error_rate.style.display = "block";
    ratee.classList.add("red"); // Red border for rate input
    percentage.classList.add("err"); // Error styling for percentage
  } else {
    error_rate.style.display = "none";
    ratee.classList.remove("red");
    percentage.classList.remove("err");
  }
};
