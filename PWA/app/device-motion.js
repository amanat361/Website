const rotation = document.getElementById('rotation');

function handleOrientation(event) {
  var alpha    = event.alpha;
  var beta     = event.beta;
  var gamma    = event.gamma;
  rotation.innerText = `Alpha: ${alpha}\n\nBeta: ${beta}\n\nGamma: ${gamma}`;
}

window.addEventListener("deviceorientation", handleOrientation, true);
