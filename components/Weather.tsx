import { useEffect, useState } from 'react';
import axios from 'axios';

interface WeatherData {
  city: string;
  temperature: string;
  description: string;
}

export default function Weather() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const response = await axios.get('/api/weather');
      setWeatherData(response.data);
    };

    fetchWeatherData();
  }, []);

  return (
    <div>
      {weatherData && (
        <div>
          <h1>{weatherData.city}</h1>
          <h2>{weatherData.temperature}</h2>
          <p>{weatherData.description}</p>
        </div>
      )}
    </div>
  );
}