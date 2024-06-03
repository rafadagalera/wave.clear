Nós da waveclear visamos utilizar sensores ultrassônicos em contêineres feitos de cortiça para facilitar o escoamento de lixo dos rios para evitar que ele atinja os oceanos. A cortiça é escolhida como material por sua flutuabilidade, biodegradabilidade e sustentabilidade, oferecendo uma solução ambientalmente amigável para este problema global.

Funcionalidades:
Sensores Ultrassônicos: Os contêineres são equipados com sensores ultrassônicos para detectar a presença de lixo nos rios.
Flutuabilidade da Cortiça: A cortiça é naturalmente flutuante, o que permite que os contêineres se movam facilmente na água.
Biodegradabilidade: A cortiça é biodegradável, garantindo que os contêineres não causem danos ao meio ambiente mesmo se forem perdidos ou danificados.
Sustentabilidade: Ao evitar que o lixo chegue aos oceanos, o projeto contribui para a preservação dos ecossistemas marinhos.

Intruções:

Para montar o sensor ultrassônico no Esp32, siga as instruções abaixo:

Materiais Necessários
- Esp32
- Sensor Ultrassônico HC-SR04
- Fios jumper
- Protoboard
- Bateria 9v 

Instruções de montagem:

Conecte o pino VCC do sensor ultrassônico ao pino 5V do Esp32.
Conecte o pino GND do sensor ultrassônico ao pino GND do Esp32.
Conecte o pino Trig do sensor ultrassônico ao pino digital 12 do Esp32.
Conecte o pino Echo do sensor ultrassônico ao pino digital 14 do Esp32.

Instalação da IDE do Arduino:
Primeiro, você precisa baixar e instalar a IDE do Arduino no seu computador.

Instalação do suporte para o ESP32:

Abra a IDE do Arduino.
Vá em "Arquivo" -> "Preferências".
Na janela de Preferências, na área "URLs Adicionais de Gerenciamento de Placas", adicione a seguinte URL: https://dl.espressif.com/dl/package_esp32_index.json
Clique em "OK" para fechar a janela de Preferências.
Agora, vá em "Ferramentas" -> "Placa" -> "Gerenciador de Placas...".
Na barra de busca do Gerenciador de Placas, digite "ESP32".
Clique em "Instalar" para instalar o suporte para o ESP32 na IDE do Arduino.
Seleção da placa ESP32 na IDE do Arduino:

Após a instalação do suporte para o ESP32, vá em "Ferramentas" -> "Placa" e selecione a placa ESP32 que você está usando. Por exemplo, "ESP32 Dev Module".
Configuração da porta:

Conecte o seu dispositivo ESP32 ao computador através de um cabo USB.
Vá em "Ferramentas" -> "Porta" e selecione a porta COM à qual o ESP32 está conectado.

Copie e cole o código presente no aquivo code.txt na IDE do Arduino

