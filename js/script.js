document.addEventListener('DOMContentLoaded', () => {
    // Update badges with category-specific classes
    const skillCategories = {
      "Python": "lang",
      "C": "lang",
      "C++": "lang",
      "Verilog": "lang",
      "Assembly": "lang",
      "Pytorch": "tool",
      "Pandas": "tool",
      "Numpy": "tool",
      "Matplotlib": "tool",
      "CMake": "tool",
      "Quartus": "tool",
      "Modelsim": "tool",
      "Neural Networks": "concept",
      "VAE/GAN": "concept",
      "Digital Logic": "concept",
      "Digital RTL Design": "concept",
      "Compression Techniques": "concept",
      "Unsupervised Learning": "concept",
      "Clustering": "concept",
      "Pretrained Models": "tool",
      "Computer Vision": "concept",
      "Image Classification": "concept",
      "SciKit Learn": "tool",
      "Scipy": "tool",
      "High Performance Computing": "tool",
      "OOP": "concept",
      "Assembly (Nios II)": "lang",
      "Data Structures": "concept",
      "Time Complexity": "concept",
      "Bitwise Optimization": "concept",
      "PyPi": "tool",
      "FPGA": "tool",
      "Package Dev": "concept",
      "Image Generation": "concept",
      "Image Compression": "concept",
      "Image Processing": "concept",
      "Digital Signal Processing": "concept"
    };
  
    const badges = document.querySelectorAll('.skills .badge');
    badges.forEach(badge => {
      const text = badge.textContent.trim();
      const category = skillCategories[text];
      if (category) {
        badge.classList.remove('bg-primary');
        badge.classList.add(`badge-${category}`);
      }
    });
  
    // Initialize AOS animations if available
    if (typeof AOS !== 'undefined') {
      AOS.init({ duration: 800, easing: 'slide', once: true });
    }
  
    // Set current year in footer
    const yearElem = document.getElementById("currentYear");
    if (yearElem) {
      yearElem.textContent = new Date().getFullYear();
    }
  });
  
  // Skills dropdown toggle
  const allSkills = {
    lang: ["Python", "C", "C++", "Verilog", "Assembly", "Assembly (Nios II)"],
    tool: ["Pytorch", "Pandas", "Numpy", "Matplotlib", "CMake", "Quartus", "Modelsim", "SciKit Learn", "Scipy", "PyPi", "FPGA", "High Performance Computing"],
    concept: ["Neural Networks", "VAE/GAN", "Digital Logic", "Digital RTL Design", "Compression Techniques", "Unsupervised Learning", "Clustering", "OOP", "Data Structures", "Time Complexity", "Bitwise Optimization", "Package Dev", "Image Generation", "Image Compression", "Image Processing", "Computer Vision", "Image Classification", "Digital Signal Processing"]
  };
  
  let currentVisible = null;
  
  function toggleSkills(category) {
    const dropdown = document.getElementById('skillsDropdown');
    const title = document.getElementById('skillsDropdownTitle');
    const list = document.getElementById('skillsDropdownList');
  
    // Remove active classes from all buttons
    document.querySelectorAll('.skill-toggle-btn').forEach(btn => btn.classList.remove('active'));
  
    if (currentVisible === category) {
      dropdown.style.display = 'none';
      currentVisible = null;
    } else {
      // Update the dropdown title based on category
      title.textContent = category === 'lang' ? 'Languages' :
                          category === 'tool' ? 'Tools / Packages' :
                          'Concepts / Techniques';
  
      // Populate the skills list
      list.innerHTML = '';
      allSkills[category].forEach(skill => {
        const badge = document.createElement('span');
        badge.className = `badge badge-${category} me-2 mb-2`;
        badge.textContent = skill;
        list.appendChild(badge);
      });
  
      dropdown.style.display = 'block';
      document.getElementById(`btn-${category}`).classList.add('active');
      currentVisible = category;
    }
  }