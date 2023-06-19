# Node-Arduino

Este proyecto manda datos a través de un puerto COM
hacia el servidor de Node y pueden ser utilizados en front end con el uso de sockets 

## Instalación

1. Clona este repositorio en tu máquina local.

2. Navega al directorio del proyecto.

3. Instala las dependencias.

## Uso

1. Asegúrate de tener un Arduino u otro dispositivo conectado a través de un puerto serial y configurado para enviar datos a 9600 baudios.

2. Abre el archivo `index.js` en tu editor de código y modifica la línea `path: 'COM3'` para que coincida con el puerto serial al que está conectado tu dispositivo.

3. Ejecuta el siguiente comando para iniciar el servidor:


4. Abre tu navegador web y visita `http://localhost:4000`.

5. Podrás ver los datos de temperatura recibidos desde el puerto serial en tiempo real en tu navegador.










## Licencia

Este proyecto está bajo la Licencia [MIT](https://opensource.org/licenses/MIT) con la siguiente cláusula adicional:

Este código fuente está disponible bajo la Licencia MIT modificada. Se permite el libre uso, copia, modificación y distribución de este código fuente, siempre y cuando se incluya el siguiente aviso de autoría al comienzo del archivo:

Autor: MissaFirstX

