     // JavaScript to handle scroll effect
     document.addEventListener("DOMContentLoaded", function () {
        const section = document.querySelector(".section");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    section.classList.add("show");
                }
            });
        }, { threshold: 0.3 });

        observer.observe(section);
    });
    // 2

    document.getElementById('recruitmentForm').addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;

        // Name validation
        let nameField = document.getElementById('full-name');
        let nameError = document.getElementById('nameError');
        if (nameField.value.trim() === "") {
            nameError.style.display = "block";
            isValid = false;
        } else {
            nameError.style.display = "none";
        }

        // Email validation
        let emailField = document.getElementById('email');
        let emailError = document.getElementById('emailError');
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailField.value.trim())) {
            emailError.style.display = "block";
            isValid = false;
        } else {
            emailError.style.display = "none";
        }

        // Phone validation
        let phoneField = document.getElementById('phone');
        let phoneError = document.getElementById('phoneError');
        let phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phoneField.value.trim())) {
            phoneError.style.display = "block";
            isValid = false;
        } else {
            phoneError.style.display = "none";
        }

        // Position validation
        let positionField = document.getElementById('position');
        let positionError = document.getElementById('positionError');
        if (positionField.value === "") {
            positionError.style.display = "block";
            isValid = false;
        } else {
            positionError.style.display = "none";
        }

        // Experience validation
        let experienceField = document.getElementById('experience');
        let experienceError = document.getElementById('experienceError');
        if (experienceField.value.trim() === "" || isNaN(experienceField.value) || experienceField.value < 0) {
            experienceError.style.display = "block";
            isValid = false;
        } else {
            experienceError.style.display = "none";
        }

        // Resume validation
        let resumeField = document.getElementById('resume');
        let resumeError = document.getElementById('resumeError');
        if (resumeField.files.length === 0) {
            resumeError.style.display = "block";
            isValid = false;
        } else {
            resumeError.style.display = "none";
        }

        // If all fields are valid, submit form
        if (isValid) {
            alert("Application Submitted Successfully!");
            document.getElementById('recruitmentForm').reset();
        }
    });
    function openSeniorPopup() {
        document.getElementById("seniorPopup").style.display = "flex";
        setTimeout(() => {
            document.getElementById("seniorPopup").classList.add("active");
        }, 10);
    }

    function closeSeniorPopup() {
        document.getElementById("seniorPopup").classList.remove("active");
        setTimeout(() => {
            document.getElementById("seniorPopup").style.display = "none";
        }, 300);
    }

// exclusive search 
  document.addEventListener("DOMContentLoaded", function () {
            let sections = document.querySelectorAll(".exclusive-section");
            let options = {
                threshold: 0.2
            };

            let observer = new IntersectionObserver(function (entries, observer) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            }, options);

            sections.forEach(section => {
                observer.observe(section);
            });
        });

        function exclusiveLearnMore() {
            alert("Stay tuned for more details on Infura Solutions' Exclusive Search!");
        }
    

        