// function leadingZero(number){
// 	if (number < 10){
// 		return '0'+ number;
// 	}
// 	else {
// 		return number;
// 	}
// }


// var today = new Date();


// var maanden = ['jan', 'feb', 'mar', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];

// var formatDate = maanden[today.getMonth()] + '-' + today.getDate() + '-' + today.getFullYear();

// document.getElementById('clock').innerHTML = formatDate;

//  var formatTime = today.getHours() + ':' + leadingZero(today.getMinutes()) + ':' + leadingZero(today.getSeconds());

// document.getElementById('clock').innerHTML = formatDate + ' - ' + formatTime;

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
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
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
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
