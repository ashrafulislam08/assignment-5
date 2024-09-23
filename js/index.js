// Event handling for noakhali donate button
const donateForNoakhali = document.getElementById("donate-for-noakhali");
donateForNoakhali.addEventListener("click", function () {
  // Get the elements
  const accountBalance = document.getElementById("account-balance");
  const donatedAmount = document.getElementById("noakhali-donated-amount");
  const noakhaliDonateInput = document.getElementById("noakhali-donated-input");

  // Validation
  if (typeof Number(noakhaliDonateInput) != "number") {
    alert("Invalid Donation Amount");
  }

  //   Convert value into number
  const accountBalanceValue = parseFloat(accountBalance.innerText);
  const donatedAmountValue = parseFloat(donatedAmount.innerText);
  const donatedInputValue = parseFloat(noakhaliDonateInput.value);

  //   Calculate
  const mainAccountBalance = accountBalanceValue - donatedInputValue;
  const donatedMoney = donatedAmountValue + donatedInputValue;

  accountBalance.innerText = mainAccountBalance;
  donatedAmount.innerText = donatedMoney;
  if (parseFloat(accountBalance.innerText) < 0) {
    alert("Not enough money");
  }
});
