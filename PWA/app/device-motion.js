const el = document.getElementById('motion');

function askPermission() {
  // feature detect
  el.innerText = "i hate my life"
  if (typeof DeviceOrientationEvent.requestPermission === "function") {
    DeviceOrientationEvent.requestPermission()
      .then(permissionState => {
        if (permissionState === "granted") {
          el.innerText = "meep moop"
          window.addEventListener('devicemotion', (event) => {
              el.innerText = (Math.round((event.acceleration.x + Number.EPSILON) * 100) / 100) + ' m/s2';
          });
        }
      })
      .catch(console.error);
  } else {
    window.addEventListener('devicemotion', (event) => {
        el.innerText = "i hate this website"
        el.innerText = (Math.round((event.acceleration.x + Number.EPSILON) * 100) / 100) + ' m/s2';
    });
  }
}

askPermission();
