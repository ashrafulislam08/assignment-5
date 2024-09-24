const donateContainer = document.getElementById("donate-container");
const historyContainer = document.getElementById("history");
const donationTab = document.getElementById("donation-tab");
const historyTab = document.getElementById("history-tab");

// Add event listener for history tab
historyTab.addEventListener("click", function () {
  donationTab.classList.remove("bg-green-300");
  donationTab.classList.add("border", "border-gray-500", "text-gray-400");
  historyTab.classList.add("bg-green-300", "text-slate-900");
  donateContainer.classList.add("hidden");
  historyContainer.classList.remove("hidden");
});
// Add event listener for donation tab
donationTab.addEventListener("click", function () {
  historyTab.classList.remove("bg-green-300");
  historyTab.classList.add("border", "border-gray-500", "text-gray-400");
  donationTab.classList.add("bg-green-300", "text-slate-900");
  donateContainer.classList.remove("hidden");
  historyContainer.classList.add("hidden");
});
