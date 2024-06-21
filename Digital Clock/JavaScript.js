
window.addEventListener('load', CalculeteTime);/*quando a página e carregada a função é chamada */

function CalculeteTime() {
    var date = new Date();
    var dayNumber = date.getDay();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var ampm = hour > 12 ? 'PM' : 'AM';
    var dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    hour = hour % 12;
    hour = hour ? hour : '12';
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;

    document.getElementById("day").innerHTML = dayNames[dayNumber]; 
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("ampm").innerHTML = ampm;

    /*Para ela funcionar direto, sem precisar que a chame apenas quando quiser add*/

    setTimeout(CalculeteTime, 200) /*ela é chama a função */
}
