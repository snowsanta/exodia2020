var back_cols = ["rgb(150,206,180)","rgb(255,238,173)"]

Array.from(document.getElementsByClassName("container")).forEach((div) => {
    div.style.height = window.innerHeight + "px";
})

var load_flg = 0;
window.addEventListener('load', function(event){
    if(screen.availWidth - window.innerWidth){
        document.getElementById("max-note").style.opacity = "1";
        load_flg = 1;
    };
    document.getElementById("preloader").classList.add("finish")
})

window.addEventListener('resize', function(event){
    if((load_flg) && !(screen.availWidth - window.innerWidth)){
        location.reload();
    }
    if(screen.availWidth - window.innerWidth){
        document.getElementById("max-note").style.opacity = "1";
    }else{
        document.getElementById("max-note").style.opacity = "0";
    };
})

