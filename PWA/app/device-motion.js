const rotation = document.getElementById('rotation');
const message = document.getElementById('message');

function handleOrientationFallback(event) {

}

function handleOrientation(event) {
  var alpha    = event.alpha;
  var beta     = event.beta;
  var gamma    = event.gamma;
  message.innerText = "If you see this, it works!";
  rotation.innerText = `Alpha: ${alpha.toFixed(1)}\n\nBeta: ${beta.toFixed(1)}\n\nGamma: ${gamma.toFixed(1)}`;
}

window.addEventListener("deviceorientation", handleOrientation, true);
window.addEventListener("AbsoluteOrientationSensor", handleOrientationFallback, true)
