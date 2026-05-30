function populateFilters() {

    const regionFilter =
        document.getElementById("regionFilter");

    const categoryFilter =
        document.getElementById("categoryFilter");

    const regions =
        [...new Set(salesData.map(
            item => item.Region
        ))];

    const categories =
        [...new Set(salesData.map(
            item => item.Category
        ))];

    regions.forEach(region => {

        const option =
            document.createElement("option");

        option.value = region;
        option.textContent = region;

        regionFilter.appendChild(option);
    });

    categories.forEach(category => {

        const option =
            document.createElement("option");

        option.value = category;
        option.textContent = category;

        categoryFilter.appendChild(option);
    });

}