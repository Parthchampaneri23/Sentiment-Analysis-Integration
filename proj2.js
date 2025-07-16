const assets = [
  { name: "Bitcoin", price: 45000 },
  { name: "Ethereum", price: 3200 },
  { name: "Tesla", price: 720 },
  { name: "Apple", price: 185 },
  { name: "Amazon", price: 3500 }
];

const sentiments = ["positive", "neutral", "negative"];

function generateRandomSentiment() {
  return sentiments[Math.floor(Math.random() * sentiments.length)];
}

function renderTable() {
  const tableBody = document.getElementById("assetTable");
  if (!tableBody) {
    console.error("Table body not found!");
    return;
  }
  tableBody.innerHTML = "";

  assets.forEach(asset => {
    const sentiment = generateRandomSentiment();
    const row = `
      <tr>
        <td>${asset.name}</td>
        <td>$${asset.price}</td>
        <td><span class="sentiment ${sentiment}">${sentiment.toUpperCase()}</span></td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}

window.onload = function () {
  renderTable();
  setInterval(renderTable, 5000);
};
