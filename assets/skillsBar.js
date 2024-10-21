function animateSkillBars() {
    const skillBars = document.querySelectorAll('.exp-container'); // Select all elements with class "exp-container"
  
    skillBars.forEach(bar => {
      const element = bar; // Avoid redundant variable assignment
      const targetWidth = parseInt(bar.dataset.targetWidth, 10) || 85; // Get target width from data attribute or default to 85
      let currentWidth = 20; // Start with 20% as per initial HTML
      const id = setInterval(frame, 10);
  
      function frame() {
        if (currentWidth >= targetWidth) {
          clearInterval(id);
        } else {
          currentWidth++;
          element.style.width = currentWidth + '%';
          element.textContent = currentWidth + '%'; // Use textContent for efficiency
        }
      }
    });
  }
  
  // Call the function to initiate the animation
  animateSkillBars();