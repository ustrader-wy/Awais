const pairList = [
  "AUD/CAD (OTC)", "AUD/CHF (OTC)", "AUD/JPY (OTC)", "AUD/NZD (OTC)", "AUD/USD (OTC)",
  "CAD/CHF (OTC)", "CAD/JPY (OTC)", "CHF/JPY (OTC)", "EUR/AUD (OTC)", "EUR/CAD (OTC)",
  "EUR/CHF (OTC)", "EUR/GBP (OTC)", "EUR/JPY (OTC)", "EUR/NZD (OTC)", "EUR/USD (OTC)",
  "GBP/AUD (OTC)", "GBP/CAD (OTC)", "GBP/CHF (OTC)", "GBP/JPY (OTC)", "GBP/NZD (OTC)", "GBP/USD (OTC)",
  "NZD/JPY (OTC)", "NZD/USD (OTC)", "USD/BRL (OTC)", "USD/CAD (OTC)", "USD/CHF (OTC)",
  "USD/JPY (OTC)", "USD/MXN (OTC)", "USD/NOK (OTC)", "USD/RUB (OTC)", "USD/SEK (OTC)",
  "USD/TRY (OTC)", "USD/ZAR (OTC)"
];

const pairSelect = document.getElementById("pair");
const loading = document.getElementById("loading");
const output = document.getElementById("output");
const button = document.getElementById("getSignal");

pairList.forEach(pair => {
  const option = document.createElement("option");
  option.value = pair;
  option.textContent = pair;
  pairSelect.appendChild(option);
});

button.addEventListener("click", () => {
  loading.style.display = "block";
  output.textContent = "";
  button.disabled = true;

  setTimeout(() => {
    loading.style.display = "none";
    const signal = Math.random() > 0.5 ? "CALL" : "PUT";
    const confidence = Math.floor(Math.random() * 20) + 80;
    output.innerHTML = `Signal: <span style="color:lime">${signal}</span> (${confidence}%)`;
    button.disabled = false;
  }, 2000);
});
