import { useEffect, useState } from 'react';
import axios from 'axios';

interface WeatherData {
  location: {
    name: string;
  };
  current: {
    temp_c: number;
  };
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
          <h1>{weatherData.location.name}</h1>
          <h2>{weatherData.current.temp_c}°C</h2>
        </div>
      )}
    </div>
  );
}