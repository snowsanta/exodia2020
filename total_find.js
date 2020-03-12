// Update the count down every 1 second
var y = [2000,200,500,600,300,300,300,1500,200,1500,200,100,200,0,0,0,400,400,0,2000,150,150,0,100,500,500,500,500,500,500,500,300,0,0,200,0,1200,1200,1200];
var events = document.getElementsByClassName('event_checkbox');
var price = document.getElementsByClassName('payment_button')[0];
var team_sizes = document.getElementsByClassName('tentacles');
var accomodations = document.getElementsByClassName('accomodation');
var girl_count = document.getElementsByClassName('girl_count');
var boy_count = document.getElementsByClassName('boy_count');



var x = setInterval(function() {
    var to_pay =0;
    for(var i=0;i<events.length;i++){
        if(events[i].checked){
            to_pay+=y[i]*team_sizes[i].value;
        }
    }
    if(accomodations[0].checked & accomodations[1].checked & accomodations[2].checked){
        to_pay+=1300*(girl_count[0].value) + 1300*(boy_count[0].value);
    }
    else if((accomodations[0].checked & accomodations[1].checked) | (accomodations[0].checked & accomodations[2].checked) | (accomodations[2].checked & accomodations[1].checked)){
        to_pay+=1000*(girl_count[0].value) + 1000*(boy_count[0].value);
    }
    else if(accomodations[0].checked | accomodations[1].checked | accomodations[2].checked){
        to_pay+=600* (girl_count[0].value) + 600*(boy_count[0].value);
    }
    price.innerHTML = "Pay: ₹ "+to_pay +"/-";
},100)