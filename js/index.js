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
  createDonatedHistory(donatedMoney, "Flood at Noakhali, Bangladesh");
});

function createDonatedHistory(amount, place) {
  const container = `
    <div class="border-2 border-gray-500 p-3">
      <h2 class="text-xl ">${amount} Taka is donated for ${place}</h2>
      <p>${new Date().toLocaleDateString()}</p>
    </div>
  `;
  const history = document.getElementById("history");
  history.innerHTML = container;
  console.log(history);
}
