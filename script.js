const submit = document.getElementById("submit");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const mortage = document.getElementById("mortage");
const interest = document.getElementById("interest");
const years = document.getElementById("years");
submit.addEventListener("click", () => {
  if (check_empty()) {
    box2.style.display = "none";
    box1.style.display = "flex";
  } else {
    error();
  }
});

function check_empty() {
  if (mortage === "" || interest === "" || years === "") {
    return false;
  } else {
    return true;
  }
}
