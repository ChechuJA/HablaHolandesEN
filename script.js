// Dictionary data: Spanish-Dutch word pairs
const dictionaryData = [
    { spanish: 'Hola', dutch: 'Hallo' },
    { spanish: 'Adiós', dutch: 'Dag' },
    { spanish: 'Gracias', dutch: 'Dank je wel' },
    { spanish: 'Por favor', dutch: 'Alsjeblieft' },
    { spanish: 'Sí', dutch: 'Ja' },
    { spanish: 'No', dutch: 'Nee' },
    { spanish: 'Buenos días', dutch: 'Goedemorgen' },
    { spanish: 'Buenas noches', dutch: 'Goedenavond' },
    { spanish: 'Casa', dutch: 'Huis' },
    { spanish: 'Perro', dutch: 'Hond' },
    { spanish: 'Gato', dutch: 'Kat' },
    { spanish: 'Agua', dutch: 'Water' },
    { spanish: 'Comida', dutch: 'Voedsel' },
    { spanish: 'Bebida', dutch: 'Drinken' },
    { spanish: 'Libro', dutch: 'Boek' },
    { spanish: 'Mesa', dutch: 'Tafel' },
    { spanish: 'Silla', dutch: 'Stoel' },
    { spanish: 'Ventana', dutch: 'Raam' },
    { spanish: 'Puerta', dutch: 'Deur' },
    { spanish: 'Coche', dutch: 'Auto' },
    { spanish: 'Bicicleta', dutch: 'Fiets' },
    { spanish: 'Tren', dutch: 'Trein' },
    { spanish: 'Avión', dutch: 'Vliegtuig' },
    { spanish: 'Barco', dutch: 'Boot' },
    { spanish: 'Amigo', dutch: 'Vriend' },
    { spanish: 'Familia', dutch: 'Familie' },
    { spanish: 'Madre', dutch: 'Moeder' },
    { spanish: 'Padre', dutch: 'Vader' },
    { spanish: 'Hermano', dutch: 'Broer' },
    { spanish: 'Hermana', dutch: 'Zus' },
    { spanish: 'Hijo', dutch: 'Zoon' },
    { spanish: 'Hija', dutch: 'Dochter' },
    { spanish: 'Pequeño', dutch: 'Klein' },
    { spanish: 'Grande', dutch: 'Groot' },
    { spanish: 'Rápido', dutch: 'Snel' },
    { spanish: 'Lento', dutch: 'Langzaam' },
    { spanish: 'Bonito', dutch: 'Mooi' },
    { spanish: 'Feo', dutch: 'Lelijk' },
    { spanish: 'Bueno', dutch: 'Goed' },
    { spanish: 'Malo', dutch: 'Slecht' },
    { spanish: 'Nuevo', dutch: 'Nieuw' },
    { spanish: 'Viejo', dutch: 'Oud' },
    { spanish: 'Caliente', dutch: 'Warm' },
    { spanish: 'Frío', dutch: 'Koud' },
    { spanish: 'Rojo', dutch: 'Rood' },
    { spanish: 'Azul', dutch: 'Blauw' },
    { spanish: 'Verde', dutch: 'Groen' },
    { spanish: 'Amarillo', dutch: 'Geel' },
    { spanish: 'Negro', dutch: 'Zwart' },
    { spanish: 'Blanco', dutch: 'Wit' },
    { spanish: 'Uno', dutch: 'Een' },
    { spanish: 'Dos', dutch: 'Twee' },
    { spanish: 'Tres', dutch: 'Drie' },
    { spanish: 'Cuatro', dutch: 'Vier' },
    { spanish: 'Cinco', dutch: 'Vijf' },
    { spanish: 'Seis', dutch: 'Zes' },
    { spanish: 'Siete', dutch: 'Zeven' },
    { spanish: 'Ocho', dutch: 'Acht' },
    { spanish: 'Nueve', dutch: 'Negen' },
    { spanish: 'Diez', dutch: 'Tien' },
    { spanish: 'Lunes', dutch: 'Maandag' },
    { spanish: 'Martes', dutch: 'Dinsdag' },
    { spanish: 'Miércoles', dutch: 'Woensdag' },
    { spanish: 'Jueves', dutch: 'Donderdag' },
    { spanish: 'Viernes', dutch: 'Vrijdag' },
    { spanish: 'Sábado', dutch: 'Zaterdag' },
    { spanish: 'Domingo', dutch: 'Zondag' },
    { spanish: 'Enero', dutch: 'Januari' },
    { spanish: 'Febrero', dutch: 'Februari' },
    { spanish: 'Marzo', dutch: 'Maart' },
    { spanish: 'Abril', dutch: 'April' },
    { spanish: 'Mayo', dutch: 'Mei' },
    { spanish: 'Junio', dutch: 'Juni' },
    { spanish: 'Julio', dutch: 'Juli' },
    { spanish: 'Agosto', dutch: 'Augustus' },
    { spanish: 'Septiembre', dutch: 'September' },
    { spanish: 'Octubre', dutch: 'Oktober' },
    { spanish: 'Noviembre', dutch: 'November' },
    { spanish: 'Diciembre', dutch: 'December' },
    { spanish: 'Trabajo', dutch: 'Werk' },
    { spanish: 'Escuela', dutch: 'School' },
    { spanish: 'Hospital', dutch: 'Ziekenhuis' },
    { spanish: 'Tienda', dutch: 'Winkel' },
    { spanish: 'Restaurante', dutch: 'Restaurant' },
    { spanish: 'Banco', dutch: 'Bank' },
    { spanish: 'Ciudad', dutch: 'Stad' },
    { spanish: 'País', dutch: 'Land' },
    { spanish: 'Mundo', dutch: 'Wereld' },
    { spanish: 'Sol', dutch: 'Zon' },
    { spanish: 'Luna', dutch: 'Maan' },
    { spanish: 'Estrella', dutch: 'Ster' },
    { spanish: 'Cielo', dutch: 'Hemel' },
    { spanish: 'Tierra', dutch: 'Aarde' },
    { spanish: 'Mar', dutch: 'Zee' },
    { spanish: 'Montaña', dutch: 'Berg' },
    { spanish: 'Río', dutch: 'Rivier' },
    { spanish: 'Árbol', dutch: 'Boom' },
    { spanish: 'Flor', dutch: 'Bloem' }
];

// Function to transform Spanish word to "Modo EN"
function transformToModoEN(word) {
    // Remove accents for processing
    const normalizedWord = word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    // Find the last vowel in the word
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let lastVowelIndex = -1;
    
    for (let i = normalizedWord.length - 1; i >= 0; i--) {
        if (vowels.includes(normalizedWord[i])) {
            lastVowelIndex = i;
            break;
        }
    }
    
    // If a vowel was found, remove it and add "EN"
    if (lastVowelIndex !== -1) {
        // Use the original word (with accents) but remove character at the same position
        const result = word.substring(0, lastVowelIndex) + word.substring(lastVowelIndex + 1) + 'EN';
        return result;
    }
    
    // If no vowel found, just add "EN"
    return word + 'EN';
}

// Function to transform Spanish word to "Modo OF"
function transformToModoOF(word) {
    // Remove accents for processing
    const normalizedWord = word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    // Find the last vowel in the word
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let lastVowelIndex = -1;
    
    for (let i = normalizedWord.length - 1; i >= 0; i--) {
        if (vowels.includes(normalizedWord[i])) {
            lastVowelIndex = i;
            break;
        }
    }
    
    // If a vowel was found, remove it and add "OF"
    if (lastVowelIndex !== -1) {
        // Use the original word (with accents) but remove character at the same position
        const result = word.substring(0, lastVowelIndex) + word.substring(lastVowelIndex + 1) + 'OF';
        return result;
    }
    
    // If no vowel found, just add "OF"
    return word + 'OF';
}

// Russian dictionary data: Spanish-Russian word pairs
const russianDictionaryData = [
    { spanish: 'Hola', russian: 'Привет (Privet)' },
    { spanish: 'Adiós', russian: 'Пока (Poka)' },
    { spanish: 'Gracias', russian: 'Спасибо (Spasibo)' },
    { spanish: 'Por favor', russian: 'Пожалуйста (Pozhaluysta)' },
    { spanish: 'Sí', russian: 'Да (Da)' },
    { spanish: 'No', russian: 'Нет (Net)' },
    { spanish: 'Buenos días', russian: 'Доброе утро (Dobroye utro)' },
    { spanish: 'Buenas noches', russian: 'Доброй ночи (Dobroy nochi)' },
    { spanish: 'Casa', russian: 'Дом (Dom)' },
    { spanish: 'Perro', russian: 'Собака (Sobaka)' },
    { spanish: 'Gato', russian: 'Кошка (Koshka)' },
    { spanish: 'Agua', russian: 'Вода (Voda)' },
    { spanish: 'Comida', russian: 'Еда (Yeda)' },
    { spanish: 'Libro', russian: 'Книга (Kniga)' },
    { spanish: 'Amigo', russian: 'Друг (Drug)' },
    { spanish: 'Familia', russian: 'Семья (Semya)' },
];

const tiendaProductos = [
    {
        emoji: '📺',
        nombre: 'Estufa de TV Clásica',
        descripcion: 'Fuego en pantalla HD. Calienta tu corazón pero no tu habitación.',
        precio: '49,99 €',
        calor: '0 kcal/h',
        dutch: 'TV-kachel'
    },
    {
        emoji: '🔥',
        nombre: 'Estufa de TV Pro 4K',
        descripcion: 'Llamas en resolución 4K. El frío es el mismo, pero las llamas se ven espectaculares.',
        precio: '129,99 €',
        calor: '0 kcal/h',
        dutch: 'TV-kachel Pro'
    },
    {
        emoji: '🍖',
        nombre: 'Barbacoa Decorativa',
        descripcion: 'Asa visualmente tus salchichas. Ideal para dietas estrictas.',
        precio: '79,99 €',
        calor: '0 kcal/h',
        dutch: 'Decoratieve barbecue'
    },
    {
        emoji: '🏕️',
        nombre: 'Barbacoa de Camping Fake',
        descripcion: 'Lleva el espíritu del camping a casa. Las brasas son de cartón piedra.',
        precio: '39,99 €',
        calor: '0 kcal/h',
        dutch: 'Nep kampeerbbq'
    },
    {
        emoji: '🕯️',
        nombre: 'Chimenea de Velas LED',
        descripcion: 'La experiencia de una chimenea sin el riesgo de incendio ni el calor.',
        precio: '24,99 €',
        calor: '0,001 kcal/h',
        dutch: 'LED-open haard'
    },
    {
        emoji: '🌡️',
        nombre: 'Termómetro Optimista',
        descripcion: 'Siempre marca 22°C para que te sientas bien aunque estés helado.',
        precio: '9,99 €',
        calor: 'N/A',
        dutch: 'Optimistische thermometer'
    }
];

// Global variables
let currentFilteredData = [...dictionaryData];
const PURCHASE_MESSAGE_DURATION = 3500;

// Function to render the joke shop
function renderTienda() {
    const container = document.getElementById('tiendaCards');
    tiendaProductos.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'tienda-card';
        card.innerHTML = `
            <div class="tienda-emoji">${producto.emoji}</div>
            <div class="tienda-nombre">${producto.nombre}</div>
            <div class="tienda-dutch">🇳🇱 ${producto.dutch}</div>
            <div class="tienda-desc">${producto.descripcion}</div>
            <div class="tienda-info">
                <span class="tienda-precio">${producto.precio}</span>
                <span class="tienda-calor">🌡️ ${producto.calor}</span>
            </div>
            <button class="btn btn-tienda">🛒 Comprar</button>
        `;
        const btn = card.querySelector('.btn-tienda');
        btn.addEventListener('click', () => comprar(btn, producto.nombre));
        container.appendChild(card);
    });
}

// Function to handle joke "buy" action
function comprar(btn, nombre) {
    const mensajes = [
        `¡Enhorabuena! Has comprado "${nombre}". El frío sigue siendo tuyo. 🥶`,
        `"${nombre}" en camino. Recuerda: no enchufarla esperando calor. ❄️`,
        `Pedido de "${nombre}" confirmado. La calefacción central te lo agradece. 😂`,
        `¡Excelente elección! "${nombre}" llegará en 3-5 días laborables. El calor, nunca. 🎭`
    ];
    const msg = mensajes[Math.floor(Math.random() * mensajes.length)];
    const carritoMsg = document.getElementById('carritoMsg');
    carritoMsg.textContent = msg;
    carritoMsg.style.display = 'block';
    btn.textContent = '✅ ¡Comprado!';
    btn.disabled = true;
    setTimeout(() => {
        carritoMsg.style.display = 'none';
        btn.textContent = '🛒 Comprar';
        btn.disabled = false;
    }, PURCHASE_MESSAGE_DURATION);
}

// Function to create a word card
function createWordCard(wordData) {
    const card = document.createElement('div');
    card.className = 'word-card';
    
    const modoEN = transformToModoEN(wordData.spanish);
    
    card.innerHTML = `
        <div class="word-item">
            <div class="word-label">🇪🇸 Español</div>
            <div class="word-value">${wordData.spanish}</div>
        </div>
        <div class="word-item">
            <div class="word-label">🇳🇱 Nederlands</div>
            <div class="word-value">${wordData.dutch}</div>
        </div>
        <div class="word-item">
            <div class="word-label">✨ Modo EN</div>
            <div class="word-value en-mode">${modoEN}</div>
        </div>
    `;
    
    return card;
}

// Function to create a Russian word card
function createRussianCard(wordData) {
    const card = document.createElement('div');
    card.className = 'word-card';
    
    const modoOF = transformToModoOF(wordData.spanish);
    
    card.innerHTML = `
        <div class="word-item">
            <div class="word-label">🇪🇸 Español</div>
            <div class="word-value">${wordData.spanish}</div>
        </div>
        <div class="word-item">
            <div class="word-label">🇷🇺 Русский</div>
            <div class="word-value">${wordData.russian}</div>
        </div>
        <div class="word-item">
            <div class="word-label">✨ Modo OF</div>
            <div class="word-value en-mode">${modoOF}</div>
        </div>
    `;
    
    return card;
}

// Function to render the Russian dictionary
function renderRussianDictionary() {
    const container = document.getElementById('russianDictionaryCards');
    const wordCount = document.getElementById('russianWordCount');
    wordCount.textContent = `(${russianDictionaryData.length} palabras)`;
    russianDictionaryData.forEach((wordData, index) => {
        const card = createRussianCard(wordData);
        card.style.animationDelay = `${index * 0.05}s`;
        container.appendChild(card);
    });
}


// Function to render the dictionary
function renderDictionary(data) {
    const container = document.getElementById('dictionaryCards');
    const noResults = document.getElementById('noResults');
    const wordCount = document.getElementById('wordCount');
    
    container.innerHTML = '';
    
    if (data.length === 0) {
        noResults.style.display = 'block';
        container.style.display = 'none';
        wordCount.textContent = '(0 palabras)';
    } else {
        noResults.style.display = 'none';
        container.style.display = 'grid';
        wordCount.textContent = `(${data.length} palabra${data.length !== 1 ? 's' : ''})`;
        
        data.forEach((wordData, index) => {
            const card = createWordCard(wordData);
            // Stagger animation
            card.style.animationDelay = `${index * 0.05}s`;
            container.appendChild(card);
        });
    }
}

// Function to filter dictionary based on search
function filterDictionary(searchTerm) {
    if (!searchTerm) {
        currentFilteredData = [...dictionaryData];
    } else {
        const lowerSearch = searchTerm.toLowerCase();
        currentFilteredData = dictionaryData.filter(item => {
            const modoEN = transformToModoEN(item.spanish).toLowerCase();
            return item.spanish.toLowerCase().includes(lowerSearch) ||
                   item.dutch.toLowerCase().includes(lowerSearch) ||
                   modoEN.includes(lowerSearch);
        });
    }
    
    renderDictionary(currentFilteredData);
}

// Function to show random word
function showRandomWord() {
    if (dictionaryData.length === 0) return;
    
    const randomIndex = Math.floor(Math.random() * dictionaryData.length);
    const randomWord = dictionaryData[randomIndex];
    
    // Clear search and show only the random word
    document.getElementById('searchInput').value = '';
    currentFilteredData = [randomWord];
    renderDictionary(currentFilteredData);
    
    // Scroll to dictionary section
    document.getElementById('dictionary').scrollIntoView({ behavior: 'smooth' });
}

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    const darkModeBtn = document.getElementById('darkModeToggle');
    
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        darkModeBtn.textContent = '☀️ Modo Claro';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        darkModeBtn.textContent = '🌙 Modo Oscuro';
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Initialize the application
function init() {
    // Load dark mode preference
    const darkModePreference = localStorage.getItem('darkMode');
    if (darkModePreference === 'enabled') {
        document.body.classList.add('dark-mode');
        document.getElementById('darkModeToggle').textContent = '☀️ Modo Claro';
    }
    
    // Render initial dictionary
    renderDictionary(dictionaryData);
    
    // Render joke shop
    renderTienda();
    
    // Render Russian dictionary
    renderRussianDictionary();
    
    // Setup event listeners
    const searchInput = document.getElementById('searchInput');
    const randomBtn = document.getElementById('randomBtn');
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    // Real-time search
    searchInput.addEventListener('input', (e) => {
        filterDictionary(e.target.value.trim());
    });
    
    // Random word button
    randomBtn.addEventListener('click', showRandomWord);
    
    // Dark mode toggle
    darkModeToggle.addEventListener('click', toggleDarkMode);
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Popup logic
(function () {
    function initPopup() {
        const overlay = document.getElementById('popupOverlay');
        const closeBtn = document.getElementById('closePopup');
        const closeBtnBottom = document.getElementById('closePopupBtn');

        if (!overlay || !closeBtn || !closeBtnBottom) return;

        if (!sessionStorage.getItem('popupSeen')) {
            overlay.classList.add('active');
        }

        function closePopup() {
            overlay.classList.remove('active');
            sessionStorage.setItem('popupSeen', '1');
        }

        closeBtn.addEventListener('click', closePopup);
        closeBtnBottom.addEventListener('click', closePopup);
        overlay.addEventListener('click', function (e) {
            if (e.target === overlay) closePopup();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPopup);
    } else {
        initPopup();
    }
})();

// Cookie banner logic
(function () {
    function initCookieBanner() {
        const banner = document.getElementById('cookieBanner');
        const acceptBtn = document.getElementById('acceptCookies');

        if (!banner || !acceptBtn) return;

        if (!localStorage.getItem('cookiesAccepted')) {
            banner.classList.add('active');
        }

        acceptBtn.addEventListener('click', function () {
            banner.classList.remove('active');
            localStorage.setItem('cookiesAccepted', '1');
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCookieBanner);
    } else {
        initCookieBanner();
    }
})();
