// common.js
function injectNavigation() {
    // Avoid double injection if called twice unexpectedly
    if (document.getElementById('burgerMenu')) return;

    // Inject Phosphor Icons
    if (!document.getElementById('phosphor-icons')) {
        const script = document.createElement('script');
        script.id = 'phosphor-icons';
        script.src = "https://unpkg.com/@phosphor-icons/web";
        document.head.appendChild(script);
    }

    const navHTML = `
    <!-- Burger Menu -->
    <div class="burger-menu" id="burgerMenu">
        <div class="burger-icon">
            <div class="burger-line"></div>
            <div class="burger-line"></div>
            <div class="burger-line"></div>
        </div>
    </div>

    <!-- Navigation Overlay -->
    <div class="nav-overlay" id="navOverlay"></div>

    <!-- Navigation Menu -->
    <nav class="nav-menu" id="navMenu">
        <div class="nav-title">Let's<br><span class="logo-accent">Make It.</span></div>
        <ul class="nav-links">
            <li><a href="index.html" data-page="index.html"><span class="nav-icon"><i class="ph-bold ph-house"></i></span>Home</a></li>
            <li><a href="material-entry.html" data-page="material-entry.html"><span class="nav-icon"><i class="ph-bold ph-desktop"></i></span>Material Stock Entry</a></li>
            <li><a href="mobile-scanner.html" data-page="mobile-scanner.html"><span class="nav-icon"><i class="ph-bold ph-qr-code"></i></span>Mobile Scanner</a></li>
            <li><a href="stock-request.html" data-page="stock-request.html"><span class="nav-icon"><i class="ph-bold ph-package"></i></span>Request Stock</a></li>
            <li><a href="time-logging.html" data-page="time-logging.html"><span class="nav-icon"><i class="ph-bold ph-clock"></i></span>Log Hours</a></li>
            <li><a href="dashboard.html" data-page="dashboard.html"><span class="nav-icon"><i class="ph-bold ph-chart-bar"></i></span>Stock Dashboard</a></li>
            <li><a href="time-dashboard.html" data-page="time-dashboard.html"><span class="nav-icon"><i class="ph-bold ph-chart-line-up"></i></span>Time Dashboard</a></li>
            <li><a href="qr-display.html" data-page="qr-display.html"><span class="nav-icon"><i class="ph-bold ph-monitor"></i></span>QR Display</a></li>
            <li><a href="qr-generator.html" data-page="qr-generator.html"><span class="nav-icon"><i class="ph-bold ph-printer"></i></span>Print QR Codes</a></li>
            <li><a href="settings.html" data-page="settings.html"><span class="nav-icon"><i class="ph-bold ph-gear"></i></span>Settings</a></li>
        </ul>
    </nav>
    `;

    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // Highlight current page
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const currentLink = document.querySelector(`.nav-links a[data-page="${currentPath}"]`);
    if (currentLink) {
        currentLink.classList.add('nav-current');
    }

    // Initialize burger menu events
    const burgerMenu = document.getElementById('burgerMenu');
    const navMenu = document.getElementById('navMenu');
    const navOverlay = document.getElementById('navOverlay');

    function toggleMenu() {
        burgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
        navOverlay.classList.toggle('active');
    }

    function closeMenu() {
        burgerMenu.classList.remove('active');
        navMenu.classList.remove('active');
        navOverlay.classList.remove('active');
    }

    burgerMenu.addEventListener('click', toggleMenu);
    navOverlay.addEventListener('click', closeMenu);

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });
}

// Inject navigation when the DOM is loaded
document.addEventListener('DOMContentLoaded', injectNavigation);
