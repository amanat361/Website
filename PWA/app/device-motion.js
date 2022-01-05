function askPermission() {
  // feature detect
  console.log('1')
  if (typeof DeviceOrientationEvent.requestPermission === "function") {
    DeviceOrientationEvent.requestPermission()
      .then(permissionState => {
        if (permissionState === "granted") {
          console.log('2')
          window.addEventListener('devicemotion', (event) => {
              const el = document.getElementById('motion');
              el.innerText = (Math.round((event.acceleration.x + Number.EPSILON) * 100) / 100) + ' m/s2';
          });
        }
      })
      .catch(console.error);
  } else {
    window.addEventListener('devicemotion', (event) => {
        console.log('3')
        const el = document.getElementById('motion');
        el.innerText = (Math.round((event.acceleration.x + Number.EPSILON) * 100) / 100) + ' m/s2';
    });
  }
}

askPermission();
