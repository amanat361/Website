const rotation = document.getElementById('rotation');
const message = document.getElementById('message');

// function setup() {
//   if (typeof(DeviceOrientationEvent) !== 'undefined' && typeof(DeviceOrientationEvent.requestPermission) === 'function') {
//     // ios 13+ device
//     message.innerText = "you're on an iphone";
//     let btn = document.createElement("BUTTON");
//     btn.innerText = "click me to fix shit";
//     document.body.appendChild(btn);
//     btn.onclick = requestAccess;
//   } else {
//     message.innerText = "you're not on an iphone"
//     window.addEventListener("deviceorientation", handleOrientation, true);
//   }
// }

function test() {
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

// function requestAccess() {
//   DeviceOrientationEvent.requestPermission()
//     .then(response => {
//       if (response == 'granted') {
//         message.innerText = "good girl";
//         window.addEventListener("deviceorientation", handleOrientation, true);
//       } else {
//         message.innerText = response;
//       }
//     }).catch(console.error)
// }

function handleOrientation(event) {
  var alpha    = event.alpha;
  var beta     = event.beta;
  var gamma    = event.gamma;
  rotation.innerText = `Alpha: ${alpha.toFixed(1)}\n\nBeta: ${beta.toFixed(1)}\n\nGamma: ${gamma.toFixed(1)}`;
}
