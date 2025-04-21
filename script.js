document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('signupModal');
    const showSignupBtn = document.getElementById('showSignup');
    const closeBtn = document.querySelector('.close');
    const togglePasswords = document.querySelectorAll('.toggle-password');
    
    let hasSignedUp = false;
    let hasVerifiedPayment = false;

    showSignupBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    togglePasswords.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const input = this.previousElementSibling;
            const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
            input.setAttribute('type', type);
            this.textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
        });
    });

    document.getElementById('verifyPayment').addEventListener('click', function() {
        const referenceNumber = document.getElementById('referenceNumber').value;
        if (referenceNumber.length > 5) {
            document.getElementById('signupForm').style.display = 'block';
            this.parentElement.style.display = 'none';
            document.querySelector('.payment-options').style.display = 'none';
            document.querySelector('.payment-notice').style.display = 'none';
            hasVerifiedPayment = true;
            hasSignedUp = true;
            generateCaptcha();
        } else {
            alert('Please enter a valid reference number');
        }
    });

    document.getElementById('showLogin').addEventListener('click', function() {
        const loginForm = document.getElementById('loginForm');
        loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
    });

    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        if (hasSignedUp) {
            window.location.href = 'security-tips.html';
        } else {
            alert('Please sign up first');
        }
    });

    function generateCaptcha() {
        const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let captcha = '';
        for (let i = 0; i < 6; i++) {
            captcha += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        document.getElementById('captchaText').textContent = captcha;
    }

    document.getElementById('refreshCaptcha').addEventListener('click', generateCaptcha);
});