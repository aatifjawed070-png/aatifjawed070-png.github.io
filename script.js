// ===== Hero "Find your course" form validation =====
document.addEventListener("DOMContentLoaded", function () {
    const leadForm = document.getElementById("leadForm");
    if (leadForm) {
      leadForm.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const exp = leadForm.querySelector('input[name="exp"]:checked');
        const interest = document.getElementById("interest");
        const name = document.getElementById("name");
        const phone = document.getElementById("phone");
        const email = document.getElementById("email");
  
        // Simple validation rules
        let errors = [];
  
        if (!exp) {
          errors.push("Please select your experience.");
        }
  
        if (!interest.value) {
          errors.push("Please select a topic of interest.");
        }
  
        if (!name.value.trim()) {
          errors.push("Please enter your name.");
        }
  
        const phoneRegex = /^[0-9]{10}$/;
        if (!phone.value.trim() || !phoneRegex.test(phone.value.trim())) {
          errors.push("Please enter a valid 10-digit phone number.");
        }
  
        const emailRegex = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/;
        if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
          errors.push("Please enter a valid email address.");
        }
  
        if (errors.length > 0) {
          alert(errors.join("\n"));
          return;
        }
  
        // Success (no backend yet)
        alert("Thank you! Our team will contact you soon.");
        leadForm.reset();
      });
    }
  
    // ===== Sidebar domain buttons (Data Analytics / AI / etc.) =====
    const domainButtons = document.querySelectorAll(
      ".cn-courses-sidebar button"
    );
    domainButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        domainButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
  
        // Later you can change course cards depending on button here
        // Example placeholder:
        console.log("Selected domain:", btn.textContent.trim());
      });
    });
  
    // ===== Login / Register simple validation (if those forms exist) =====
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
      loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = loginForm.querySelector("#loginEmail");
        const password = loginForm.querySelector("#loginPassword");
  
        if (!email.value.trim() || !password.value.trim()) {
          alert("Please enter email and password.");
          return;
        }
  
        alert("Login successful (demo only, no backend yet).");
        loginForm.reset();
      });
    }
  
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
      registerForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = registerForm.querySelector("#regName");
        const email = registerForm.querySelector("#regEmail");
        const phone = registerForm.querySelector("#regPhone");
        const password = registerForm.querySelector("#regPassword");
        const confirm = registerForm.querySelector("#regConfirm");
  
        let errors = [];
        if (!name.value.trim()) errors.push("Name is required.");
  
        const emailRegex = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/;
        if (!emailRegex.test(email.value.trim()))
          errors.push("Enter a valid email.");
  
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone.value.trim()))
          errors.push("Phone must be 10 digits.");
  
        if (password.value.length < 6)
          errors.push("Password must be at least 6 characters.");
  
        if (password.value !== confirm.value)
          errors.push("Passwords do not match.");
  
        if (errors.length > 0) {
          alert(errors.join("\n"));
          return;
        }
  
        alert("Registration successful (demo only).");
        registerForm.reset();
      });
    }
  });
  