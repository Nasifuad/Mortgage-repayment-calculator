const submit = document.getElementById("submit");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const amount = document.getElementById("amount");
const term = document.getElementById("term");
const rate = document.getElementById("rate");
const error_term = document.getElementById("error_term");
const error_amount = document.getElementById("error_amount");
const error_rate = document.getElementById("error_rate");
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
  if (amount.value === "" || term.value === "" || rate.value === "") {
    error_amount.style.display = "block";
    error_term.style.display = "block";
    error_rate.style.display = "block";
  }
};
