document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.href && this.href !== window.location.href) {
            e.preventDefault();
            document.body.classList.add('page-transition');
            setTimeout(() => {
                window.location.href = this.href;
            }, 500);
        }
    });
});

function setActiveMenu() {
    const currentPage = location.pathname.split('/').pop();
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.querySelector('.progress-bar').style.width = scrolled + '%';
});

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('page-transition');
    setActiveMenu();
});