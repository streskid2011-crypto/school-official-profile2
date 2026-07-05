/* ==========================================================================
   ARTEFAK INTERAKSI: ARSITEKTUR POHON FAKTOR - SCC.JS
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function() {
    // 1. Deteksi URL Aktif untuk memberikan class .active pada menu navbar
    const currentUrl = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        // Kondisi jika di root index
        if (currentUrl.endsWith(href) || (currentUrl === '/' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    // 2. Keamanan Tautan Luar (Otomatisasi Rel Noopener Noreferrer untuk Target Blank)
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        link.setAttribute('rel', 'noopener noreferrer');
    });

    console.log("Sistem Informasi Akademik SMPN 5 Parepare Siap Beroperasi.");
});
