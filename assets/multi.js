function move() {
    var python = document.getElementById("python");
    var html = document.getElementById("html");
    var jscript = document.getElementById("jscript");
    var css = document.getElementById("css");
    var sql = document.getElementById("sql");
    var c = document.getElementById("c");
    var width = 30;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 95) {
        clearInterval(id);
      } else {
        width++; 
        python.style.width = width + '%'; 
        python.innerHTML = width * 1  + '%';
        html.style.width = width + '%'; 
        html.innerHTML = width * 1  + '%';
        jscript.style.width = width + '%'; 
        jscript.innerHTML = width * 1  + '%';
        css.style.width = width + '%'; 
        css.innerHTML = width * 1  + '%';
        sql.style.width = width + '%'; 
        sql.innerHTML = width * 1  + '%';
        c.style.width = width + '%'; 
        c.innerHTML = width * 1  + '%';
      }
    }
  }
