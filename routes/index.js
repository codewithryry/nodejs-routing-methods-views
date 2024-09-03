const express = require('express');
const router = express.Router();

// Home route - GET request
router.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' });
});

// About route - GET request
router.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
});

// Contact route - GET request
router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Us' });
});

// Handle form submission - POST request
router.post('/contact', (req, res) => {
    // You would typically process the form data here
    res.send('Form submitted successfully!');
});

module.exports = router;
