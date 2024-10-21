
function move() {
  var elem = document.getElementById("expertLevel");   
  var width = 40;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 85) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}