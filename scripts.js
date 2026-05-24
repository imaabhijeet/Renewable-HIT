// Simulate real-time energy data
document.addEventListener('DOMContentLoaded', () => {

    // Example energy usage and production data
    const energyUsage = 1200;
    const energyProduction = 1500;

    // Display data on dashboard
    document.getElementById('energyUsage').textContent = `${energyUsage} kWh`;
    document.getElementById('energyProduction').textContent = `${energyProduction} kWh`;

    // Carbon Footprint Calculator
    const carbonForm = document.getElementById('carbonForm');

    carbonForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const electricity = document.getElementById('electricity').value;
        const fuel = document.getElementById('fuel').value;

        // Simple carbon calculation
        const carbonFootprint = (electricity * 0.5) + (fuel * 2.3);

        document.getElementById('carbonResult').textContent =
            `Your carbon footprint is approximately ${carbonFootprint.toFixed(2)} kg of CO2.`;
    });

    // Marketplace Button
    document.getElementById('exploreMarketplace').addEventListener('click', () => {
        alert('Marketplace is under development. Stay tuned!');
    });

    // Energy Analytics Chart
    const ctx = document.getElementById('energyChart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Solar', 'Wind', 'Hydro', 'Usage'],
            datasets: [{
                label: 'Energy Data',
                data: [500, 400, 600, 1200]
            }]
        }
    });

});