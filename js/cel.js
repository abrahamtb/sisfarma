function hideLoader() {
  const loader = document.getElementById("loader");

  if (!loader) {
    return;
  }

  loader.style.opacity = "0";

  window.setTimeout(() => {
    loader.style.display = "none";
  }, 500);
}

function setupScrollTopButton() {
  const btnTop = document.getElementById("btnTop");

  if (!btnTop) {
    return;
  }

  const toggleVisibility = () => {
    btnTop.classList.toggle("is-visible", window.scrollY > 300);
  };

  window.addEventListener("scroll", toggleVisibility);

  btnTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  toggleVisibility();
}

function setupMobileMenu() {
  document.addEventListener("click", (event) => {
    const menuLink = event.target.closest(".mobile-menu a");
    const offcanvasElement = document.getElementById("mobileMenu");

    if (!menuLink || !offcanvasElement || typeof bootstrap === "undefined") {
      return;
    }

    const offcanvas =
      bootstrap.Offcanvas.getInstance(offcanvasElement) ||
      new bootstrap.Offcanvas(offcanvasElement);

    offcanvas.hide();
  });
}

function setupScrollVideoAutoplay() {
  const promoVideo = document.querySelector(".promo-video");

  if (!promoVideo || typeof IntersectionObserver === "undefined") {
    return;
  }

  let hasScrolledDown = window.scrollY > 120;
  let hasPlayedOnce = false;

  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 120) {
        hasScrolledDown = true;
      }
    },
    { passive: true }
  );

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry) {
        return;
      }

      const shouldAutoplay =
        entry.isIntersecting && entry.intersectionRatio >= 0.6 && hasScrolledDown;

      if (shouldAutoplay && (promoVideo.paused || promoVideo.ended)) {
        promoVideo
          .play()
          .then(() => {
            hasPlayedOnce = true;
          })
          .catch(() => {});
        return;
      }

      if (!entry.isIntersecting && hasPlayedOnce && !promoVideo.paused) {
        promoVideo.pause();
      }
    },
    {
      threshold: [0.25, 0.6, 0.85],
    }
  );

  observer.observe(promoVideo);
}

function highlightCurrentLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const currentHash = window.location.hash;

  document.querySelectorAll(".nav-link, .mobile-menu a").forEach((link) => {
    const href = link.getAttribute("href");

    if (!href) {
      return;
    }

    const [pagePart, hashPart] = href.split("#");
    const normalizedHref = pagePart || "index.html";
    const matchesPage = normalizedHref === currentPage;
    const matchesHash = hashPart ? `#${hashPart}` === currentHash : true;

    if (matchesPage && matchesHash) {
      link.classList.add("is-active");
    }
  });
}

async function injectComponent(targetId, path) {
  const target = document.getElementById(targetId);

  if (!target) {
    return;
  }

  try {
    const response = await fetch(path);

    if (!response.ok) {
      throw new Error(`No se pudo cargar ${path}`);
    }

    target.innerHTML = await response.text();
  } catch (error) {
    console.error(error);
  }
}

async function loadLayoutComponents() {
  await Promise.all([
    injectComponent("navbar", "components/navbar.html"),
    injectComponent("footer", "components/footer.html"),
  ]);

  highlightCurrentLink();
}

function buscarProducto(event) {
  event.preventDefault();

  const desktopInput = document.getElementById("searchInput");
  const mobileInput = document.getElementById("searchInputMobile");
  const texto =
    (desktopInput && desktopInput.value.trim()) ||
    (mobileInput && mobileInput.value.trim()) ||
    "";

  if (texto) {
    window.location.href = `productos.html?buscar=${encodeURIComponent(texto)}`;
  }
}

window.buscarProducto = buscarProducto;

window.addEventListener("load", hideLoader);

document.addEventListener("DOMContentLoaded", () => {
  setupScrollTopButton();
  setupMobileMenu();
  setupScrollVideoAutoplay();
  loadLayoutComponents();
});
