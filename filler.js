var events = [
    "Crane-o mania",
    "Robosoccor",
    "Dementia",
    "Band Slam",
    "Canvas Painting",
    "Couture",
    "Rap Battle"]

var event_about = {
    "Crane-o mania": "Interested in building stuff? Come and take part in Our Event and create a Tower-Crane and test its power and reach of your Crane!",
    "Robosoccor":"Playing footbaal is easy but making your Robots do the same is difficult! So, acerpt the challenge and take part in Roboscoccor.",
    "Dementia": "Do you like to challenge yourself? Here comes the programming competition. Do take part and compete with students from all over India.",
    "Band Slam": "Music is a language that doesnot speak in particular words, it speaks in emotions! The artists, the echo of their assonances and the beauty of their voices receive a platform to persist in the hearts.",
    "Canvas Painting": "Imaginations are Thoughts! Give a face to your Imagination by painting them, take part in Exodia's Canvas Painting..",
    "Couture":"Fashion is a art of daily life! Showcase your Fashion skills and Designs in Couture - The Fashion Hub of Exodia.",
    "Rap Battle": "Battles are not always fought with arms! Some battles are fought with words and emotions and a Rap Battle is something not less than a War."
}

function filleventcards(eventarr){
    var str = '<div class="carousel-item active"><div class="row justify-content-center"><div class="row w-75 mycard"><img src="./events/' + eventarr[0] + '.png" id="rounded" class="col d-block" alt="Server Unable To load the image"><div class="col text-center card_text"><h4>' + eventarr[0] + '</h4><p>' + event_about[eventarr[0]] + '</p><div class="register-button"><a href="register.html">Register</a></div></div></div></div></div> ';
    for (i = 1; i < eventarr.length; i++) {
        str += '<div class="carousel-item"><div class="row justify-content-center"><div class="row w-75 mycard"><img src="./events/' + eventarr[i] + '.png" id="rounded" class="col d-block" alt="Server Unable to load the image"><div class="col text-center card_text"><h4>' + eventarr[i] + '</h4><p>' + event_about[eventarr[i]] + '</p><div class="register-button"><a href="register.html">Register</a></div></div></div></div></div> '; 
    };
    return str;
    // <div class="carousel-item active">
    //     <div class="row justify-content-center">
    //         <div class="row w-75 mycard">
    //             <img src="./brands/PNB.png" class="col d-block" alt="...">
    //             <div class="col text-right card_text">
    //                 <h4>Event Name</h4>
    //                 <p>something about event</p>
    //                 <div class='register-button'>
    //                      <a href='register.html'></a>
    //                 </div>
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