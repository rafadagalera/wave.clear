import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function Previsao() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = L.map(mapRef.current).setView([0, 0], 2);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      map.on('click', (e) => {
        const { lat, lng } = e.latlng;
        setLatitude(lat.toFixed(4));
        setLongitude(lng.toFixed(4));
      });

      return () => {
        map.remove();
      };
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const apiKey = "e55a91e9056386dfc32b07f859160a2e";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (error) {
      setError('Erro ao obter dados da API. Por favor, verifique as coordenadas e tente novamente.');
      console.error('Erro ao obter dados da API:', error);
    }
  };

  return (
    <div className="rounded-xl md:mb-24 flex flex-col md:h-screen m-auto md:ml-28 items-center justify-center bg-gray-700 text-white">
      <div id="map" ref={mapRef} className="w-full md:h-[650px] md:w-[1850px] z-0 h-64 mb-4"></div>
      <div className='md:flex'>

        <div className='w-80 md:mr-32 md:text-justify mt-10 text-center'>
          <p>Aqui você poderá verificar se haverá uma tempestade em qualquer lugar do mundo. Basta clicar no local desejado no mapa e clicar em enviar. Você também pode inserir a latitude e longitude manualmente, se preferir! Após isso, você receberá um texto na tela indicando dados como temperatura, descrição meteorológica e velocidade do vento, assim como nível de precipitação caso esteja chovendo. O alerta é emitido na tela somente se os níveis forem preocupantes.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-800 mt-10 p-4 rounded-lg shadow-lg text-center">
          <div className="mb-4">
            <label htmlFor="latitude" className="block text-gray-300 text-sm font-bold mb-2">Latitude:</label>
            <input type="text" placeholder='Insira a latitude' id="latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="longitude" className="block text-gray-300 text-sm font-bold mb-2">Longitude:</label>
            <input type="text" id="longitude" placeholder='Insira a longitude' value={longitude} onChange={(e) => setLongitude(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="flex items-center justify-center">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Enviar</button>
          </div>
        </form>
      </div>
      
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {weatherData && (
      <div className="mt-8 text-center mb-16">
    <h2 className="text-2xl font-bold mb-2">Previsão do Tempo</h2>
    <p><span className="font-bold">Localização:</span> {weatherData.name}</p>
    <p><span className="font-bold">Temperatura:</span> {weatherData.main.temp}°C</p>
    <p><span className="font-bold">Descrição:</span> {weatherData.weather[0].description}</p>
    <p><span className="font-bold">Vento:</span> {weatherData.wind.speed} m/s</p>
    {weatherData.weather[0].description.includes("chuva") && (
      <p><span className="font-bold">Volume de precipitação:</span> {weatherData.rain ? `${weatherData.rain['1h']} mm` : 'Não disponível'}</p>
    )}
    {(weatherData.wind.speed > 8 ||
      weatherData.weather[0].description.includes("vento forte") ||
      weatherData.weather[0].description.includes("chuva moderada") ||
      weatherData.weather[0].description.includes("chuva forte") ||
      weatherData.weather[0].description.includes("tempestade")) ? (
      <p className="text-red-500 mt-2">Alerta de condições meteorológicas adversas!</p>
    ) : (
      <p className="mt-2 text-green-400">Sem alertas de tempestade!</p>
    )}
  </div>
)}

    </div>
  );
}

export default Previsao;
