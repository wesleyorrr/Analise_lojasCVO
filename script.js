// Base de dados das lojas
const storesData = [
    {
        name: "Amore Mio",
        description: "Loja de moda feminina em Curvelo",
        rating: 5.0,
        reviews: 12,
        category: "Moda Feminina",
        address: "R. Joaquim Felício, 139 - L2",
        phone: "(38) 99727-3436",
        hours: "Aberto ⋅ Fecha 18:00",
        isOpen: true,
        services: ["Compras na loja"],
        review: "A loja é linda! O atendimento é perfeito!",
        coordinates: [-18.7566, -44.4309],
        lastEvaluation: "2023-10-15"
    },
    {
        name: "Heloisa Ribeiro Curvelo",
        description: "Loja de Roupa",
        rating: 4.9,
        reviews: 12,
        category: "Moda Feminina",
        address: "R. Sicapio Fernandes, 24",
        phone: "(38) 99994-6657",
        hours: "Aberto ⋅ Fecha 18:30",
        isOpen: true,
        services: ["Compras na loja", "Retirada na loja", "Entrega"],
        review: "",
        coordinates: [-18.7570, -44.4315],
        lastEvaluation: "2023-11-20"
    },
    {
        name: "Rota do Corpo Curvelo",
        description: "Loja de Roupa",
        rating: 4.8,
        reviews: 22,
        category: "Moda Feminina",
        address: "R. Joaquim Felício, 50",
        phone: "(38) 98835-2735",
        hours: "Aberto ⋅ Fecha 18:00",
        isOpen: true,
        services: ["Compras na loja"],
        review: "Excelente atendimento, ótimo preço e qualidade!",
        coordinates: [-18.7558, -44.4295],
        lastEvaluation: "2023-10-28"
    },
    {
        name: "Tanure Store • Moda Masculina Curvelo",
        description: "Loja de Roupa",
        rating: 5.0,
        reviews: 25,
        category: "Moda Masculina",
        address: "R. Zuzu Angel, 08",
        phone: "(38) 99867-8683",
        hours: "Aberto ⋅ Fecha 18:30",
        isOpen: true,
        services: ["Compras na loja"],
        review: "Foi um excelente atendimento, loja moda masculina moderníssima",
        coordinates: [-18.7580, -44.4325],
        lastEvaluation: "2023-11-15"
    },
    {
        name: "Nossa Loja",
        description: "Loja de Roupa",
        rating: 4.7,
        reviews: 18,
        category: "Moda Feminina",
        address: "R. Pacífico Mascarenhas, 423",
        phone: "(38) 3721-3490",
        hours: "Aberto ⋅ Fecha 18:00",
        isOpen: true,
        services: ["Compras na loja"],
        review: "Melhor loja de Curvelo!",
        coordinates: [-18.7535, -44.4280],
        lastEvaluation: "2023-09-30"
    },
    {
        name: "Loja CristaisdeCurvelo - Filial",
        description: "Loja de produtos esotéricos",
        rating: 4.7,
        reviews: 338,
        category: "Esotéricos",
        address: "Av. J K, Nº 662",
        phone: "(38) 99205-6463",
        hours: "Aberto ⋅ Fecha 17:00",
        isOpen: true,
        services: ["Compras na loja"],
        review: "Melhor loja da cidade, produtos de qualidade com um excelente atendimento",
        coordinates: [-18.7590, -44.4330],
        lastEvaluation: "2023-12-05"
    },
    {
        name: "Lojas Duarte - Casa e Presente - Curvelo",
        description: "Loja de presentes",
        rating: 4.5,
        reviews: 158,
        category: "Presentes",
        address: "Av. Integração Sergio Eugênio da Silva, 948",
        phone: "(38) 3721-4300",
        hours: "Aberto ⋅ Fecha 18:30",
        isOpen: true,
        services: ["Compras na loja"],
        review: "O local apresenta uma boa variedade de produtos",
        coordinates: [-18.7510, -44.4250],
        lastEvaluation: "2023-10-10"
    },
    {
        name: "A IDEAL MODAS CURVELO",
        description: "Loja de Roupa",
        rating: 4.4,
        reviews: 27,
        category: "Moda Feminina",
        address: "Av. Dom Pedro II, 400",
        phone: "(38) 3721-2011",
        hours: "Aberto ⋅ Fecha 19:00",
        isOpen: true,
        services: ["Compras na loja"],
        review: "Ótimo atendimento, parabéns pra essa equipe Maravilhosa.",
        coordinates: [-18.7600, -44.4340],
        lastEvaluation: "2023-09-15"
    },
    {
        name: "Loja Natália Diniz",
        description: "Loja de roupas de praia",
        rating: 5.0,
        reviews: 40,
        category: "Moda Praia",
        address: "R. Afonso Pena, 92",
        phone: "(38) 99805-9292",
        hours: "Aberto ⋅ Fecha 18:00",
        isOpen: true,
        services: ["Compras na loja"],
        review: "Indico de olhos fechados, peças maravilhosas e atendimento perfeito 😍😍",
        coordinates: [-18.7520, -44.4260],
        lastEvaluation: "2023-11-25"
    },
    {
        name: "Ypslon Curvelo",
        description: "Loja de Roupa",
        rating: 5.0,
        reviews: 2,
        category: "Moda Feminina",
        address: "R. Pacífico Mascarenhas, 106",
        phone: "(38) 99848-3474",
        hours: "Aberto ⋅ Fecha 18:30",
        isOpen: true,
        services: ["Compras na loja", "Retirada na loja", "Entrega"],
        review: "",
        coordinates: [-18.7540, -44.4270],
        lastEvaluation: "2023-08-20"
    },
    {
        name: "Rede Albatroz - Curvelo",
        description: "Loja de artigos para cama, mesa e banho",
        rating: 4.4,
        reviews: 24,
        category: "Cama, Mesa e Banho",
        address: "Praça Tiradentes, 548",
        phone: "(38) 99900-7485",
        hours: "Aberto ⋅ Fecha 18:30",
        isOpen: true,
        services: ["Compras na loja", "Montador de móveis"],
        review: "Montador de móveis",
        coordinates: [-18.7560, -44.4300],
        lastEvaluation: "2023-10-05"
    },
    {
        name: "Lupo Franquia Curvelo",
        description: "Loja de Roupa",
        rating: 4.9,
        reviews: 18,
        category: "Moda Feminina",
        address: "R. Juvenal Borges, 21",
        phone: "(38) 99918-5838",
        hours: "Aberto ⋅ Fecha 19:00",
        isOpen: true,
        services: ["Compras na loja"],
        review: "Excelente atendimento, loja sensacional melhor de Curvelo e Região.",
        coordinates: [-18.7575, -44.4318],
        lastEvaluation: "2023-11-10"
    },
    {
        name: "Lojas Carvalho",
        description: "Loja de Roupa",
        rating: 4.1,
        reviews: 30,
        category: "Moda Feminina",
        address: "Praça Tiradentes, 568A",
        phone: "(38) 3722-3776",
        hours: "Aberto ⋅ Fecha 18:30",
        isOpen: true,
        services: ["Compras na loja"],
        review: "Preço acessível.",
        coordinates: [-18.7562, -44.4302],
        lastEvaluation: "2023-09-05"
    },
    {
        name: "Loja Casa & Conforto - Curvelo",
        description: "Loja de artigos para cama, mesa e banho",
        rating: 5.0,
        reviews: 2,
        category: "Cama, Mesa e Banho",
        address: "R. Barão Rio Branco, 228",
        phone: "(38) 99930-6369",
        hours: "Aberto ⋅ Fecha 18:00",
        isOpen: true,
        services: ["Compras na loja", "Entrega"],
        review: "",
        coordinates: [-18.7550, -44.4290],
        lastEvaluation: "2023-08-15"
    },
    {
        name: "Pontual Magazine",
        description: "Loja de artigos para cama, mesa e banho",
        rating: 5.0,
        reviews: 2,
        category: "Cama, Mesa e Banho",
        address: "Av. Dom Pedro II, 144",
        phone: "(38) 3721-4990",
        hours: "Aberto ⋅ Fecha 18:00",
        isOpen: true,
        services: ["Compras na loja"],
        review: "⭐ Quero deixar aqui meu elogio e agradecimento a essa loja maravilhosa!",
        coordinates: [-18.7595, -44.4335],
        lastEvaluation: "2023-10-20"
    },
    {
        name: "Dom Pedro Store - Curvelo",
        description: "Loja de Roupa",
        rating: 5.0,
        reviews: 1,
        category: "Moda Feminina",
        address: "R. Dom Pedro I, 152",
        phone: "(38) 99881-1122",
        hours: "Aberto ⋅ Fecha 19:00",
        isOpen: true,
        services: ["Compras na loja"],
        review: "ROUPAS MARAVILHOSAS E DE ÓTIMA QUALIDADE, PREÇO TAMBÉM O MELHOR DA REGIÃO",
        coordinates: [-18.7585, -44.4328],
        lastEvaluation: "2023-07-30"
    },
    {
        name: "Ruth Figueiredo - Moda Feminina e Masculina",
        description: "Loja de Roupa",
        rating: 5.0,
        reviews: 56,
        category: "Moda Feminina",
        address: "R. Bueno Brandão, 21",
        phone: "(38) 3721-6291",
        hours: "Aberto ⋅ Fecha 18:00",
        isOpen: true,
        services: ["Compras na loja"],
        review: "Excelente loja Produtos maravilhosos Atendimento espetacular.",
        coordinates: [-18.7530, -44.4275],
        lastEvaluation: "2023-12-10"
    },
    {
        name: "Madame Chica",
        description: "Loja de moda feminina",
        rating: 5.0,
        reviews: 2,
        category: "Moda Feminina",
        address: "R. Padre Paulo Ruthen, 198",
        phone: "(38) 99912-5232",
        hours: "Aberto ⋅ Fecha 18:00",
        isOpen: true,
        services: ["Compras na loja"],
        review: "Tudo muito lindo ,de bom gosto , atendimento excelente .",
        coordinates: [-18.7545, -44.4285],
        lastEvaluation: "2023-11-05"
    },
    {
        name: "Alto Impacto - Moda feminina em Curvelo",
        description: "Loja de moda feminina",
        rating: 5.0,
        reviews: 14,
        category: "Moda Feminina",
        address: "Av. dos Timbiras, 581 - apto 202",
        phone: "(38) 99726-6616",
        hours: "Aberto agora",
        isOpen: true,
        services: ["Compras na loja"],
        review: "Excelente loja , bom atendimento , roupas lindas e de qualidade .",
        coordinates: [-18.7525, -44.4265],
        lastEvaluation: "2023-12-01"
    },
    {
        name: "Paulla Boutique - Loja de Roupa em Curvelo",
        description: "Loja de moda feminina",
        rating: 0,
        reviews: 0,
        category: "Moda Feminina",
        address: "R. Zuzu Angel, 95",
        phone: "(38) 99871-0847",
        hours: "Aberto ⋅ Fecha 18:00",
        isOpen: true,
        services: ["Compras na loja", "Retirada na porta", "Entrega"],
        review: "",
        coordinates: [-18.7578, -44.4319],
        lastEvaluation: null
    }
];

// Variáveis globais
let map;
let markers = [];
let filteredStores = [...storesData];
let selectedCategories = [];
let minRating = 4.0;
let onlyOpen = true;
let selectedLevel = 'all';

// Gráficos
let rankingChart, categoryChart, reviewsChart;

// Cores para diferentes categorias
const categoryColors = {
    "Moda Feminina": "#8a2387",
    "Moda Masculina": "#2196F3",
    "Esotéricos": "#9C27B0",
    "Presentes": "#FF9800",
    "Moda Praia": "#00BCD4",
    "Cama, Mesa e Banho": "#4CAF50"
};

// Inicialização do dashboard
document.addEventListener('DOMContentLoaded', function() {
    initFilters();
    renderStores();
    initMap();
    updateStats();
    initCharts();
    renderRankingTable();
    
    // Event listeners
    document.getElementById('ratingSlider').addEventListener('input', function() {
        document.getElementById('ratingValue').textContent = this.value;
        minRating = parseFloat(this.value);
        filterStores();
    });
    
    document.getElementById('openNowFilter').addEventListener('change', function() {
        onlyOpen = this.checked;
        filterStores();
    });
    
    // Event listeners para filtros de nível
    document.querySelectorAll('input[name="level"]').forEach(radio => {
        radio.addEventListener('change', function() {
            selectedLevel = this.value;
            filterStores();
        });
    });
    
    document.getElementById('resetFilters').addEventListener('click', resetFilters);
    document.getElementById('toggleMap').addEventListener('click', toggleMap);
    document.getElementById('toggleCharts').addEventListener('click', toggleCharts);
    document.getElementById('showCongrats').addEventListener('click', showCongratsModal);
    document.getElementById('showAlerts').addEventListener('click', showAlertsModal);
    document.getElementById('exportData').addEventListener('click', exportData);
    document.getElementById('shareCongrats').addEventListener('click', shareCongrats);
    
    // Fechar modais
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.modal').forEach(modal => {
                modal.classList.remove('active');
            });
        });
    });
    
    // Fechar modais ao clicar fora
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
            }
        });
    });
});

// Inicializar os filtros de categoria
function initFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const categories = [...new Set(storesData.map(store => store.category))];
    
    categories.forEach(category => {
        const count = storesData.filter(store => store.category === category).length;
        
        const li = document.createElement('li');
        li.innerHTML = `
            <label>
                <input type="checkbox" value="${category}" checked>
                <span>${category}</span>
                <span class="category-count">${count}</span>
            </label>
        `;
        
        li.querySelector('input').addEventListener('change', function() {
            if (this.checked) {
                selectedCategories.push(this.value);
            } else {
                selectedCategories = selectedCategories.filter(cat => cat !== this.value);
            }
            filterStores();
        });
        
        categoryFilter.appendChild(li);
        selectedCategories.push(category);
    });
}

// Renderizar as lojas
function renderStores() {
    const cardsContainer = document.getElementById('cardsContainer');
    const noResults = document.getElementById('noResults');
    
    cardsContainer.innerHTML = '';
    
    if (filteredStores.length === 0) {
        noResults.style.display = 'block';
        document.getElementById('resultCount').textContent = '0';
        return;
    }
    
    noResults.style.display = 'none';
    document.getElementById('resultCount').textContent = filteredStores.length;
    document.getElementById('totalCount').textContent = storesData.length;
    
    filteredStores.forEach(store => {
        const card = createStoreCard(store);
        cardsContainer.appendChild(card);
    });
}

// Criar card de loja
function createStoreCard(store) {
    const card = document.createElement('div');
    card.className = 'card';
    
    // Determinar nível de avaliação
    const ratingLevel = getRatingLevel(store.rating);
    card.classList.add(`rating-${ratingLevel}`);
    
    // Determinar se está aberta
    const isOpen = store.isOpen;
    const statusText = isOpen ? 'Aberta' : 'Fechada';
    const statusClass = isOpen ? 'open' : 'closed';
    
    // Criar estrelas de avaliação
    let stars = '';
    if (store.rating > 0) {
        stars = '<i class="fas fa-star"></i>'.repeat(Math.floor(store.rating));
        if (store.rating % 1 >= 0.5) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        }
    }
    
    card.innerHTML = `
        <div class="card-header">
            <div class="card-title">
                <h3>${store.name}</h3>
                <div class="rating ${ratingLevel}">
                    ${store.rating > 0 ? `${store.rating.toFixed(1)}` : 'Sem avaliações'} 
                    ${store.rating > 0 ? stars : ''}
                    <span>(${store.reviews})</span>
                </div>
            </div>
            <span class="category" style="background-color: ${categoryColors[store.category] || '#8a2387'}">${store.category}</span>
            <span class="status ${statusClass}">${statusText}</span>
        </div>
        <div class="card-body">
            <div class="info-item">
                <i class="fas fa-map-marker-alt"></i>
                <p>${store.address}</p>
            </div>
            <div class="info-item">
                <i class="fas fa-phone"></i>
                <p>${store.phone}</p>
            </div>
            <div class="info-item">
                <i class="fas fa-clock"></i>
                <p>${store.hours}</p>
            </div>
            
            ${store.services.length > 0 ? `
                <div class="services">
                    ${store.services.map(service => `<span class="service-tag">${service}</span>`).join('')}
                </div>
            ` : ''}
            
            ${store.review ? `
                <div class="review">
                    ${store.review}
                </div>
            ` : ''}
        </div>
        <div class="card-footer">
            <div class="card-info">
                <small>Última avaliação: ${store.lastEvaluation ? new Date(store.lastEvaluation).toLocaleDateString('pt-BR') : 'N/A'}</small>
            </div>
            <div class="card-actions">
                ${store.rating >= 4.5 ? `
                    <button class="card-btn congrats" data-store="${store.name}">
                        <i class="fas fa-trophy"></i> Parabenizar
                    </button>
                ` : ''}
                ${store.rating >= 3.5 && store.rating < 4.5 ? `
                    <button class="card-btn alert" data-store="${store.name}">
                        <i class="fas fa-exclamation-triangle"></i> Sugerir melhorias
                    </button>
                ` : ''}
            </div>
        </div>
    `;
    
    // Adicionar eventos aos botões
    const congratsBtn = card.querySelector('.card-btn.congrats');
    if (congratsBtn) {
        congratsBtn.addEventListener('click', function() {
            congratulateStore(this.dataset.store);
        });
    }
    
    const alertBtn = card.querySelector('.card-btn.alert');
    if (alertBtn) {
        alertBtn.addEventListener('click', function() {
            suggestImprovements(this.dataset.store);
        });
    }
    
    return card;
}

// Filtrar lojas
function filterStores() {
    filteredStores = storesData.filter(store => {
        // Filtro por categoria
        if (selectedCategories.length > 0 && !selectedCategories.includes(store.category)) {
            return false;
        }
        
        // Filtro por avaliação
        if (store.rating < minRating) {
            return false;
        }
        
        // Filtro por status (abertas)
        if (onlyOpen && !store.isOpen) {
            return false;
        }
        
        // Filtro por nível
        if (selectedLevel !== 'all') {
            const level = getRatingLevel(store.rating);
            if (selectedLevel !== level) {
                return false;
            }
        }
        
        return true;
    });
    
    renderStores();
    updateMap();
    updateStats();
    updateCharts();
    renderRankingTable();
}

// Obter nível de avaliação
function getRatingLevel(rating) {
    if (rating >= 4.5) return 'high';
    if (rating >= 3.5) return 'medium';
    return 'low';
}

// Atualizar estatísticas
function updateStats() {
    const totalShops = storesData.length;
    const openShops = storesData.filter(store => store.isOpen).length;
    const avgRating = (storesData.reduce((sum, store) => sum + store.rating, 0) / storesData.length).toFixed(1);
    
    // Encontrar a loja com maior avaliação
    const topStore = storesData.reduce((prev, current) => {
        return (prev.rating > current.rating) ? prev : current;
    });
    
    document.getElementById('totalShops').textContent = totalShops;
    document.getElementById('openShops').textContent = openShops;
    document.getElementById('avgRating').textContent = avgRating;
    document.getElementById('topShop').textContent = topStore.name;
}

// Resetar filtros
function resetFilters() {
    selectedCategories = [...new Set(storesData.map(store => store.category))];
    minRating = 4.0;
    onlyOpen = true;
    selectedLevel = 'all';
    
    // Atualizar UI
    document.querySelectorAll('#categoryFilter input').forEach(checkbox => {
        checkbox.checked = true;
    });
    
    document.getElementById('ratingSlider').value = minRating;
    document.getElementById('ratingValue').textContent = minRating;
    document.getElementById('openNowFilter').checked = onlyOpen;
    document.querySelector('input[name="level"][value="all"]').checked = true;
    
    filterStores();
}

// Inicializar mapa
function initMap() {
    // Coordenadas de Curvelo, MG
    const curveloCoords = [-18.7566, -44.4309];
    
    // Criar mapa
    map = L.map('map').setView(curveloCoords, 14);
    
    // Adicionar tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Adicionar marcadores para todas as lojas inicialmente
    updateMap();
}

// Atualizar mapa com marcadores
function updateMap() {
    // Limpar marcadores existentes
    markers.forEach(marker => marker.remove());
    markers = [];
    
    // Adicionar novos marcadores
    filteredStores.forEach(store => {
        if (store.coordinates) {
            const markerColor = categoryColors[store.category] || '#8a2387';
            const ratingLevel = getRatingLevel(store.rating);
            
            // Definir cor baseada no nível de avaliação
            let levelColor;
            switch(ratingLevel) {
                case 'high': levelColor = '#28a745'; break;
                case 'medium': levelColor = '#ffc107'; break;
                case 'low': levelColor = '#dc3545'; break;
                default: levelColor = markerColor;
            }
            
            // Criar ícone personalizado
            const storeIcon = L.divIcon({
                html: `<div style="background-color: ${levelColor}; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.2);"></div>`,
                className: 'store-marker',
                iconSize: [24, 24],
                iconAnchor: [12, 12]
            });
            
            const marker = L.marker(store.coordinates, { icon: storeIcon })
                .addTo(map)
                .bindPopup(`
                    <div style="font-weight: bold; margin-bottom: 5px;">${store.name}</div>
                    <div style="margin-bottom: 5px;">${store.category}</div>
                    <div style="margin-bottom: 5px;">⭐ ${store.rating > 0 ? store.rating.toFixed(1) : 'Sem avaliações'} (${store.reviews})</div>
                    <div style="margin-bottom: 5px;">${store.address}</div>
                    <div style="color: ${store.isOpen ? 'green' : 'red'}; font-weight: bold;">
                        ${store.isOpen ? '🟢 Aberta' : '🔴 Fechada'}
                    </div>
                `);
            
            markers.push(marker);
        }
    });
    
    // Ajustar view do mapa se houver marcadores
    if (filteredStores.length > 0 && filteredStores[0].coordinates) {
        const storeCoords = filteredStores.map(store => store.coordinates);
        const bounds = L.latLngBounds(storeCoords);
        map.fitBounds(bounds, { padding: [50, 50] });
    }
}

// Alternar visibilidade do mapa
function toggleMap() {
    const mainContent = document.querySelector('.main-content');
    const toggleBtn = document.getElementById('toggleMap');
    const icon = toggleBtn.querySelector('i');
    const text = toggleBtn.querySelector('span');
    
    if (mainContent.classList.contains('map-expanded')) {
        mainContent.classList.remove('map-expanded');
        icon.className = 'fas fa-expand';
        text.textContent = 'Expandir Mapa';
    } else {
        mainContent.classList.add('map-expanded');
        icon.className = 'fas fa-compress';
        text.textContent = 'Reduzir Mapa';
    }
}

// Alternar gráficos
function toggleCharts() {
    const chartsContainer = document.querySelector('.charts-container');
    const chartWrappers = document.querySelectorAll('.chart-wrapper');
    
    if (chartsContainer.style.gridTemplateColumns === '1fr') {
        chartsContainer.style.gridTemplateColumns = '1fr 1fr';
        chartWrappers[2].classList.add('full-width');
    } else {
        chartsContainer.style.gridTemplateColumns = '1fr';
        chartWrappers[2].classList.remove('full-width');
    }
}

// Inicializar gráficos
function initCharts() {
    // Gráfico de ranking
    const rankingCtx = document.getElementById('rankingChart').getContext('2d');
    
    // Ordenar lojas por avaliação (maior para menor)
    const sortedStores = [...storesData]
        .filter(store => store.rating > 0)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 10);
    
    rankingChart = new Chart(rankingCtx, {
        type: 'bar',
        data: {
            labels: sortedStores.map(store => store.name),
            datasets: [{
                label: 'Avaliação',
                data: sortedStores.map(store => store.rating),
                backgroundColor: sortedStores.map(store => {
                    const level = getRatingLevel(store.rating);
                    return level === 'high' ? '#28a745' : 
                           level === 'medium' ? '#ffc107' : '#dc3545';
                }),
                borderColor: sortedStores.map(store => {
                    const level = getRatingLevel(store.rating);
                    return level === 'high' ? '#218838' : 
                           level === 'medium' ? '#e0a800' : '#c82333';
                }),
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 5,
                    ticks: {
                        stepSize: 0.5
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const store = sortedStores[context.dataIndex];
                            return `Avaliação: ${store.rating.toFixed(1)} (${store.reviews} avaliações)`;
                        }
                    }
                }
            }
        }
    });
    
    // Gráfico de categorias
    const categoryCtx = document.getElementById('categoryChart').getContext('2d');
    
    // Contar lojas por categoria
    const categoryCounts = {};
    storesData.forEach(store => {
        categoryCounts[store.category] = (categoryCounts[store.category] || 0) + 1;
    });
    
    const categories = Object.keys(categoryCounts);
    const counts = Object.values(categoryCounts);
    
    categoryChart = new Chart(categoryCtx, {
        type: 'doughnut',
        data: {
            labels: categories,
            datasets: [{
                data: counts,
                backgroundColor: categories.map(cat => categoryColors[cat] || '#6c757d'),
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const percentage = ((context.parsed / storesData.length) * 100).toFixed(1);
                            return `${context.label}: ${context.parsed} lojas (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
    
    // Gráfico de avaliações
    const reviewsCtx = document.getElementById('reviewsChart').getContext('2d');
    
    // Preparar dados para gráfico de dispersão
    const reviewData = storesData.map(store => ({
        x: store.reviews,
        y: store.rating,
        name: store.name,
        category: store.category
    }));
    
    reviewsChart = new Chart(reviewsCtx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Lojas',
                data: reviewData,
                backgroundColor: reviewData.map(item => {
                    const level = getRatingLevel(item.y);
                    return level === 'high' ? 'rgba(40, 167, 69, 0.7)' : 
                           level === 'medium' ? 'rgba(255, 193, 7, 0.7)' : 
                           'rgba(220, 53, 69, 0.7)';
                }),
                borderColor: reviewData.map(item => {
                    const level = getRatingLevel(item.y);
                    return level === 'high' ? '#218838' : 
                           level === 'medium' ? '#e0a800' : '#c82333';
                }),
                borderWidth: 1,
                pointRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Número de Avaliações'
                    },
                    beginAtZero: true
                },
                y: {
                    title: {
                        display: true,
                        text: 'Avaliação'
                    },
                    beginAtZero: true,
                    max: 5,
                    ticks: {
                        stepSize: 0.5
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const point = reviewData[context.dataIndex];
                            return `${point.name}: ${point.y.toFixed(1)} estrelas, ${point.x} avaliações`;
                        }
                    }
                }
            }
        }
    });
}

// Atualizar gráficos
function updateCharts() {
    // Atualizar gráfico de ranking com lojas filtradas
    const sortedFilteredStores = [...filteredStores]
        .filter(store => store.rating > 0)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 10);
    
    rankingChart.data.labels = sortedFilteredStores.map(store => store.name);
    rankingChart.data.datasets[0].data = sortedFilteredStores.map(store => store.rating);
    rankingChart.data.datasets[0].backgroundColor = sortedFilteredStores.map(store => {
        const level = getRatingLevel(store.rating);
        return level === 'high' ? '#28a745' : 
               level === 'medium' ? '#ffc107' : '#dc3545';
    });
    rankingChart.update();
}

// Renderizar tabela de ranking
function renderRankingTable() {
    const tableBody = document.getElementById('rankingTableBody');
    tableBody.innerHTML = '';
    
    // Ordenar lojas por avaliação
    const sortedStores = [...filteredStores]
        .sort((a, b) => {
            // Primeiro por avaliação (maior para menor)
            if (b.rating !== a.rating) {
                return b.rating - a.rating;
            }
            // Depois por número de avaliações (maior para menor)
            return b.reviews - a.reviews;
        });
    
    sortedStores.forEach((store, index) => {
        const row = document.createElement('tr');
        const ratingLevel = getRatingLevel(store.rating);
        const ratingClass = `rating-${ratingLevel}`;
        
        row.innerHTML = `
            <td>${index + 1}</td>
            <td><strong>${store.name}</strong></td>
            <td><span class="badge ${ratingLevel}">${store.category}</span></td>
            <td class="${ratingClass}"><i class="fas fa-star"></i> ${store.rating > 0 ? store.rating.toFixed(1) : 'N/A'}</td>
            <td>${store.reviews}</td>
            <td><span class="status ${store.isOpen ? 'open' : 'closed'}">${store.isOpen ? 'Aberta' : 'Fechada'}</span></td>
            <td>
                ${store.rating >= 4.5 ? `
                    <button class="action-btn congrats" data-store="${store.name}" title="Parabenizar">
                        <i class="fas fa-trophy"></i>
                    </button>
                ` : ''}
                ${store.rating >= 3.5 && store.rating < 4.5 ? `
                    <button class="action-btn alert" data-store="${store.name}" title="Sugerir melhorias">
                        <i class="fas fa-exclamation-triangle"></i>
                    </button>
                ` : ''}
                ${store.rating < 3.5 ? `
                    <button class="action-btn report" data-store="${store.name}" title="Relatar problemas">
                        <i class="fas fa-flag"></i>
                    </button>
                ` : ''}
            </td>
        `;
        
        // Adicionar eventos aos botões
        const congratsBtn = row.querySelector('.action-btn.congrats');
        if (congratsBtn) {
            congratsBtn.addEventListener('click', function() {
                congratulateStore(this.dataset.store);
            });
        }
        
        const alertBtn = row.querySelector('.action-btn.alert');
        if (alertBtn) {
            alertBtn.addEventListener('click', function() {
                suggestImprovements(this.dataset.store);
            });
        }
        
        const reportBtn = row.querySelector('.action-btn.report');
        if (reportBtn) {
            reportBtn.addEventListener('click', function() {
                reportProblems(this.dataset.store);
            });
        }
        
        tableBody.appendChild(row);
    });
}

// Mostrar modal de parabéns
function showCongratsModal() {
    // Encontrar lojas com avaliação alta (≥ 4.5)
    const highRatedStores = storesData
        .filter(store => store.rating >= 4.5)
        .sort((a, b) => b.rating - a.rating);
    
    const modalBody = document.getElementById('congratsModalBody');
    
    if (highRatedStores.length === 0) {
        modalBody.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <i class="fas fa-trophy" style="font-size: 3rem; color: #ffc107; margin-bottom: 15px;"></i>
                <h3>Nenhuma loja com avaliação alta no momento</h3>
                <p>As lojas precisam alcançar avaliação igual ou superior a 4.5 para aparecer aqui.</p>
            </div>
        `;
    } else {
        let html = `
            <div class="congrats-list">
                <p style="margin-bottom: 15px;">As seguintes lojas estão com desempenho excelente e merecem nossos parabéns!</p>
        `;
        
        highRatedStores.forEach((store, index) => {
            const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '🏅';
            
            html += `
                <div class="congrats-item">
                    <h3>${medal} ${store.name} - ${store.rating.toFixed(1)} <i class="fas fa-star"></i></h3>
                    <p><strong>Categoria:</strong> ${store.category}</p>
                    <p><strong>Avaliações:</strong> ${store.reviews}</p>
                    <p><strong>Endereço:</strong> ${store.address}</p>
                    ${store.review ? `<p><strong>Último feedback:</strong> "${store.review}"</p>` : ''}
                </div>
            `;
        });
        
        html += `</div>`;
        modalBody.innerHTML = html;
    }
    
    document.getElementById('congratsModal').classList.add('active');
}

// Mostrar modal de alertas
function showAlertsModal() {
    // Encontrar lojas com avaliação média (3.5 - 4.4)
    const mediumRatedStores = storesData
        .filter(store => store.rating >= 3.5 && store.rating < 4.5)
        .sort((a, b) => a.rating - b.rating);
    
    // Encontrar lojas com avaliação baixa (< 3.5)
    const lowRatedStores = storesData
        .filter(store => store.rating < 3.5 && store.rating > 0)
        .sort((a, b) => a.rating - b.rating);
    
    const modalBody = document.getElementById('alertsModalBody');
    
    let html = '';
    
    if (mediumRatedStores.length === 0 && lowRatedStores.length === 0) {
        html = `
            <div style="text-align: center; padding: 20px;">
                <i class="fas fa-check-circle" style="font-size: 3rem; color: #28a745; margin-bottom: 15px;"></i>
                <h3>Todas as lojas estão com bom desempenho!</h3>
                <p>Nenhuma loja precisa de atenção especial no momento.</p>
            </div>
        `;
    } else {
        html = '<div class="alerts-list">';
        
        if (lowRatedStores.length > 0) {
            html += `
                <div style="margin-bottom: 20px;">
                    <h3 style="color: #dc3545; margin-bottom: 10px;">
                        <i class="fas fa-exclamation-circle"></i> Lojas que precisam de atenção urgente
                        <span class="badge low" style="margin-left: 10px;">${lowRatedStores.length} loja(s)</span>
                    </h3>
                    <p style="margin-bottom: 15px;">Estas lojas têm avaliação abaixo de 3.5 e precisam de melhorias imediatas:</p>
            `;
            
            lowRatedStores.forEach(store => {
                html += `
                    <div class="alert-item low">
                        <h3>${store.name} - ${store.rating.toFixed(1)} <i class="fas fa-star"></i></h3>
                        <p><strong>Categoria:</strong> ${store.category}</p>
                        <p><strong>Avaliações:</strong> ${store.reviews}</p>
                        <p><strong>Endereço:</strong> ${store.address}</p>
                        <div class="alert-suggestions">
                            <p><strong>Sugestões de melhoria:</strong></p>
                            <ul>
                                <li>Analisar feedback dos clientes para identificar pontos fracos</li>
                                <li>Melhorar a qualidade do atendimento ao cliente</li>
                                <li>Rever a qualidade dos produtos oferecidos</li>
                                <li>Considerar promoções para atrair novas avaliações positivas</li>
                            </ul>
                        </div>
                    </div>
                `;
            });
            
            html += `</div>`;
        }
        
        if (mediumRatedStores.length > 0) {
            html += `
                <div>
                    <h3 style="color: #ffc107; margin-bottom: 10px;">
                        <i class="fas fa-exclamation-triangle"></i> Lojas que podem melhorar
                        <span class="badge medium" style="margin-left: 10px;">${mediumRatedStores.length} loja(s)</span>
                    </h3>
                    <p style="margin-bottom: 15px;">Estas lojas têm avaliação entre 3.5 e 4.4 e têm potencial para alcançar a excelência:</p>
            `;
            
            mediumRatedStores.forEach(store => {
                html += `
                    <div class="alert-item">
                        <h3>${store.name} - ${store.rating.toFixed(1)} <i class="fas fa-star"></i></h3>
                        <p><strong>Categoria:</strong> ${store.category}</p>
                        <p><strong>Avaliações:</strong> ${store.reviews}</p>
                        <p><strong>Endereço:</strong> ${store.address}</p>
                        <div class="alert-suggestions">
                            <p><strong>Sugestões de melhoria:</strong></p>
                            <ul>
                                <li>Solicitar feedback ativo dos clientes satisfeitos</li>
                                <li>Melhorar pequenos detalhes no atendimento</li>
                                <li>Oferecer pequenas surpresas para clientes fiéis</li>
                                <li>Monitorar avaliações regularmente</li>
                            </ul>
                        </div>
                    </div>
                `;
            });
            
            html += `</div>`;
        }
        
        html += `</div>`;
    }
    
    modalBody.innerHTML = html;
    document.getElementById('alertsModal').classList.add('active');
}

// Função para parabenizar uma loja específica
function congratulateStore(storeName) {
    const store = storesData.find(s => s.name === storeName);
    if (!store) return;
    
    alert(`🎉 PARABÉNS ${store.name.toUpperCase()}! 🎉\n\nSua loja está com excelente desempenho:\n• Avaliação: ${store.rating.toFixed(1)} estrelas\n• ${store.reviews} avaliações\n\nContinue com o ótimo trabalho! Sua dedicação ao atendimento e qualidade dos produtos está fazendo a diferença!`);
}

// Função para sugerir melhorias
function suggestImprovements(storeName) {
    const store = storesData.find(s => s.name === storeName);
    if (!store) return;
    
    const suggestions = [
        "Considere implementar um programa de fidelidade para clientes",
        "Peça ativamente por avaliações aos clientes satisfeitos",
        "Analise os comentários para identificar pontos de melhoria",
        "Ofereça pequenas cortesias que fazem a diferença no atendimento",
        "Mantenha a comunicação clara sobre horários e serviços"
    ];
    
    alert(`📝 SUGESTÕES PARA ${store.name.toUpperCase()}:\n\nSua loja tem potencial para melhorar ainda mais (${store.rating.toFixed(1)} estrelas).\n\nAlgumas sugestões:\n${suggestions.map((s, i) => `${i+1}. ${s}`).join('\n')}\n\nPequenas melhorias podem elevar significativamente sua avaliação!`);
}

// Função para relatar problemas
function reportProblems(storeName) {
    const store = storesData.find(s => s.name === storeName);
    if (!store) return;
    
    alert(`⚠️ ATENÇÃO: ${store.name.toUpperCase()} PRECISA DE MELHORIAS URGENTES!\n\nAvaliação atual: ${store.rating.toFixed(1)} estrelas\n\nRecomendações urgentes:\n1. Analisar todas as avaliações negativas\n2. Implementar plano de ação imediato\n3. Treinamento da equipe de atendimento\n4. Revisão da qualidade dos produtos\n5. Monitoramento diário do desempenho\n\nA situação exige atenção imediata para evitar piora na reputação.`);
}

// Exportar dados
function exportData() {
    const dataStr = JSON.stringify(filteredStores, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `lojas-curvelo-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    alert(`Dados exportados com sucesso!\n\nTotal de lojas exportadas: ${filteredStores.length}`);
}

// Compartilhar parabéns
function shareCongrats() {
    const highRatedStores = storesData
        .filter(store => store.rating >= 4.5)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);
    
    if (highRatedStores.length === 0) {
        alert("Nenhuma loja com avaliação alta para compartilhar no momento.");
        return;
    }
    
    let shareText = `🏆 TOP LOJAS DE CURVELO 🏆\n\n`;
    
    highRatedStores.forEach((store, index) => {
        const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉';
        shareText += `${medal} ${store.name} - ${store.rating.toFixed(1)} ⭐ (${store.reviews} avaliações)\n`;
    });
    
    shareText += `\nConfira o dashboard completo em: [URL DO DASHBOARD]`;
    
    // Simular compartilhamento (em um caso real, isso usaria a Web Share API)
    if (navigator.share) {
        navigator.share({
            title: 'Top Lojas de Curvelo',
            text: shareText,
            url: window.location.href
        })
        .then(() => console.log('Compartilhado com sucesso!'))
        .catch(error => console.log('Erro ao compartilhar:', error));
    } else {
        // Fallback para copiar para a área de transferência
        navigator.clipboard.writeText(shareText)
            .then(() => alert('Texto copiado para a área de transferência! Cole nas suas redes sociais.'))
            .catch(err => {
                console.error('Erro ao copiar: ', err);
                prompt('Copie o texto abaixo:', shareText);
            });
    }
}