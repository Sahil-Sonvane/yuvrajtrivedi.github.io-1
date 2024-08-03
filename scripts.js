document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");

    // Check the saved theme in local storage and apply it
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.querySelector("i").classList.replace("fa-sun", "fa-moon");
    }

    themeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        const icon = themeToggle.querySelector("i");

        if (document.body.classList.contains("dark-mode")) {
            icon.classList.replace("fa-sun", "fa-moon");
            localStorage.setItem("theme", "dark");
        } else {
            icon.classList.replace("fa-moon", "fa-sun");
            localStorage.setItem("theme", "light");
        }
    });
});
