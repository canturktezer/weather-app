const API_KEY = 'your-api-key';

async function getWeather() {
  const locationInput = document.getElementById('location').value;
  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${locationInput}`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    const locationName = result.location.name;
    const temperature = result.current.temp_c;
    const weatherDescription = result.current.condition.text;
    const humidity = result.current.humidity;
    const windSpeed = result.current.wind_kph;

    document.getElementById('locationName').textContent = locationName;
    document.getElementById('temperature').textContent = `${temperature}°C`;
    document.getElementById('weatherDescription').textContent = weatherDescription;
    document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
    document.getElementById('wind').textContent = `Wind speed: ${windSpeed} km/h`;

  } catch (error) {
    console.error(error);
  }
}

document.getElementById('searchForm').addEventListener('submit', (event) => {
  event.preventDefault();
  getWeather();
});
