const toggleButton = document.getElementById('theme-button');
const body = document.body;
const moonIcon = document.getElementById("moon-icon");
const sunIcon = document.getElementById("sun-icon");
const flowerLight = document.getElementById("flower-light");
const flowerDark = document.getElementById("flower-dark");


if (localStorage.getItem("DarkMode") === 'enabled') {
    body.classList.add('dark-theme');
    moonIcon.style.display = "none";
    sunIcon.style.display = "inline";
}


toggleButton.addEventListener('click', function() {
    body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem("DarkMode", "enabled");
    } else {
        localStorage.setItem("DarkMode", "disabled");
    }
    if (body.classList.contains("dark-theme")) {
        moonIcon.style.display = "none";
        sunIcon.style.display = "inline";
        flowerLight.style.display = "none";
        flowerDark.style.display = "inline";
    } else {
        moonIcon.style.display = "inline";
        sunIcon.style.display = "none";
        flowerLight.style.display = "inline";
        flowerDark.style.display = "none";
    }
});





// Currently the script only saves and switched to dark mode when the button is pressed...
// Add the Dark mode into css, and make it so the button for dark mode vanished and the other button (for light mode) will appear on the opposite side of the moon button.