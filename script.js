// ===============================
// CONFIG
// ===============================
const API_URL = "https://localhost:7024/WeatherForecast";
let weatherData = [];

// ===============================
// LOAD WEATHER DATA
// ===============================
function loadWeather() {
    const loader = document.getElementById("loader");
    const tbody = document.getElementById("weatherBody");

    // Show loader
    loader.classList.remove("hidden");

    // Clear table
    tbody.innerHTML = "";

    fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        })
        .then(data => {
            weatherData = data;
            loader.classList.add("hidden");
            renderTable(weatherData);
        })
        .catch(error => {
            loader.classList.add("hidden");
            tbody.innerHTML = `
                <tr>
                    <td colspan="4" class="empty-state">
                        Failed to load data
                    </td>
                </tr>
            `;
            console.error("API Error:", error);
        });
}

// ===============================
// RENDER TABLE
// ===============================
function renderTable(data) {
    const tbody = document.getElementById("weatherBody");
    tbody.innerHTML = "";

    if (!data || data.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="4" class="empty-state">
                    No records found
                </td>
            </tr>
        `;
        return;
    }

    data.forEach(item => {
        const tempClass = getTempClass(item.temperatureC);

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.date}</td>
            <td class="${tempClass}">${item.temperatureC} °C</td>
            <td>${item.temperatureF} °F</td>
            <td>${item.summary}</td>
        `;

        tbody.appendChild(row);
    });
}

// ===============================
// TEMPERATURE COLOR LOGIC
// ===============================
function getTempClass(tempC) {
    if (tempC <= 5) return "cold";     // Blue
    if (tempC >= 30) return "hot";     // Red
    return "mild";                     // Green
}

// ===============================
// SEARCH / FILTER
// ===============================
function filterTable() {
    const searchValue = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const filteredData = weatherData.filter(item =>
        item.summary.toLowerCase().includes(searchValue)
    );

    renderTable(filteredData);
}
