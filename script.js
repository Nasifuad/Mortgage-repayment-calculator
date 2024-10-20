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
const repayment = document.getElementById("repayment");
const interest_only = document.getElementById("interest_only");
const err_type = document.getElementById("error_type");
const clc = document.getElementById("clc");
const monthly_pay = document.getElementById("monthly_pay");
const overterm_pay = document.getElementById("overterm_pay");
clc.addEventListener("click", () => {
  amount.value = "";
  term.value = "";
  rate.value = "";
  error_rate.style.display = "none";
  error_term.style.display = "none";
  error_amount.style.display = "none";
  error_term.style.display = "none";
  error_rate.style.display = "none";
  error_amount.style.display = "none";
  error_term.style.display = "none";
  error_rate.style.display = "none";
  error_amount.style.display = "none";
  euro.classList.remove("erreuro");
  ammount.classList.remove("red");
  year.classList.remove("err");
  percentage.classList.remove("err");
  termm.classList.remove("red");
  ratee.classList.remove("red");
  repayment.checked = false;
  interest_only.checked = false;
  repayment.value = "";
  interest_only.value = "";
  err_type.style.display = "none";
  box2.style.display = "flex";
  box1.style.display = "none";
});
submit.addEventListener("click", () => {
  if (check_empty() === true) {
    error();
    console.log("true");
    box2.style.display = "none";
    box1.style.display = "flex";
    const monthlyPayment = calculate_monthly();
    const overtheterm = calculate_repay();
    monthly_pay.innerText = monthlyPayment;
    overterm_pay.innerText = overtheterm;
    console.log(monthlyPayment);
  } else {
    error();
  }
});
function check_empty() {
  const amount_value = amount.value;
  const term_value = term.value;
  const rate_value = rate.value;
  if (amount_value === "" || term_value === "" || rate_value === "") {
    return false;
  } else {
    return true;
  }
}
function error() {
  const amount_value = amount.value;
  const term_value = term.value;
  const rate_value = rate.value;
  const repayment_value = repayment.value;
  const interest_only_value = interest_only.value;
  if (amount_value.trim() === "") {
    error_amount.style.display = "block";
    euro.classList.add("erreuro");
    ammount.classList.add("red");
  } else {
    error_amount.style.display = "none";
    euro.classList.remove("erreuro");
    ammount.classList.remove("red");
  }
  if (rate_value.trim() === "") {
    error_rate.style.display = "block";
    percentage.classList.add("err");
    ratee.classList.add("red");
  } else {
    error_rate.style.display = "none";
    percentage.classList.remove("err");
    ratee.classList.remove("red");
  }
  if (term_value.trim() === "") {
    error_term.style.display = "block";
    year.classList.add("err");
    termm.classList.add("red");
  } else {
    error_term.style.display = "none";
    year.classList.remove("err");
    termm.classList.remove("red");
  }
  if (repayment.checked || interest_only.checked) {
    console.log("true");
    err_type.style.display = "none";
  } else {
    console.log("false");
    err_type.style.display = "block";
  }
}
function calculate_monthly() {
  const amount_value = parseFloat(amount.value);
  const term_value = parseInt(term.value);
  const rate_value = parseFloat(rate.value) / 100;
  const type = () => {
    if (repayment.checked) {
      return "repayment";
    } else if (interest_only.checked) {
      return "interest";
    } else {
      return null;
    }
  };
  const calculateMonthlyRepayment = () => {
    const loanType = type();
    const monthlyRate = rate_value / 12;
    const months = term_value * 12;
    let monthlyRepayment;
    if (loanType === "repayment") {
      monthlyRepayment =
        (amount_value * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);
    } else if (loanType === "interest") {
      monthlyRepayment = amount_value * monthlyRate;
    }
    return monthlyRepayment.toFixed(2);
  };

  const monthlyPayment = calculateMonthlyRepayment();
  return monthlyPayment;
}
function calculate_repay() {
  const amount_value = parseFloat(amount.value);
  const term_value = parseInt(term.value);
  const rate_value = parseFloat(rate.value) / 100;

  const type = () => {
    if (repayment.checked) {
      return "repayment";
    } else if (interest_only.checked) {
      return "interest";
    } else {
      return null;
    }
  };
  const calculateTotalRepayment = () => {
    const loanType = type();
    const monthlyRate = rate_value / 12;
    const months = term_value * 12;

    let monthlyRepayment;
    let totalRepayment;

    if (loanType === "repayment") {
      monthlyRepayment =
        (amount_value * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);
      totalRepayment = monthlyRepayment * months;
    } else if (loanType === "interest") {
      monthlyRepayment = amount_value * monthlyRate;
      totalRepayment = monthlyRepayment * months + amount_value;
    }

    return totalRepayment.toFixed(2);
  };

  const totalPayment = calculateTotalRepayment();
  return totalPayment;
}
