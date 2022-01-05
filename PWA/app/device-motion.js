const rotation = document.getElementById('rotation');
const message = document.getElementById('message');

function handleOrientationFallback(event) {
  message.innerText = "it works";
}

function handleOrientation(event) {
  var alpha    = event.alpha;
  var beta     = event.beta;
  var gamma    = event.gamma;
  rotation.innerText = `Alpha: ${alpha}\n\nBeta: ${beta}\n\nGamma: ${gamma}`;
}

window.addEventListener("deviceorientation", handleOrientation, true);
window.addEventListener("AbsoluteOrientationSensor", handleOrientationFallback, true)
