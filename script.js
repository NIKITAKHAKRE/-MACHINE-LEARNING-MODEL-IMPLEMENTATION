function checkSpam() {
  const message = document.getElementById("message").value;

  fetch("http://127.0.0.1:5000/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: message })
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById("result").innerText = "Prediction: " + data.prediction.toUpperCase();
  })
  .catch(error => {
    document.getElementById("result").innerText = "Error: " + error;
  });
}
