function actualizarReloj() {
    const ahora = new Date();
    
    // Obtener componentes de fecha y hora
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    
    const diaSemana = diasSemana[ahora.getDay()];
    const dia = ahora.getDate();
    const mes = meses[ahora.getMonth()];
    const año = ahora.getFullYear();
    
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();
    
    // Formatear para asegurar 2 dígitos
    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;
    
    // Construir el string de fecha y hora
    const fechaStr = `${diaSemana}, ${dia} de ${mes} de ${año}`;
    const horaStr = `${horas}:${minutos}:${segundos}`;
    
    // Mostrar en el elemento
    document.getElementById('pFechayHoraActual').innerHTML = `${fechaStr}<br>${horaStr}`;
    
    // Actualizar cada segundo
    setTimeout(actualizarReloj, 1000);
}

// Iniciar el reloj
actualizarReloj();