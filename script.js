const videoElement = document.getElementById("myVideo");
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");

videoElement.addEventListener("click", toggleFullScreen);
playButton.addEventListener("click", playVideo);
pauseButton.addEventListener("click", pauseVideo);

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        if (videoElement.requestFullscreen) {
            videoElement.requestFullscreen();
        } else if (videoElement.mozRequestFullScreen) {
            videoElement.mozRequestFullScreen();
        } else if (videoElement.webkitRequestFullscreen) {
            videoElement.webkitRequestFullscreen();
        } else if (videoElement.msRequestFullscreen) {
            videoElement.msRequestFullscreen();
        }
        videoElement.play();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        videoElement.pause();
    }
}

function playVideo() {
    videoElement.play();
}

function pauseVideo() {
    videoElement.pause();
}
function redirectToImage() {
    window.location.href = "Kira-Final-Logo-removebg-preview.png";
}
function redirectToHome() {
    window.location.href = "index.html";
}
function redirectToAboutUs() {
    window.location.href = "About_us.html";
  }
  function redirectToServices() {
    window.location.href = "Services.html";
  }
  // function redirectToPrograms() {
  //   window.location.href = "Programs.html";
  // }
  function redirectToPublications() {
    window.location.href = "Publications.html";
  }
  // function redirectToClients() {
  //   window.location.href = "Clients.html";
  // }
  function redirectToPartners() {
    window.location.href = "Partners.html";
  }
  function redirectToContacts() {
    window.location.href = "Contacts.html";
  }
      // Example: You can add client-side form validation here
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form form');
    form.addEventListener('submit', function (event) {
      const emailInput = form.querySelector('#email');
      const phoneInput = form.querySelector('#phone');
      const enquiryInput = form.querySelector('#enquiry');
  
      // Example validation: Ensure email is in a valid format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        event.preventDefault();
        alert('Please enter a valid email address.');
        return;
      }
  
      // You can add more validation checks for other fields here
    });
  });
   // Example: You can add client-side form validation here
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.Subscription-form');
    form.addEventListener('submit', function (event) {
        const firstNameInput = form.querySelector('#name');
        const lastNameInput = form.querySelector('#surname');
        const emailInput = form.querySelector('#email');

        // Example validation: Ensure email is in a valid format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            event.preventDefault();
            alert('Please enter a valid email address.');
            return;
        }

        // Example validation: Ensure first name is not empty
        if (firstNameInput.value.trim() === "") {
            event.preventDefault();
            alert('Please enter your first name.');
            return;
        }

        // Example validation: Ensure last name is not empty
        if (lastNameInput.value.trim() === "") {
            event.preventDefault();
            alert('Please enter your last name.');
            return;
        }

        // You can add more validation checks for other fields here
    });
});
// Toggle mobile menu
function toggleMobileMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.toggle("hidden");
}

// Add a click event listener to the mobile menu icon (hamburger icon)
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    mobileMenuIcon.addEventListener('click', toggleMobileMenu);
});
// Function to add "pop" class to elements when they are clicked
function addPopAnimation(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.add('pop-text');
    }
}

// Add "pop" animation to the video when it's clicked
document.getElementById('myVideo').addEventListener('click', function () {
    const videoElement = document.getElementById('myVideo');
    if (videoElement) {
        videoElement.classList.add('pop-video');
    }
});
