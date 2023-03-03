const socket = io();

socket.on('temperature', function (data) {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    
    let temp = document.getElementById('txtTemperatura');
    let fecha = document.getElementById('txtFecha');
    let hora = document.getElementById('txtHora');

    hora.innerHTML = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    fecha.innerHTML = day + "/" + month + "/" + year;
    temp.innerHTML = data + " °C";
});