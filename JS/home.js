const menuIcon = document.getElementById('menuIcon');
const sidebar = document.getElementById('sidebar');
const sosBtn = document.getElementById('sosBtn');

menuIcon.addEventListener('click', () => {
    sidebar.classList.toggle('active');

    // Animate hamburger icon
    menuIcon.classList.toggle('active');
});

// Close sidebar when clicking outside
document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !menuIcon.contains(e.target)) {
        sidebar.classList.remove('active');
        menuIcon.classList.remove('active');
    }
});

// SOS button functionality
sosBtn.addEventListener('click', () => {
    // Animate button
    sosBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        sosBtn.style.transform = 'scale(1)';
    }, 200);

    // Show emergency contact dialog
    alert('Emergency Contact: 1800-XXX-XXXX\nAvailable 24/7 for immediate assistance');
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// location
function addLocation() {
    const location = document.getElementById('locationInput').value;
    if (location) {
        alert(`Location set to: ${location}`);
    } else {
        alert('Please enter a location.');
    }
}
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    document.getElementById('locationDisplay').innerText = `Latitude: ${latitude}, Longitude: ${longitude}`;
}

// profile section
function toggleDropdown() {
    const dropdown = document.querySelector('.profile-dropdown');
    dropdown.classList.toggle('active');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.profile-icon')) {
        const dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach((dropdown) => {
            if (dropdown.parentElement.classList.contains('active')) {
                dropdown.parentElement.classList.remove('active');
            }
        });
    }
};




// login and signup
// trials section
// Show modal when Try Free is clicked
document.querySelector('#tryFreeLink').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('modalOverlay').style.display = 'block';
    document.getElementById('tryFreeModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
});

// Close modal functions
function closeModal() {
    document.getElementById('modalOverlay').style.display = 'none';
    document.getElementById('tryFreeModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

document.getElementById('closeModal').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', closeModal);

// Prevent modal close when clicking inside the modal
document.getElementById('tryFreeModal').addEventListener('click', (e) => {
    e.stopPropagation();
});

// Form validation
document.getElementById('trialForm').addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Name validation
    const name = document.getElementById('name').value;
    if (name.length < 3) {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('nameError').style.display = 'none';
    }

    // Phone validation
    const phone = document.getElementById('phone').value;
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('phoneError').style.display = 'none';
    }

    // Bike model validation
    const bikeModel = document.getElementById('bikeModel').value;
    if (bikeModel.length < 2) {
        document.getElementById('bikeError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('bikeError').style.display = 'none';
    }

    if (isValid) {
        // Show success message
        alert("Thank you for signing up! We'll contact you shortly to activate your free trial.");
        closeModal();
    }
});

// services 
function showModal(serviceType) {
    const modal = document.getElementById('serviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');

    modalTitle.textContent = serviceType;
    modalContent.innerHTML = `
        <p>Service package details for ${serviceType}:</p>
        <ul style="margin: 1rem 0 1rem 1.5rem;">
            <li>Full motorcycle inspection</li>
            <li>Oil and filter change</li>
            <li>Brake system check</li>
            <li>Tire pressure and condition check</li>
            <li>Chain adjustment and lubrication</li>
        </ul>
        <button class="cta-button" onclick="bookService('${serviceType}')">Book Now</button>
    `;

    modal.style.display = 'block';
}

function closeeModal() {
    const modal = document.getElementById('serviceModal');
    modal.style.display = 'none';
}

function bookService(serviceType) {
    alert(`Booking ${serviceType}. Our team will contact you shortly!`);
    closeeModal();
}

// Close modal when clicking outside
window.onclick = function (event) {
    const modal = document.getElementById('serviceModal');
    if (event.target == modal) {
        closeeModal();
    }
}



// battery section
const buyButtons = document.querySelectorAll('.cta-button');
buyButtons.forEach(button => {
    button.addEventListener('click', function () {
        const card = this.closest('.battery-card');
        const batteryName = card.querySelector('.battery-name').textContent;
        const batteryPrice = card.querySelector('.battery-price').textContent;

        alert(`Adding to cart:\n${batteryName}\n${batteryPrice}\n\nOur team will contact you shortly for installation!`);
    });
});


// tyres section
document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', () => {
        const tyreName = button.parentElement.querySelector('.tyre-name').textContent;
        alert(`Added ${tyreName} to cart!`);
    });
});


// wheel care section
const booking = document.querySelectorAll('.book-button');
const bookingForm = document.getElementById('bookingForm');
const serviceForm = document.getElementById('serviceForm');
const serviceSelect = document.getElementById('service');

booking.forEach(button => {
    button.addEventListener('click', () => {
        const service = button.getAttribute('data-service');
        serviceSelect.value = service;
        bookingForm.classList.add('active');
        bookingForm.scrollIntoView({ behavior: 'smooth' });
    });
});

serviceForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(serviceForm);
    alert('Booking confirmed! We will contact you shortly to confirm your appointment.');
    serviceForm.reset();
    bookingForm.classList.remove('active');
});


const tabinButtons = document.querySelectorAll('.tab-button');
const servicesItems = document.querySelectorAll('.service-item');

tabinButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tab = button.getAttribute('data-tab');
        
        // Update active states
        tabinButtons.forEach(btn => btn.classList.remove('active'));
        servicesItems.forEach(item => item.classList.remove('active'));
        
        button.classList.add('active');
        document.getElementById(tab).classList.add('active');
    });
});

// FAQ Toggle
const faqsQuestions = document.querySelectorAll('.faq-question');

faqsQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const toggle = question.querySelector('.toggle');
        
        answer.classList.toggle('active');
        toggle.textContent = answer.classList.contains('active') ? '-' : '+';
    });
});

// Booking Buttons
const bookingButtons = document.querySelectorAll('.book-button');

bookingButtons.forEach(button => {
    button.addEventListener('click', () => {
        const service = button.parentElement.querySelector('h3').textContent;
        alert(`Thank you for choosing our ${service}! We'll contact you shortly to schedule your appointment.`);
    });
});






// bike cleaning
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;

    const message = `Thank you, ${name}! Your booking is confirmed for ${date}.`;
    document.getElementById('confirmationMessage').innerText = message;
});
