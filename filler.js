var events = [
    "Dementia",
    "Rap Battle",
    "RoboSoccer",
    "Band Slam",
    "Canvas",
    "Crane-o mania",
    "Couture",
    "IPL Auction",
]

var event_about = {
    "IPL Auction": "lorem ipsum sit dolores",
    "crane-o mania": "somethong lorem ipsum sit dolores",
    "RoboSoccer": "somethong lorem ipsum sit dolores",
    "Dementia": "somethong lorem ipsum sit dolores",
    "Band Slam": "somethong lorem ipsum sit dolores",
    "Canvas": "somethong lorem ipsum sit dolores",
    "Couture": "somethong lorem ipsum sit dolores",
    "Rap Battle": "somethong lorem ipsum sit dolores"
}

function filleventcards(eventarr){
    var str = '<div class="carousel-item active"><div class="row justify-content-center"><div class="row w-75 mycard"><img src="./events/' + eventarr[0] + '.png" class="col d-block" alt="..."><div class="col text-right card_text"><h4>' + eventarr[0] + '</h4><p>' + event_about[eventarr[0]] + '</p></div></div></div></div> ';
    for (i = 1; i < eventarr.length; i++) {
        str += '<div class="carousel-item"><div class="row justify-content-center"><div class="row w-75 mycard"><img src="./events/' + eventarr[i] + '.png" class="col d-block" alt="..."><div class="col text-right card_text"><h4>' + eventarr[i] + '</h4><p>' + event_about[eventarr[i]] + '</p></div></div></div></div> '; 
    };
    return str;
    // <div class="carousel-item active">
    //     <div class="row justify-content-center">
    //         <div class="row w-75 mycard">
    //             <img src="./brands/PNB.png" class="col d-block" alt="...">
    //             <div class="col text-right card_text">
    //                 <h4>Event Name</h4>
    //                 <p>something about event</p>
    //             </div>
    //         </div>
    //     </div>
    // </div>
}

function fillsponcards(a){
    var str = '<div class="carousel-item active"><div class="mycard_spon"><img src="./brands/spon (0).png" alt=""><img src="./brands/spon (1).png" alt=""><img src="./brands/spon (2).png" alt=""></div></div>'
    for (i = 1; i < a/3; i++) {
        str += '<div class="carousel-item"><div class="mycard_spon"><img src="./brands/spon (' + String(i*3) + ').png" alt=""><img src="./brands/spon (' + String((i*3) + 1) + ').png" alt=""><img src="./brands/spon (' + String((i*3) + 2) + ').png" alt=""></div></div>'
    }
    return str;

    // <div class="carousel-item active">
    //     <div class="mycard_spon">
    //         <img src="./brands/spon (0).jpg" alt="">
    //         <img src="./brands/spon (0).jpg" alt="">
    //         <img src="./brands/spon (0).jpg" alt="">
    //     </div>
    // </div>
}


window.addEventListener('load', () => {
    document.getElementById("event_carousel_inner").innerHTML = filleventcards(events);
    document.getElementById("spon_carousel_inner").innerHTML = fillsponcards(27);
})