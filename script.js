function showSection(section) {
    // Hide the landing page
    document.getElementById('landing-page').classList.add('hidden');

    // Show the main content
    const mainContent = document.getElementById('main-content');
    mainContent.classList.remove('hidden');

    // Scroll to the selected section after a short delay
    setTimeout(() => {
        document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    }, 500);
}