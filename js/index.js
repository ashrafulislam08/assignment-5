const accountBalance = document.getElementById("account-balance");

// Event handling for noakhali donate button
const donateForNoakhali = document.getElementById("donate-for-noakhali");
donateForNoakhali.addEventListener("click", function () {
  // Get the elements
  const donatedAmount = document.getElementById("noakhali-donated-amount");
  const noakhaliDonateInput = document.getElementById("noakhali-donated-input");

  //   Convert value into number
  const accountBalanceValue = parseFloat(accountBalance.innerText);
  const donatedAmountValue = parseFloat(donatedAmount.innerText);
  const donatedInputValue = parseFloat(noakhaliDonateInput.value);
  // Validation
  validation(Number(noakhaliDonateInput.value), accountBalanceValue);

  //   Calculate
  const mainAccountBalance = accountBalanceValue - donatedInputValue;
  const donatedMoney = donatedAmountValue + donatedInputValue;

  accountBalance.innerText = mainAccountBalance;
  donatedAmount.innerText = donatedMoney;
  createDonatedHistory(donatedInputValue, "Flood at Noakhali, Bangladesh");
});

function createDonatedHistory(amount, place) {
  // Validation
  validation(amount);
  const div = document.createElement("div");
  div.className = "border-2 border-gray-500 rounded-sm p-3 my-2";
  const h2 = document.createElement("h2");
  h2.className = "text-xl text-center";
  h2.innerText = `${amount} is donated for ${place}`;
  const p = document.createElement("p");
  p.innerText = `${new Date().toLocaleString()}`;
  div.appendChild(h2);
  div.appendChild(p);

  const history = document.getElementById("history");
  history.appendChild(div);
  console.log(history);
}

function validation(value, mainBalance) {
  if (isNaN(value) || isNaN(mainBalance) || value === "") {
    alert("Invalid Donation Amount");
  }
}
