const accountBalance = document.getElementById("account-balance");

// Event handling for noakhali donate button
const donateForNoakhali = document.getElementById("donate-for-noakhali");
donateForNoakhali.addEventListener("click", function () {
  // Get the elements
  const donatedAmount = document.getElementById("noakhali-donated-amount");
  const noakhaliDonateInput = document.getElementById("noakhali-donated-input");

  //   Convert value into number
  const accountBalanceValue = Number(accountBalance.innerText);
  const donatedAmountValue = Number(donatedAmount.innerText);
  const donatedInputValue = Number(noakhaliDonateInput.value);

  // Validation
  validation(donatedInputValue, accountBalanceValue);

  //   Calculate
  const mainAccountBalance = accountBalanceValue - donatedInputValue;
  const donatedMoney = donatedAmountValue + donatedInputValue;
  accountBalance.innerText = mainAccountBalance;
  donatedAmount.innerText = donatedMoney;
  // Create donated  history
  createDonatedHistory(donatedInputValue, "Flood at Noakhali, Bangladesh");
});

// Event handling for feni donate button

// Event handling for feni donate button
const donateForFeni = document.getElementById("donate-for-feni");
donateForFeni.addEventListener("click", function () {
  // Get the elements
  const feniDonatedAmount = document.getElementById("feni-donated-amount");
  const feniDonatedInput = document.getElementById("feni-donated-input");

  //   Convert value into number
  const accountBalanceValue = Number(accountBalance.innerText);
  const donatedAmountValue = Number(feniDonatedAmount.innerText);
  const feniDonatedInputValue = Number(feniDonatedInput.value);

  // Validation
  validation(feniDonatedInputValue, accountBalanceValue);

  //   Calculate
  const mainAccountBalance = accountBalanceValue - feniDonatedInputValue;
  const donatedMoney = donatedAmountValue + feniDonatedInputValue;
  accountBalance.innerText = mainAccountBalance;
  feniDonatedAmount.innerText = donatedMoney;
  // Create donated  history
  createDonatedHistory(feniDonatedInputValue, "Flood at Feni, Bangladesh");
});
