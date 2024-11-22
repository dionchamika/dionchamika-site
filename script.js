document.addEventListener('DOMContentLoaded', function () {
    // Loader animation
    setTimeout(() => {
        document.querySelector('.loader').classList.add('d-none');
        document.querySelector('.main-content').classList.remove('d-none');
    }, 3000);

    // CV button modal functionality
    document.getElementById('cv-button').addEventListener('click', function () {
        const cvModal = new bootstrap.Modal(document.getElementById('cvModal'));
        cvModal.show();
    });

    // Typing Effect Logic
    const phrases = [
        "Intern Cloud Support",
        "Cloud Enthusiast",
        "AWS Certified",
        "DevOps",
        "Cloud Computing Undergraduate"
    ];

    let currentPhraseIndex = 0; // Tracks the current phrase in the array
    const dynamicText = document.getElementById("dynamic-text");

    function typePhrase() {
        const phrase = phrases[currentPhraseIndex];
        let charIndex = 0;

        // Typing logic
        const typeInterval = setInterval(() => {
            dynamicText.textContent += phrase[charIndex];
            charIndex++;

            if (charIndex >= phrase.length) {
                clearInterval(typeInterval); // Stop typing once phrase is complete
                setTimeout(() => erasePhrase(), 2000); // Pause before erasing
            }
        }, 100); // Adjust typing speed (in ms)
    }

    function erasePhrase() {
        const phrase = phrases[currentPhraseIndex];
        let charIndex = phrase.length;

        // Erasing logic
        const eraseInterval = setInterval(() => {
            dynamicText.textContent = phrase.slice(0, charIndex);
            charIndex--;

            if (charIndex < 0) {
                clearInterval(eraseInterval); // Stop erasing once text is cleared
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Move to the next phrase
                setTimeout(() => typePhrase(), 500); // Pause before typing the next phrase
            }
        }, 50); // Adjust erasing speed (in ms)
    }

    // Start the typing effect
    typePhrase();

    // Background color changer
    const bodyClasses = ['dark-gray', 'light-gray', 'white'];
    setInterval(() => {
        const randomClass = bodyClasses[Math.floor(Math.random() * bodyClasses.length)];
        document.body.className = randomClass;
    }, 5000); // Change background every 5 seconds

    // Navbar link hover interaction
    const navIcons = document.querySelectorAll('.nav-icons a');
    navIcons.forEach(icon => {
        icon.addEventListener('mouseover', function () {
            icon.style.color = '#007bff'; // Highlight blue on hover
        });
        icon.addEventListener('mouseout', function () {
            icon.style.color = ''; // Revert to default color
        });
    });

    // Add click events to the navbar links (optional for tracking user clicks)
    navIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            console.log(`Navigating to: ${icon.href}`);
        });
    });
});
