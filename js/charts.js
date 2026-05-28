function initializeDashboard(){

    /* =========================
       TOTAL SALES BY MONTH
    ========================= */

    const monthlySales = {};

    salesData.forEach(item => {

        const date = new Date(item["Order Date"]);

        const month = date.toLocaleString('default', {
            month: 'short'
        });

        const sales = parseFloat(item["Sales"]) || 0;

        if(monthlySales[month]){
            monthlySales[month] += sales;
        }else{
            monthlySales[month] = sales;
        }

    });

    const salesLabels = Object.keys(monthlySales);

    const salesValues = Object.values(monthlySales);

    /* =========================
       SALES OVERVIEW CHART
    ========================= */

    const salesCtx = document.getElementById('salesChart');

    new Chart(salesCtx, {

        type: 'line',

        data: {

            labels: salesLabels,

            datasets: [{

                label: 'Monthly Sales',

                data: salesValues,

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

}