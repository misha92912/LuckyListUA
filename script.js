function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    const buttons = document.querySelectorAll('nav button');

    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });

    buttons.forEach(button => {
        if (button.getAttribute('onclick').includes(sectionId)) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    // Close the menu after clicking
    const nav = document.querySelector('nav');
    nav.classList.remove('active');
}