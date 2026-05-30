let salesData = [];

/* =========================
   LOAD CSV DATA
========================= */

Papa.parse("data/sales.csv", {

    download: true,

    header: true,

    skipEmptyLines: true,

    complete: function(results){

        salesData = results.data;

        console.log("Sales Data Loaded:", salesData);

       populateFilters();
       initializeDashboard();
    }

});