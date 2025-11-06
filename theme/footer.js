document.addEventListener('DOMContentLoaded', function() {
    const footer = document.createElement('div');
    footer.style.textAlign = 'center';
    footer.style.padding = '20px';
    footer.style.marginTop = '40px';
    footer.style.borderTop = '1px solid var(--sidebar-bg)';
    footer.innerHTML = '<p>Version: ' + VERSION + '</p>';
    const contentElement = document.querySelector('.content');
    if (contentElement) {
        contentElement.appendChild(footer);
    }
});
