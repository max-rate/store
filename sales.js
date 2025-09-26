// sales.js

let sales = JSON.parse(localStorage.getItem("sales")) || [];

// Function to display sales
function displaySales() {
    const salesBody = document.getElementById("sales-body");
    salesBody.innerHTML = "";

    sales.forEach((sale) => {
        const saleHTML = `
            <tr>
                <td>${sale.date}</td>
                <td>${sale.product}</td>
                <td>${sale.quantity}</td>
                <td>$${sale.price}</td>
                <td>$${sale.total}</td>
            </tr>
        `;
        salesBody.insertAdjacentHTML("beforeend", saleHTML);
    });
}

// Function to download sales records
function downloadSales() {
    const salesData = JSON.stringify(sales);
    const blob = new Blob([salesData], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "sales-records.json";
    link.click();
}

// Add event listener to download button
document.getElementById("download-btn").addEventListener("click", downloadSales);

// Initialize sales display
displaySales();