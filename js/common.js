// Validation - not used
function validation(inputValue1, inputValue2) {
  if (inputValue1 == 0) {
    alert("Enter amount");
  } else if (isNaN(inputValue1)) {
    return alert("Please insert a valid number");
  } else if (inputValue1 < 0) {
    return alert(
      "Negative number does not a valid amount. Please provide a valid amount"
    );
  } else if (inputValue1 > inputValue2) {
    return alert("Insufficient Balance");
  }
}

// Create Donated History
function createDonatedHistory(amount, place) {
  const div = document.createElement("div");
  div.className = "border-2 border-slate-400 rounded-md p-5 my-2";
  const h2 = document.createElement("h2");
  h2.className = "text-2xl font-semibold ";
  h2.innerText = `${amount} is donated for ${place}`;
  const p = document.createElement("p");
  p.className = "text-md text-gray-500";
  p.innerText = `${new Date().toLocaleString()}`;
  div.appendChild(h2);
  div.appendChild(p);

  const history = document.getElementById("history");
  history.appendChild(div);
}

// Create Modal
function createModal() {
  const myModal = document.getElementById("my_modal_2");
  myModal.showModal();
}
