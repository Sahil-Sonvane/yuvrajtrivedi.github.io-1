var currentIndex = 0;
var images = document.querySelectorAll('.cert-item img');
var names = document.querySelectorAll('.cert-name');

function openCert(index) {
    currentIndex = index;
    var modal = document.getElementById("certModal");
    var modalImg = document.getElementById("certModalImg");
    var modalName = document.getElementById("certModalName");

    modal.style.display = "block";
    modalImg.src = images[currentIndex].src;
    modalName.innerHTML = names[currentIndex].innerHTML;

    // Optional: add animation
    modalImg.classList.add("animate__animated", "animate__zoomIn");
}

function closeCert() {
    var modal = document.getElementById("certModal");
    modal.style.display = "none";

    // Remove animation class for next time
    var modalImg = document.getElementById("certModalImg");
    modalImg.classList.remove("animate__animated", "animate__zoomIn");
}

function changeCert(direction) {
    currentIndex += direction;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    var modalImg = document.getElementById("certModalImg");
    var modalName = document.getElementById("certModalName");
    modalImg.src = images[currentIndex].src;
    modalName.innerHTML = names[currentIndex].innerHTML;

    // Optional: add animation
    modalImg.classList.add("animate__animated", "animate__zoomIn");
}

// Close modal when clicking outside of the image
window.onclick = function(event) {
    var modal = document.getElementById("certModal");
    if (event.target == modal) {
        closeCert();
    }
}
