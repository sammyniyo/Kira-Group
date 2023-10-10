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
// JavaScript code to set the active page link
function setActivePage(page) {
    // Remove the "active" class from all page links
    const pageLinks = document.querySelectorAll('.sidebar button');
    pageLinks.forEach(link => link.classList.remove('active'));
  
    // Add the "active" class to the specified page link
    const activeLink = document.getElementById(`${page}-link`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  }
  
  // Function to navigate to the Home page
  function redirectToHome() {
    // Add logic for navigating to the Home page here (if needed)
    // ...
  
    // Set the active page link
    setActivePage('home');
  
    // Update content for the Home page
    const content = document.getElementById('page-content');
    content.innerHTML = `
      <h2>Welcome to the Home Page</h2>
      <p>This is the content for the Home page.</p>
    `;
  }
  
  // Function to navigate to the About Us page
  function redirectToAboutUs() {
    // Add logic for navigating to the About Us page here (if needed)
    // ...
  
    // Set the active page link
    setActivePage('about');
  
    // Update content for the About Us page
    const content = document.getElementById('page-content');
    content.innerHTML = `
      <h2>About Us</h2>
      <p>This is the content for the About Us page.</p>
    `;
  }
  
  // Function to navigate to the Services page
  function redirectToServices() {
    // Add logic for navigating to the Services page here (if needed)
    // ...
  
    // Set the active page link
    setActivePage('services');
  
    // Update content for the Services page
    const content = document.getElementById('page-content');
    content.innerHTML = `
      <h2>Our Services</h2>
      <p>This is the content for the Services page.</p>
    `;
  }
  
  // Function to navigate to the Publications page
  function redirectToPublications() {
    // Add logic for navigating to the Publications page here (if needed)
    // ...
  
    // Set the active page link
    setActivePage('publications');
  
    // Update content for the Publications page
    const content = document.getElementById('page-content');
    content.innerHTML = `
      <h2>Our Publications</h2>
      <p>This is the content for the Publications page.</p>
    `;
  }
  
  // Function to navigate to the Partners page
  function redirectToPartners() {
    // Add logic for navigating to the Partners page here (if needed)
    // ...
  
    // Set the active page link
    setActivePage('partners');
  
    // Update content for the Partners page
    const content = document.getElementById('page-content');
    content.innerHTML = `
      <h2>Our Partners</h2>
      <p>This is the content for the Partners page.</p>
    `;
  }
  
  // Function to navigate to the Contacts page
  function redirectToContacts() {
    // Add logic for navigating to the Contacts page here (if needed)
    // ...
  
    // Set the active page link
    setActivePage('contacts');
  
    // Update content for the Contacts page
    const content = document.getElementById('page-content');
    content.innerHTML = `
      <h2>Contact Us</h2>
      <p>Here is the contact information for our company.</p>
      <p>Email: contact@kiragroup.com</p>
      <p>Phone: +250 788 355 340</p>
    `;
  }
  
  // Set the initial active page (e.g., Home) when the page loads
  document.addEventListener('DOMContentLoaded', function () {
    setActivePage('home');
    redirectToHome(); // Load the Home page content by default
  });
  