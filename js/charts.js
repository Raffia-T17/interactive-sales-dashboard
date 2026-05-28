window.initializeDashboard = function () {

    /* =========================
       MONTHLY SALES
    ========================= */

    const monthlySales = {};

    /* =========================
       CATEGORY SALES
    ========================= */

    const categorySales = {};

    /* =========================
       REGION SALES
    ========================= */

    const regionSales = {};

    /* =========================
       PRODUCT SALES
    ========================= */

    const productSales = {};

    salesData.forEach(item => {

        const sales = parseFloat(item["Sales"]) || 0;

        /* ===== MONTH ===== */

        const date = new Date(item["Order Date"]);

        const month = date.toLocaleString('default', {
            month: 'short'
        });

        if(monthlySales[month]){
            monthlySales[month] += sales;
        } else {
            monthlySales[month] = sales;
        }

        /* ===== CATEGORY ===== */

        const category = item["Category"];

        if(categorySales[category]){
            categorySales[category] += sales;
        } else {
            categorySales[category] = sales;
        }

        /* ===== REGION ===== */

        const region = item["Region"];

        if(regionSales[region]){
            regionSales[region] += sales;
        } else {
            regionSales[region] = sales;
        }

        /* ===== PRODUCTS ===== */

        const product = item["Sub-Category"];

        if(productSales[product]){
            productSales[product] += sales;
        } else {
            productSales[product] = sales;
        }

    });

    /* =========================
       SALES OVERVIEW CHART
    ========================= */

    new Chart(document.getElementById('salesChart'), {

        type: 'line',

        data: {

            labels: Object.keys(monthlySales),

            datasets: [{
                label: 'Monthly Sales',
                data: Object.values(monthlySales),

                borderColor: '#38bdf8',

                backgroundColor: 'rgba(56,189,248,0.2)',

                tension: 0.4,

                fill: true
            }]
        },

        options: {

            responsive: true,

            plugins: {
                legend: {
                    labels: {
                        color: 'white'
                    }
                }
            },

            scales: {

                x: {
                    ticks: {
                        color: 'white'
                    }
                },

                y: {
                    ticks: {
                        color: 'white'
                    }
                }

            }

        }

    });

    /* =========================
       REVENUE SOURCES
    ========================= */

    new Chart(document.getElementById('revenueChart'), {

        type: 'doughnut',

        data: {

            labels: Object.keys(categorySales),

            datasets: [{
                data: Object.values(categorySales),

                backgroundColor: [
                    '#38bdf8',
                    '#818cf8',
                    '#34d399'
                ]
            }]
        },

        options: {
            responsive: true,

            plugins: {
                legend: {
                    labels: {
                        color: 'white'
                    }
                }
            }
        }

    });

    /* =========================
       REGIONAL PERFORMANCE
    ========================= */

    new Chart(document.getElementById('regionChart'), {

        type: 'bar',

        data: {

            labels: Object.keys(regionSales),

            datasets: [{
                label: 'Regional Sales',

                data: Object.values(regionSales),

                backgroundColor: '#38bdf8'
            }]
        },

        options: {

            responsive: true,

            plugins: {
                legend: {
                    labels: {
                        color: 'white'
                    }
                }
            },

            scales: {

                x: {
                    ticks: {
                        color: 'white'
                    }
                },

                y: {
                    ticks: {
                        color: 'white'
                    }
                }

            }

        }

    });

    /* =========================
       TOP PRODUCTS
    ========================= */

    const sortedProducts = Object.entries(productSales)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

    new Chart(document.getElementById('productChart'), {

        type: 'pie',

        data: {

            labels: sortedProducts.map(item => item[0]),

            datasets: [{
                data: sortedProducts.map(item => item[1]),

                backgroundColor: [
                    '#38bdf8',
                    '#818cf8',
                    '#34d399',
                    '#fbbf24',
                    '#fb7185'
                ]
            }]
        },

        options: {
            responsive: true,

            plugins: {
                legend: {
                    labels: {
                        color: 'white'
                    }
                }
            }
        }

    });

}