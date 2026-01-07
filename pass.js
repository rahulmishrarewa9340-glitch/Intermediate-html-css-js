const password = document.getElementById('password');
const bar = document.getElementById('bar');
const strengthText = document.querySelector('#strength-text span');

// The requirements
const lenReq = document.getElementById('len');
const upperReq = document.getElementById('upper');
const numReq = document.getElementById('num');
const specialReq = document.getElementById('special');

password.addEventListener('input', () => {
    const val = password.value;
    let score = 0;

    // Validate Length
    if (val.length >= 8) {
        lenReq.classList.add('active');
        score++;
    } else {
        lenReq.classList.remove('active');
    }

    // Validate Uppercase
    if (/[A-Z]/.test(val)) {
        upperReq.classList.add('active');
        score++;
    } else {
        upperReq.classList.remove('active');
    }

    // Validate Numbers
    if (/[0-9]/.test(val)) {
        numReq.classList.add('active');
        score++;
    } else {
        numReq.classList.remove('active');
    }

    // Validate Special Char
    if (/[^A-Za-z0-9]/.test(val)) {
        specialReq.classList.add('active');
        score++;
    } else {
        specialReq.classList.remove('active');
    }

    // Update Meter UI
    updateMeter(score);
});

function updateMeter(score) {
    const widths = ['0%', '25%', '50%', '75%', '100%'];
    const colors = ['#ddd', '#ff4d4d', '#ffa500', '#2ecc71', '#009432'];
    const labels = ['Empty', 'Weak', 'Fair', 'Good', 'Strong'];

    bar.style.width = widths[score];
    bar.style.backgroundColor = colors[score];
    strengthText.innerHTML = labels[score];
    strengthText.style.color = colors[score];
}
