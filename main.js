(() => {
    'use strict';

    // --- Theme Toggle ---
    const root = document.documentElement;

    function getPreferredTheme() {
        const stored = localStorage.getItem('theme');
        if (stored) return stored;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function applyTheme(theme) {
        if (theme === 'dark') {
            root.setAttribute('data-theme', 'dark');
        } else {
            root.removeAttribute('data-theme');
        }
    }

    function toggleTheme() {
        const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        localStorage.setItem('theme', next);
    }

    applyTheme(getPreferredTheme());

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });

    document.querySelectorAll('.theme-toggle, .mobile-theme-toggle').forEach(btn => {
        btn.addEventListener('click', toggleTheme);
    });

    // --- Mobile Menu ---
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileClose = document.querySelector('.mobile-menu-close');
    const mobileBackdrop = document.querySelector('.mobile-menu-backdrop');
    const mobileLinks = document.querySelectorAll('.mobile-menu-links a');

    function openMenu() {
        mobileMenu.classList.add('open');
        hamburger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
        mobileClose.focus();
    }

    function closeMenu() {
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', openMenu);
        if (mobileClose) mobileClose.addEventListener('click', closeMenu);
        if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMenu);
        mobileLinks.forEach(link => link.addEventListener('click', closeMenu));
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape' && mobileMenu.classList.contains('open')) closeMenu();
        });
    }

    // --- Header Scroll Effect ---
    const header = document.querySelector('.header');
    if (header) {
        const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    // --- Scroll Reveal ---
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length > 0 && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        reveals.forEach(el => observer.observe(el));
    } else {
        reveals.forEach(el => el.classList.add('revealed'));
    }

    // --- Project Filter (Projects Page) ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('[data-category]');

    if (filterBtns.length > 0 && projectCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.dataset.filter;

                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                projectCards.forEach(card => {
                    const match = filter === 'all' || card.dataset.category.includes(filter);
                    card.style.display = match ? '' : 'none';
                    if (match) card.style.animation = 'fadeIn 0.35s ease forwards';
                });
            });
        });
    }
})();
