import React, { useEffect } from 'react';

function Previsao() {
  useEffect(() => {
    const lat = "46"; 
    const lon = "2"; 
    const apiKey = "e55a91e9056386dfc32b07f859160a2e"; 

    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
    
        console.log(data);
      })
      .catch(error => {
        console.error('Erro ao obter dados da API:', error);
      });
  }, []); // O segundo argumento é um array vazio, o que significa que este efeito será executado apenas uma vez após a montagem do componente

  return null; // Este componente não renderiza nada diretamente
}

export default Previsao;
