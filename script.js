// Base de dados completa das lojas de Curvelo
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
        lastEvaluation: "2023-10-15",
        monthlyGrowth: 15
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
        lastEvaluation: "2023-11-20",
        monthlyGrowth: 8
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
        lastEvaluation: "2023-10-28",
        monthlyGrowth: 12
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
        lastEvaluation: "2023-11-15",
        monthlyGrowth: 20
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
        lastEvaluation: "2023-09-30",
        monthlyGrowth: 5
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
        lastEvaluation: "2023-12-05",
        monthlyGrowth: 25
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
        lastEvaluation: "2023-10-10",
        monthlyGrowth: 3
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
        lastEvaluation: "2023-09-15",
        monthlyGrowth: 7
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
        lastEvaluation: "2023-11-25",
        monthlyGrowth: 30
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
        lastEvaluation: "2023-08-20",
        monthlyGrowth: 2
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
        lastEvaluation: "2023-10-05",
        monthlyGrowth: 4
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
        lastEvaluation: "2023-11-10",
        monthlyGrowth: 18
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
        lastEvaluation: "2023-09-05",
        monthlyGrowth: 1
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
        lastEvaluation: "2023-08-15",
        monthlyGrowth: 10
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
        lastEvaluation: "2023-10-20",
        monthlyGrowth: 6
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
        lastEvaluation: "2023-07-30",
        monthlyGrowth: 15
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
        lastEvaluation: "2023-12-10",
        monthlyGrowth: 22
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
        lastEvaluation: "2023-11-05",
        monthlyGrowth: 9
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
        lastEvaluation: "2023-12-01",
        monthlyGrowth: 17
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
        lastEvaluation: null,
        monthlyGrowth: 0
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

// Estado da interação
let activeInteraction = {
    type: null, // 'category', 'rating', 'store', 'performance'
    value: null,
    element: null
};

// Gráficos
let rankingChart, categoryChart, performanceChart, timelineChart;

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
    setupEventListeners();
});

// Configurar todos os event listeners
function setupEventListeners() {
    // Filtros
    document.getElementById('ratingSlider').addEventListener('input', function() {
        document.getElementById('ratingValue').textContent = this.value;
        minRating = parseFloat(this.value);
        filterStores();
    });
    
    document.getElementById('openNowFilter').addEventListener('change', function() {
        onlyOpen = this.checked;
        filterStores();
    });
    
    // Filtros de nível
    document.querySelectorAll('input[name="level"]').forEach(radio => {
        radio.addEventListener('change', function() {
            selectedLevel = this.value;
            filterStores();
        });
    });
    
    // Botões de controle
    document.getElementById('resetFilters').addEventListener('click', resetFilters);
    document.getElementById('resetAll').addEventListener('click', resetAllInteractions);
    document.getElementById('clearFilter').addEventListener('click', clearActiveFilter);
    document.getElementById('toggleMap').addEventListener('click', toggleMap);
    document.getElementById('toggleCharts').addEventListener('click', toggleCharts);
    document.getElementById('showCongrats').addEventListener('click', showCongratsModal);
    document.getElementById('showAlerts').addEventListener('click', showAlertsModal);
    document.getElementById('highlightFiltered').addEventListener('click', highlightFilteredOnMap);
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
}

// Inicializar os filtros de categoria
function initFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const categories = [...new Set(storesData.map(store => store.category))];
    
    categories.forEach(category => {
        const count = storesData.filter(store => store.category === category).length;
        
        const li = document.createElement('li');
        li.innerHTML = `
            <label class="category-label">
                <input type="checkbox" value="${category}" checked>
                <span>${category}</span>
                <span class="category-count">${count}</span>
            </label>
        `;
        
        const checkbox = li.querySelector('input');
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                selectedCategories.push(this.value);
            } else {
                selectedCategories = selectedCategories.filter(cat => cat !== this.value);
            }
            
            // Se esta é a única categoria selecionada, torna-a interação ativa
            if (selectedCategories.length === 1 && selectedCategories.includes(this.value)) {
                setActiveInteraction('category', this.value, this);
            } else {
                clearActiveInteractionIfType('category');
            }
            
            filterStores();
        });
        
        // Adicionar evento de clique na label também
        li.querySelector('.category-label').addEventListener('click', function(e) {
            if (e.target.tagName !== 'INPUT') {
                // Se for double click, seleciona apenas esta categoria
                if (e.detail === 2) {
                    selectedCategories = [category];
                    document.querySelectorAll('#categoryFilter input').forEach(cb => {
                        cb.checked = cb.value === category;
                    });
                    setActiveInteraction('category', category, this);
                    filterStores();
                }
            }
        });
        
        categoryFilter.appendChild(li);
        selectedCategories.push(category);
    });
}

// Inicializar gráficos
function initCharts() {
    initRankingChart();
    initCategoryChart();
    initPerformanceChart();
    initTimelineChart();
}

// Gráfico de ranking (interativo)
function initRankingChart() {
    const ctx = document.getElementById('rankingChart').getContext('2d');
    
    // Ordenar lojas por avaliação
    const sortedStores = [...storesData]
        .filter(store => store.rating > 0)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 10);
    
    rankingChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sortedStores.map(store => store.name.substring(0, 15) + (store.name.length > 15 ? '...' : '')),
            datasets: [{
                label: 'Avaliação',
                data: sortedStores.map(store => store.rating),
                backgroundColor: sortedStores.map(store => categoryColors[store.category] || '#6c757d'),
                borderColor: sortedStores.map(store => darkenColor(categoryColors[store.category] || '#6c757d', 20)),
                borderWidth: 1,
                borderRadius: 5,
                hoverBackgroundColor: sortedStores.map(store => lightenColor(categoryColors[store.category] || '#6c757d', 20))
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            onClick: (evt, elements) => {
                if (elements.length > 0) {
                    const index = elements[0].index;
                    const store = sortedStores[index];
                    highlightStore(store.name);
                }
            },
            onHover: (evt, elements) => {
                evt.native.target.style.cursor = elements.length > 0 ? 'pointer' : 'default';
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 5,
                    ticks: {
                        stepSize: 0.5
                    },
                    title: {
                        display: true,
                        text: 'Avaliação',
                        font: {
                            weight: 'bold'
                        }
                    },
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                },
                x: {
                    ticks: {
                        maxRotation: 45
                    },
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: '#3949ab',
                    borderWidth: 1,
                    cornerRadius: 8,
                    callbacks: {
                        label: function(context) {
                            const store = sortedStores[context.dataIndex];
                            return [
                                `Avaliação: ${store.rating.toFixed(1)}`,
                                `Reviews: ${store.reviews}`,
                                `Categoria: ${store.category}`
                            ];
                        }
                    }
                },
                datalabels: {
                    display: true,
                    color: 'white',
                    font: {
                        weight: 'bold'
                    },
                    formatter: function(value) {
                        return value.toFixed(1);
                    }
                }
            }
        },
        plugins: [ChartDataLabels]
    });
}

// Gráfico de categorias (interativo)
function initCategoryChart() {
    const ctx = document.getElementById('categoryChart').getContext('2d');
    
    // Contar lojas por categoria
    const categoryCounts = {};
    storesData.forEach(store => {
        categoryCounts[store.category] = (categoryCounts[store.category] || 0) + 1;
    });
    
    const categories = Object.keys(categoryCounts);
    const counts = Object.values(categoryCounts);
    const backgroundColors = categories.map(cat => categoryColors[cat] || '#6c757d');
    
    categoryChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: categories,
            datasets: [{
                data: counts,
                backgroundColor: backgroundColors,
                borderColor: backgroundColors.map(color => darkenColor(color, 20)),
                borderWidth: 2,
                hoverBackgroundColor: backgroundColors.map(color => lightenColor(color, 20))
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            onClick: (evt, elements) => {
                if (elements.length > 0) {
                    const index = elements[0].index;
                    const category = categories[index];
                    
                    // Alternar seleção da categoria
                    if (activeInteraction.type === 'category' && activeInteraction.value === category) {
                        clearActiveInteraction();
                        selectedCategories = [...categories];
                        document.querySelectorAll('#categoryFilter input').forEach(cb => {
                            cb.checked = true;
                        });
                    } else {
                        setActiveInteraction('category', category, elements[0]);
                        selectedCategories = [category];
                        document.querySelectorAll('#categoryFilter input').forEach(cb => {
                            cb.checked = cb.value === category;
                        });
                    }
                    
                    filterStores();
                }
            },
            onHover: (evt, elements) => {
                evt.native.target.style.cursor = elements.length > 0 ? 'pointer' : 'default';
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        usePointStyle: true,
                        pointStyle: 'circle',
                        font: {
                            size: 11
                        }
                    },
                    onClick: (e, legendItem, legend) => {
                        const index = legendItem.index;
                        const category = categories[index];
                        
                        // Alternar seleção da categoria
                        if (activeInteraction.type === 'category' && activeInteraction.value === category) {
                            clearActiveInteraction();
                            selectedCategories = [...categories];
                            document.querySelectorAll('#categoryFilter input').forEach(cb => {
                                cb.checked = true;
                            });
                        } else {
                            setActiveInteraction('category', category, null);
                            selectedCategories = [category];
                            document.querySelectorAll('#categoryFilter input').forEach(cb => {
                                cb.checked = cb.value === category;
                            });
                        }
                        
                        filterStores();
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
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
}

// Gráfico de desempenho (scatter plot interativo)
function initPerformanceChart() {
    const ctx = document.getElementById('performanceChart').getContext('2d');
    
    // Preparar dados
    const performanceData = storesData.map(store => ({
        x: store.reviews,
        y: store.rating,
        name: store.name,
        category: store.category,
        radius: Math.min(store.reviews / 5, 15)
    }));
    
    performanceChart = new Chart(ctx, {
        type: 'bubble',
        data: {
            datasets: [{
                label: 'Lojas',
                data: performanceData.map(item => ({
                    x: item.x,
                    y: item.y,
                    r: item.radius,
                    name: item.name,
                    category: item.category
                })),
                backgroundColor: performanceData.map(item => 
                    hexToRgba(categoryColors[item.category] || '#6c757d', 0.7)
                ),
                borderColor: performanceData.map(item => 
                    darkenColor(categoryColors[item.category] || '#6c757d', 20)
                ),
                borderWidth: 1,
                hoverBackgroundColor: performanceData.map(item => 
                    hexToRgba(categoryColors[item.category] || '#6c757d', 0.9)
                )
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            onClick: (evt, elements) => {
                if (elements.length > 0) {
                    const index = elements[0].index;
                    const store = storesData.find(s => s.name === performanceData[index].name);
                    if (store) {
                        showStoreDetails(store);
                    }
                }
            },
            onHover: (evt, elements) => {
                evt.native.target.style.cursor = elements.length > 0 ? 'pointer' : 'default';
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Número de Avaliações',
                        font: {
                            weight: 'bold'
                        }
                    },
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Avaliação (0-5)',
                        font: {
                            weight: 'bold'
                        }
                    },
                    beginAtZero: true,
                    max: 5,
                    ticks: {
                        stepSize: 0.5
                    },
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                }
            },
            plugins: {
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    callbacks: {
                        label: function(context) {
                            const point = performanceData[context.dataIndex];
                            return [
                                point.name,
                                `Avaliação: ${point.y.toFixed(1)}`,
                                `Reviews: ${point.x}`,
                                `Categoria: ${point.category}`
                            ];
                        }
                    }
                }
            }
        }
    });
}

// Gráfico de linha temporal
function initTimelineChart() {
    const ctx = document.getElementById('timelineChart').getContext('2d');
    
    // Simular dados temporais (últimos 6 meses)
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'];
    const categories = [...new Set(storesData.map(store => store.category))];
    
    // Gerar dados fictícios para o gráfico de linha
    const datasets = categories.map(category => {
        const color = categoryColors[category] || '#6c757d';
        return {
            label: category,
            data: months.map(() => 4 + Math.random()), // Avaliação média entre 4 e 5
            borderColor: color,
            backgroundColor: hexToRgba(color, 0.1),
            tension: 0.3,
            fill: true,
            pointBackgroundColor: color,
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 6
        };
    });
    
    timelineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            onClick: (evt, elements) => {
                if (elements.length > 0) {
                    const datasetIndex = elements[0].datasetIndex;
                    const category = categories[datasetIndex];
                    
                    // Filtrar por categoria
                    setActiveInteraction('category', category, null);
                    selectedCategories = [category];
                    document.querySelectorAll('#categoryFilter input').forEach(cb => {
                        cb.checked = cb.value === category;
                    });
                    filterStores();
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 3.5,
                    max: 5,
                    title: {
                        display: true,
                        text: 'Avaliação Média',
                        font: {
                            weight: 'bold'
                        }
                    },
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                }
            },
            plugins: {
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#fff',
                    bodyColor: '#fff'
                }
            }
        }
    });
}

// Funções de interação
function setActiveInteraction(type, value, element) {
    activeInteraction = { type, value, element };
    updateActiveFilterDisplay();
    highlightActiveElements();
}

function clearActiveInteraction() {
    activeInteraction = { type: null, value: null, element: null };
    updateActiveFilterDisplay();
    removeHighlights();
}

function clearActiveInteractionIfType(type) {
    if (activeInteraction.type === type) {
        clearActiveInteraction();
    }
}

function updateActiveFilterDisplay() {
    const filterDisplay = document.getElementById('currentFilter');
    const activeCategoryDisplay = document.getElementById('activeCategory');
    
    if (activeInteraction.type && activeInteraction.value) {
        let filterText = '';
        switch(activeInteraction.type) {
            case 'category':
                filterText = `Categoria: ${activeInteraction.value}`;
                activeCategoryDisplay.textContent = activeInteraction.value;
                break;
            case 'store':
                filterText = `Loja: ${activeInteraction.value}`;
                activeCategoryDisplay.textContent = 'Loja Selecionada';
                break;
            case 'rating':
                filterText = `Avaliação: ${activeInteraction.value}+`;
                break;
            default:
                filterText = `Filtro Ativo: ${activeInteraction.value}`;
        }
        filterDisplay.textContent = filterText;
    } else {
        filterDisplay.textContent = 'Filtro Ativo: Nenhum';
        activeCategoryDisplay.textContent = 'Todas';
    }
}

function highlightActiveElements() {
    // Remover destaques anteriores
    removeHighlights();
    
    if (!activeInteraction.type || !activeInteraction.value) return;
    
    switch(activeInteraction.type) {
        case 'category':
            highlightCategory(activeInteraction.value);
            break;
        case 'store':
            highlightStore(activeInteraction.value);
            break;
    }
}

function removeHighlights() {
    // Remover classes de destaque
    document.querySelectorAll('.selected, .highlighted').forEach(el => {
        el.classList.remove('selected', 'highlighted');
    });
    
    // Resetar estilos dos gráficos
    if (categoryChart) {
        categoryChart.data.datasets.forEach(dataset => {
            if (dataset.originalBackgroundColor) {
                dataset.backgroundColor = dataset.originalBackgroundColor;
            }
        });
        categoryChart.update('none');
    }
}

function highlightCategory(category) {
    // Destacar no gráfico de pizza
    if (categoryChart) {
        const categoryIndex = categoryChart.data.labels.indexOf(category);
        if (categoryIndex !== -1) {
            // Salvar cores originais
            if (!categoryChart.data.datasets[0].originalBackgroundColor) {
                categoryChart.data.datasets[0].originalBackgroundColor = 
                    [...categoryChart.data.datasets[0].backgroundColor];
            }
            
            // Aplicar transparência às outras categorias
            const newColors = categoryChart.data.datasets[0].originalBackgroundColor.map((color, index) => {
                return index === categoryIndex ? color : hexToRgba(color, 0.3);
            });
            
            categoryChart.data.datasets[0].backgroundColor = newColors;
            categoryChart.update('none');
        }
    }
    
    // Destacar na tabela
    document.querySelectorAll('#rankingTableBody tr').forEach(row => {
        const categoryCell = row.cells[2];
        if (categoryCell.textContent.includes(category)) {
            row.classList.add('highlighted');
        }
    });
    
    // Destacar nos cards
    document.querySelectorAll('.card').forEach(card => {
        const categoryElement = card.querySelector('.category');
        if (categoryElement && categoryElement.textContent === category) {
            card.classList.add('highlighted');
        }
    });
}

function highlightStore(storeName) {
    const store = storesData.find(s => s.name === storeName);
    if (!store) return;
    
    setActiveInteraction('store', storeName, null);
    
    // Destacar na tabela
    document.querySelectorAll('#rankingTableBody tr').forEach(row => {
        const nameCell = row.cells[1];
        if (nameCell.textContent.includes(storeName)) {
            row.classList.add('selected');
            row.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
    
    // Destacar nos cards
    document.querySelectorAll('.card').forEach(card => {
        const titleElement = card.querySelector('.card-title h3');
        if (titleElement && titleElement.textContent === storeName) {
            card.classList.add('selected');
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
    
    // Destacar no mapa
    highlightStoreOnMap(storeName);
    
    // Atualizar informações dos gráficos
    updateChartInfo(store);
}

function highlightStoreOnMap(storeName) {
    markers.forEach(marker => {
        const popupContent = marker.getPopup().getContent();
        if (popupContent && popupContent.includes(storeName)) {
            // Animar o marcador
            marker.setZIndexOffset(1000);
            marker.openPopup();
            
            // Adicionar classe de destaque
            marker.setIcon(L.divIcon({
                html: `<div style="background-color: #FFD700; width: 25px; height: 25px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 10px rgba(255,215,0,0.8); animation: pulse 1s infinite;"></div>`,
                className: 'store-marker-highlighted',
                iconSize: [31, 31],
                iconAnchor: [15.5, 15.5]
            }));
            
            // Centralizar mapa no marcador
            map.setView(marker.getLatLng(), 16, {
                animate: true,
                duration: 1
            });
            
            // Restaurar após 5 segundos
            setTimeout(() => {
                const store = storesData.find(s => s.name === storeName);
                if (store) {
                    const originalColor = categoryColors[store.category] || '#3949ab';
                    marker.setIcon(L.divIcon({
                        html: `<div style="background-color: ${originalColor}; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.2);"></div>`,
                        className: 'store-marker',
                        iconSize: [24, 24],
                        iconAnchor: [12, 12]
                    }));
                }
            }, 5000);
        }
    });
}

function highlightFilteredOnMap() {
    // Destacar todos os marcadores filtrados
    markers.forEach(marker => {
        const popupContent = marker.getPopup().getContent();
        const storeName = popupContent ? popupContent.match(/<div[^>]*>([^<]+)</)?.[1] : null;
        
        if (storeName && filteredStores.some(store => store.name === storeName.trim())) {
            marker.setZIndexOffset(500);
            marker.openPopup();
        } else {
            marker.setZIndexOffset(0);
            marker.closePopup();
        }
    });
}

function updateChartInfo(store) {
    document.getElementById('rankingInfo').innerHTML = `
        <strong>${store.name}</strong><br>
        Avaliação: ${store.rating.toFixed(1)} | Reviews: ${store.reviews} | Categoria: ${store.category}
    `;
    
    document.getElementById('categoryInfo').innerHTML = `
        Loja selecionada: <strong>${store.name}</strong><br>
        Pertence à categoria: ${store.category}
    `;
    
    document.getElementById('performanceInfo').innerHTML = `
        <strong>${store.name}</strong><br>
        Posição no gráfico: ${store.reviews} reviews × ${store.rating.toFixed(1)} avaliação
    `;
    
    document.getElementById('tableInfo').innerHTML = `
        Loja selecionada: <strong>${store.name}</strong> | 
        Clique duas vezes em uma linha para ver detalhes
    `;
    
    document.getElementById('mapInfo').innerHTML = `
        Loja selecionada: <strong>${store.name}</strong> | 
        Marcador destacado no mapa
    `;
}

// Funções auxiliares para cores
function lightenColor(color, percent) {
    const num = parseInt(color.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return `#${(
        0x1000000 +
        (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
        (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
        (B < 255 ? (B < 1 ? 0 : B) : 255)
    )
        .toString(16)
        .slice(1)}`;
}

function darkenColor(color, percent) {
    const num = parseInt(color.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) - amt;
    const G = (num >> 8 & 0x00FF) - amt;
    const B = (num & 0x0000FF) - amt;
    return `#${(
        0x1000000 +
        (R > 0 ? (R > 255 ? 255 : R) : 0) * 0x10000 +
        (G > 0 ? (G > 255 ? 255 : G) : 0) * 0x100 +
        (B > 0 ? (B > 255 ? 255 : B) : 0)
    )
        .toString(16)
        .slice(1)}`;
}

function hexToRgba(hex, alpha) {
    if (!hex) return `rgba(108, 117, 125, ${alpha})`;
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Funções principais
function renderStores() {
    const cardsContainer = document.getElementById('cardsContainer');
    const noResults = document.getElementById('noResults');
    
    cardsContainer.innerHTML = '';
    
    if (filteredStores.length === 0) {
        noResults.style.display = 'block';
        document.getElementById('resultCount').textContent = '0';
        document.getElementById('filteredShops').textContent = '0';
        return;
    }
    
    noResults.style.display = 'none';
    document.getElementById('resultCount').textContent = filteredStores.length;
    document.getElementById('totalCount').textContent = storesData.length;
    document.getElementById('filteredShops').textContent = filteredStores.length;
    
    filteredStores.forEach(store => {
        const card = createStoreCard(store);
        cardsContainer.appendChild(card);
    });
    
    // Adicionar eventos de clique aos cards
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function() {
            const storeName = this.querySelector('.card-title h3').textContent;
            highlightStore(storeName);
        });
        
        card.addEventListener('dblclick', function() {
            const storeName = this.querySelector('.card-title h3').textContent;
            const store = storesData.find(s => s.name === storeName);
            if (store) {
                showStoreDetails(store);
            }
        });
    });
}

function createStoreCard(store) {
    const card = document.createElement('div');
    card.className = 'card interactive';
    
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
    
    // Formatando a data da última avaliação
    const lastEvalDate = store.lastEvaluation ? 
        new Date(store.lastEvaluation).toLocaleDateString('pt-BR') : 'N/A';
    
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
                <small>Última avaliação: ${lastEvalDate}</small>
            </div>
            <div class="card-actions">
                ${store.rating >= 4.5 ? `
                    <button class="card-btn congrats" data-store="${store.name}">
                        <i class="fas fa-trophy"></i> Parabenizar
                    </button>
                ` : ''}
                ${store.rating >= 3.5 && store.rating < 4.5 ? `
                    <button class="card-btn alert" data-store="${store.name}">
                        <i class="fas fa-exclamation-triangle"></i> Sugerir
                    </button>
                ` : ''}
            </div>
        </div>
    `;
    
    // Adicionar eventos aos botões
    const congratsBtn = card.querySelector('.card-btn.congrats');
    if (congratsBtn) {
        congratsBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            congratulateStore(this.dataset.store);
        });
    }
    
    const alertBtn = card.querySelector('.card-btn.alert');
    if (alertBtn) {
        alertBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            suggestImprovements(this.dataset.store);
        });
    }
    
    return card;
}

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
    updateChartInfoDisplays();
}

function getRatingLevel(rating) {
    if (rating >= 4.5) return 'high';
    if (rating >= 3.5) return 'medium';
    return 'low';
}

function updateStats() {
    const totalShops = storesData.length;
    const filteredShops = filteredStores.length;
    const avgRating = (storesData.reduce((sum, store) => sum + store.rating, 0) / storesData.length).toFixed(1);
    
    // Encontrar a loja com maior avaliação
    const topStore = storesData.reduce((prev, current) => {
        return (prev.rating > current.rating) ? prev : current;
    });
    
    document.getElementById('totalShops').textContent = totalShops;
    document.getElementById('filteredShops').textContent = filteredShops;
    document.getElementById('avgRating').textContent = avgRating;
}

function updateCharts() {
    // Atualizar gráfico de ranking com lojas filtradas
    if (rankingChart) {
        const sortedFilteredStores = [...filteredStores]
            .filter(store => store.rating > 0)
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 10);
        
        rankingChart.data.labels = sortedFilteredStores.map(store => 
            store.name.substring(0, 15) + (store.name.length > 15 ? '...' : '')
        );
        rankingChart.data.datasets[0].data = sortedFilteredStores.map(store => store.rating);
        rankingChart.data.datasets[0].backgroundColor = sortedFilteredStores.map(store => 
            categoryColors[store.category] || '#6c757d'
        );
        rankingChart.update();
    }
    
    // Atualizar informações dos gráficos
    updateChartInfoDisplays();
}

function updateChartInfoDisplays() {
    const categoryCounts = {};
    filteredStores.forEach(store => {
        categoryCounts[store.category] = (categoryCounts[store.category] || 0) + 1;
    });
    
    const categoryList = Object.entries(categoryCounts)
        .map(([cat, count]) => `${cat}: ${count}`)
        .join(', ');
    
    document.getElementById('categoryInfo').textContent = 
        `Lojas filtradas por categoria: ${categoryList || 'Nenhuma'}`;
    
    document.getElementById('performanceInfo').textContent = 
        `${filteredStores.length} lojas mostradas no gráfico`;
    
    document.getElementById('tableInfo').textContent = 
        `${filteredStores.length} lojas no ranking | Clique em uma linha para selecionar`;
}

function renderRankingTable() {
    const tableBody = document.getElementById('rankingTableBody');
    tableBody.innerHTML = '';
    
    // Ordenar lojas por avaliação
    const sortedStores = [...filteredStores]
        .sort((a, b) => {
            if (b.rating !== a.rating) {
                return b.rating - a.rating;
            }
            return b.reviews - a.reviews;
        });
    
    sortedStores.forEach((store, index) => {
        const row = document.createElement('tr');
        row.className = 'interactive';
        const ratingLevel = getRatingLevel(store.rating);
        
        row.innerHTML = `
            <td>${index + 1}</td>
            <td><strong>${store.name}</strong></td>
            <td><span class="badge ${ratingLevel}">${store.category}</span></td>
            <td class="rating-${ratingLevel}"><i class="fas fa-star"></i> ${store.rating > 0 ? store.rating.toFixed(1) : 'N/A'}</td>
            <td>${store.reviews}</td>
            <td><span class="status ${store.isOpen ? 'open' : 'closed'}">${store.isOpen ? 'Aberta' : 'Fechada'}</span></td>
            <td>${store.lastEvaluation ? new Date(store.lastEvaluation).toLocaleDateString('pt-BR') : 'N/A'}</td>
        `;
        
        // Adicionar evento de clique
        row.addEventListener('click', function() {
            highlightStore(store.name);
        });
        
        // Adicionar evento de double click para mostrar detalhes
        row.addEventListener('dblclick', function() {
            showStoreDetails(store);
        });
        
        tableBody.appendChild(row);
    });
}

function showStoreDetails(store) {
    const modalBody = document.getElementById('detailsModalBody');
    
    modalBody.innerHTML = `
        <div class="store-details">
            <div class="detail-section">
                <h3><i class="fas fa-store"></i> Informações da Loja</h3>
                <div class="detail-grid">
                    <div class="detail-item">
                        <span class="detail-label">Nome</span>
                        <span class="detail-value">${store.name}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Categoria</span>
                        <span class="detail-value badge ${getRatingLevel(store.rating)}">${store.category}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Avaliação</span>
                        <span class="detail-value rating-${getRatingLevel(store.rating)}">
                            <i class="fas fa-star"></i> ${store.rating.toFixed(1)} (${store.reviews} reviews)
                        </span>
                    </div>
                </div>
            </div>
            
            <div class="detail-section">
                <h3><i class="fas fa-map-marker-alt"></i> Localização</h3>
                <div class="detail-grid">
                    <div class="detail-item">
                        <span class="detail-label">Endereço</span>
                        <span class="detail-value">${store.address}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Telefone</span>
                        <span class="detail-value">${store.phone}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Horário</span>
                        <span class="detail-value">${store.hours}</span>
                    </div>
                </div>
            </div>
            
            ${store.review ? `
            <div class="detail-section">
                <h3><i class="fas fa-comment"></i> Último Review</h3>
                <p style="font-style: italic; padding: 10px; background-color: #f8f9fa; border-radius: 5px;">
                    "${store.review}"
                </p>
            </div>
            ` : ''}
            
            <div class="detail-section">
                <h3><i class="fas fa-chart-line"></i> Desempenho</h3>
                <div class="detail-grid">
                    <div class="detail-item">
                        <span class="detail-label">Nível</span>
                        <span class="detail-value badge ${getRatingLevel(store.rating)}">
                            ${getRatingLevel(store.rating) === 'high' ? 'Alto' : 
                              getRatingLevel(store.rating) === 'medium' ? 'Médio' : 'Baixo'}
                        </span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Última Avaliação</span>
                        <span class="detail-value">${store.lastEvaluation ? new Date(store.lastEvaluation).toLocaleDateString('pt-BR') : 'N/A'}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Status</span>
                        <span class="detail-value status ${store.isOpen ? 'open' : 'closed'}">
                            ${store.isOpen ? '🟢 Aberta' : '🔴 Fechada'}
                        </span>
                    </div>
                </div>
            </div>
            
            <div class="detail-section">
                <h3><i class="fas fa-trend-up"></i> Estatísticas</h3>
                <div class="detail-grid">
                    <div class="detail-item">
                        <span class="detail-label">Crescimento Mensal</span>
                        <span class="detail-value">${store.monthlyGrowth}%</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Serviços</span>
                        <span class="detail-value">${store.services.join(', ')}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Posição no Ranking</span>
                        <span class="detail-value">#${storesData.sort((a,b) => b.rating - a.rating).findIndex(s => s.name === store.name) + 1}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('detailsModal').classList.add('active');
}

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
                    <p><strong>Crescimento:</strong> ${store.monthlyGrowth}% ao mês</p>
                    ${store.review ? `<p><strong>Último feedback:</strong> "${store.review}"</p>` : ''}
                </div>
            `;
        });
        
        html += `</div>`;
        modalBody.innerHTML = html;
    }
    
    document.getElementById('congratsModal').classList.add('active');
}

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

function congratulateStore(storeName) {
    const store = storesData.find(s => s.name === storeName);
    if (!store) return;
    
    alert(`🎉 PARABÉNS ${store.name.toUpperCase()}! 🎉\n\nSua loja está com excelente desempenho:\n• Avaliação: ${store.rating.toFixed(1)} estrelas\n• ${store.reviews} avaliações\n• Crescimento: ${store.monthlyGrowth}% ao mês\n\nContinue com o ótimo trabalho! Sua dedicação ao atendimento e qualidade dos produtos está fazendo a diferença!`);
}

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
    
    shareText += `\nConfira o dashboard completo em: ${window.location.href}`;
    
    // Simular compartilhamento
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

function resetAllInteractions() {
    clearActiveInteraction();
    resetFilters();
    removeHighlights();
    
    // Resetar mapa para visão inicial
    if (map) {
        const curveloCoords = [-18.7566, -44.4309];
        map.setView(curveloCoords, 14, { animate: true });
    }
    
    // Resetar informações dos gráficos
    updateChartInfoDisplays();
}

function clearActiveFilter() {
    clearActiveInteraction();
    filterStores();
}

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
    
    clearActiveInteraction();
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
    
    // Adicionar marcadores para todas as lojas
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
            const markerColor = categoryColors[store.category] || '#3949ab';
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
                    <div style="font-weight: bold; margin-bottom: 5px; font-size: 1.1rem;">${store.name}</div>
                    <div style="margin-bottom: 5px;"><strong>Categoria:</strong> ${store.category}</div>
                    <div style="margin-bottom: 5px;"><strong>Avaliação:</strong> ⭐ ${store.rating > 0 ? store.rating.toFixed(1) : 'Sem avaliações'} (${store.reviews} avaliações)</div>
                    <div style="margin-bottom: 5px;"><strong>Endereço:</strong> ${store.address}</div>
                    <div style="margin-bottom: 5px;"><strong>Telefone:</strong> ${store.phone}</div>
                    <div style="color: ${store.isOpen ? 'green' : 'red'}; font-weight: bold; margin-bottom: 5px;">
                        ${store.isOpen ? '🟢 Aberta' : '🔴 Fechada'}
                    </div>
                    <div style="font-size: 0.9rem; color: #666;">
                        Clique no marcador para mais informações
                    </div>
                `);
            
            // Adicionar evento de clique no marcador
            marker.on('click', function() {
                highlightStore(store.name);
            });
            
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
        chartWrappers[3].classList.add('full-width');
    } else {
        chartsContainer.style.gridTemplateColumns = '1fr';
        chartWrappers[2].classList.remove('full-width');
        chartWrappers[3].classList.remove('full-width');
    }
}

// Função de exportação de dados
function exportData() {
    const dataStr = JSON.stringify(filteredStores, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `lojas-curvelo-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    alert(`Dados exportados com sucesso!\n\nTotal de lojas exportadas: ${filteredStores.length}\n\nArquivo: ${exportFileDefaultName}`);
}