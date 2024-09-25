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
  if (isNaN(donatedInputValue)) {
    return alert("Please insert a valid number");
  } else if (donatedInputValue === 0) {
    return alert("Enter a valid amount");
  } else if (donatedInputValue < 0) {
    return alert(
      "Negative number does not a valid amount. Please provide a valid amount"
    );
  } else if (donatedInputValue > accountBalanceValue) {
    return alert("Insufficient Balance");
  } else {
    //   Calculate
    const mainAccountBalance = accountBalanceValue - donatedInputValue;
    const donatedMoney = donatedAmountValue + donatedInputValue;
    accountBalance.innerText = mainAccountBalance;
    donatedAmount.innerText = donatedMoney;
    // Create donated  history
    createDonatedHistory(donatedInputValue, "Flood at Noakhali, Bangladesh");
    createModal();
  }
});

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
  if (isNaN(feniDonatedInputValue)) {
    return alert("Please insert a valid number");
  } else if (feniDonatedInputValue === 0) {
    return alert("Enter a valid amount");
  } else if (feniDonatedInputValue < 0) {
    return alert(
      "Negative number does not a valid amount. Please provide a valid amount"
    );
  } else if (feniDonatedInputValue > accountBalanceValue) {
    return alert("Insufficient Balance");
  } else {
    //   Calculate
    const mainAccountBalance = accountBalanceValue - feniDonatedInputValue;
    const donatedMoney = donatedAmountValue + feniDonatedInputValue;
    accountBalance.innerText = mainAccountBalance;
    feniDonatedAmount.innerText = donatedMoney;
    // Create donated  history
    createDonatedHistory(feniDonatedInputValue, "Flood at Feni, Bangladesh");
    createModal();
  }
});

// Event handling for feni donate button
const donateForQuota = document.getElementById("quota-donated-btn");
donateForQuota.addEventListener("click", function () {
  // Get the elements
  const QuotaDonatedAmount = document.getElementById("quota-donated-amount");
  const quotaDonatedInput = document.getElementById("quota-donated-input");

  //   Convert value into number
  const accountBalanceValue = Number(accountBalance.innerText);
  const donatedAmountValue = Number(QuotaDonatedAmount.innerText);
  const quotaDonatedInputValue = Number(quotaDonatedInput.value);

  // Validation
  if (isNaN(quotaDonatedInputValue)) {
    return alert("Please insert a valid number");
  } else if (quotaDonatedInputValue === 0) {
    return alert("Enter a valid amount");
  } else if (quotaDonatedInputValue < 0) {
    return alert(
      "Negative number does not a valid amount. Please provide a valid amount"
    );
  } else if (quotaDonatedInputValue > accountBalanceValue) {
    return alert("Insufficient Balance");
  }

  //   Calculate
  const mainAccountBalance = accountBalanceValue - quotaDonatedInputValue;
  const donatedMoney = donatedAmountValue + quotaDonatedInputValue;
  accountBalance.innerText = mainAccountBalance;
  QuotaDonatedAmount.innerText = donatedMoney;
  // Create donated  history
  createDonatedHistory(
    quotaDonatedInputValue,
    " Injured in the Quota Movement"
  );
  createModal();
});
