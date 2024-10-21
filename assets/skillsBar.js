  function animateSkillBars() {
    const skillBars = document.querySelectorAll('.exp-container'); // Selects all elements with class "exp-container"
  
    skillBars.forEach(bar => {
      const element = bar;
      const targetWidth = parseInt(bar.dataset.targetWidth, 10) || 85; // Gets target width from data attribute or default to 85
      let currentWidth = 20; // Starts with 20% as per initial HTML
      const id = setInterval(frame, 10);
      let delay = 0; // Initial delay
  
      function frame() {
        if (delay >= 900) { // Adjusting the delay as needed
          if (currentWidth >= targetWidth) {
            clearInterval(id);
          } else {
            currentWidth++;
            element.style.width = currentWidth + '%';
            element.textContent = currentWidth + '%'; // Using textContent for efficiency
          }
        } else {
          delay++;
        }
      }
    });
  }
  
  // Call the function to initiate the animation
  animateSkillBars();