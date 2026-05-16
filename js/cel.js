   const menuLinks = document.querySelectorAll('.mobile-menu a');
    const offcanvasElement = document.getElementById('mobileMenu');

    menuLinks.forEach(link => {

        link.addEventListener('click', () => {

            const offcanvas =
                bootstrap.Offcanvas.getInstance(offcanvasElement);

            offcanvas.hide();

        });

    });