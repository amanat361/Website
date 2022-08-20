const rotation = document.getElementById('rotation');
const message = document.getElementById('message');

function requestAccess() {
  // feature detect
  if (typeof DeviceOrientationEvent.requestPermission === 'function') {
    DeviceOrientationEvent.requestPermission()
      .then(permissionState => {
        if (permissionState === 'granted') {
          window.addEventListener('deviceorientation', handleOrientation);
        }
      })
      .catch(console.error);
  } else {
    window.addEventListener('deviceorientation', handleOrientation);
  }
}

function handleOrientation(event) {
  var alpha    = event.alpha;
  var beta     = event.beta;
  var gamma    = event.gamma;
  message.innerText = "rotation sensors currently ON"
  rotation.innerText = `Alpha: ${alpha.toFixed(1)}\n\nBeta: ${beta.toFixed(1)}\n\nGamma: ${gamma.toFixed(1)}`;
}
