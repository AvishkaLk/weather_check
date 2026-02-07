const panel = document.getElementById("sidePanel");
const btnCity = document.getElementById("btnCity");

btnCity.addEventListener("click", () => {
    const city = document.getElementById("city2").value.trim();

    if (!city) {
        alert("Please Enter a City Name!");
        return;
    }

    getWeather(city);
});

async function getWeather(city) {
    const api_key = "cf64f4963f68489e83045719253010";
    const api_url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}&aqi=no`;

    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);

// Put data in panel
    document.getElementById('temperature').textContent = `${Math.round(data.current.temp_c)}°C`;
    document.getElementById('weatherIcon').src = `https:${data.current.condition.icon}`;
    document.getElementById('condition').textContent = data.current.condition.text;
    document.getElementById('feelsLike').textContent = `${Math.round(data.current.feelslike_c)}°C`;
    document.getElementById('humidity').textContent = `${data.current.humidity}%`;
    document.getElementById('windSpeed').textContent = `${data.current.wind_kph} km/h`;
    document.getElementById('pressure').textContent = `${data.current.pressure_mb} mb`;

    if (window.innerWidth <= 600) {
        panel.style.left = "auto";
        panel.style.right = "0";
        panel.style.width = "100vw"; // Full screen on mobile
    } 
    else {
        panel.style.right = "0";
        panel.style.left = "auto";
        panel.style.width = "79.5%";    
    }
}

// Close panel on click
panel.addEventListener("click", () => {
    panel.style.width = "0";
});
