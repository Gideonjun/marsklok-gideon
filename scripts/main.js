
function updateBackground() {
  var 
    hr = (new Date()).getHours(),
    body = document.body,
    bstyle = body.style;   
  if (hr < 10) {
    bstyle.backgroundColor = "#FF9300";
  } else if (hr < 19) {
    bstyle.backgroundColor = "#ACEDFF";
  } else {
    bstyle.backgroundColor = "#375DE0";
  } 
}

setInterval(updateBackground, 1000 * 60);
updateBackground();

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    var maanden = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    var days = ['SUN', 'MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT'];
    var currentday = date.getDate();
    
    var formatDate = days[date.getDay()] + ", " + currentday+ " " + maanden[date.getMonth()] + " " + date.getFullYear();
    
    
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("Glock").innerHTML = "<h1>" + time + "</h1><p>" + formatDate + "</p>";
    setTimeout(showTime, 1000);
    
}

showTime();
















//document.getElementById('clock').innerHTML = today.toString();

//document.getElementById('clock').innerHTML = today.getMonth() + 1;

//document.getElementById('clock').innerHTML = today.getYear(); // - 1900
//document.getElementById('clock').innerHTML = today.getFullYear();
// document.getElementById('clock').innerHTML = today.getDate();
// document.getElementById('clock').innerHTML = today.getDay();
//document.getElementById('clock').innerHTML = today.getHours();


//document.getElementById('clock').innerHTML = today.getMinutes();
//document.getElementById('clock').innerHTML = today.getSeconds();
//document.getElementById('clock').innerHTML = today.getMilliseconds();
//document.getElementById('clock').innerHTML = today.getTime();
