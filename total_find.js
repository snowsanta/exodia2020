// Update the count down every 1 second
var y = [2000,200,500,600,300,300,300,];

var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  
  var daycontainer=document.getElementById("days")
  var hourcontainer=document.getElementById("hours")
  var mincontainer=document.getElementById("mins")
  
  daycontainer.innerHTML=days + "<br>Days"
  hourcontainer.innerHTML=hours + "<br>Hours"
  mincontainer.innerHTML=minutes + "<br>Mins"
},100)