AOS.init({
    duration: 1000,
    once: true
});

const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keyup', () => {

    let value = searchInput.value.toLowerCase();

    if(value.includes('paracetamol')) {
        alert('✅ Paracetamol disponible en SisFarma');
    }

    if(value.includes('ibuprofeno')) {
        alert('✅ Ibuprofeno disponible en SisFarma');
    }

    if(value.includes('vitamina')) {
        alert('✅ Vitaminas disponibles');
    }
});

