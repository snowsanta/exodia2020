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

function drawimg(image, context, x, y, w = 1, h = 1, op = 1){
    if(!image.complete){
        setTimeout(function(){
            drawimg(image, context, x, y, w, h, op);
        },50);
        return;
    }
    context.globalAlpha = op;
    context.drawImage(image, x, y, window.innerWidth * w, window.innerHeight * h);
    context.globalAlpha = 1;
}

CanvasRenderingContext2D.prototype.roundedRect = function (x, y, width, height, radius){
    // Because the function is added to the context prototype
    // the 'this' variable is actually the context
    
    // Save the existing state of the canvas so that it can be restored later
    this.save();
    
    // Translate to the given X/Y coordinates
    this.translate(x, y);
    
    // Move to the center of the top horizontal line
    this.moveTo(width / 2,0);
    
    // Draw the rounded corners. The connecting lines in between them are drawn automatically
    this.arcTo(width,0,width,height, Math.min(height / 2, radius));
    this.arcTo(width, height, 0, height, Math.min(width / 2, radius));
    this.arcTo(0, height, 0, 0, Math.min(height / 2, radius));
    this.arcTo(0, 0, radius, 0, Math.min(width / 2, radius));
    
    // Draw a line back to the start coordinates
    this.lineTo(width / 2,0);
    
    // Restore the state of the canvas to as it was before the save
    this.restore();
}

var forage_li = new Image();
forage_li.src = './renders/forage_light.png';
var forage = new Image();
forage.src = './renders/forage_dark.png';
var lem = new Image();
lem.src = "./renders/lemonade_sill.png";
var crowd = new Image();
crowd.src = "./renders/crowd.png";
var ball = new Image();
ball.src = "./renders/ball.png";
var seat = new Image();
seat.src = "./renders/seat.png";
var umbrella = new Image();
umbrella.src = "./renders/umbrella.png";
var table = new Image();
table.src = "./renders/table.png";
var logo = new Image();
logo.src = "./renders/exodia_logo.png";
var bar = new Image();
bar.src = "./renders/bar.png";
var pole = new Image();
pole.src = "./renders/pole.png";
var melon = new Image();
melon.src = "./renders/melon.png";
var ice = new Image();
ice.src = "./renders/ice.png";
var float = new Image();
float.src = "./renders/float.png";

//layer1

var canv = document.getElementById("canv");
canv.height = canv.scrollHeight;
canv.width = canv.scrollWidth;
var ctx = canv.getContext('2d');

var canv2 = document.getElementById("canv2");
canv2.height = canv2.scrollHeight;
canv2.width = canv2.scrollWidth;
var ctx2 = canv2.getContext('2d');

var canv3 = document.getElementById("canv3");
canv3.height = canv3.scrollHeight;
canv3.width = canv3.scrollWidth;
var ctx3 = canv3.getContext('2d');

var canv4 = document.getElementById("canv4");
canv4.height = canv4.scrollHeight;
canv4.width = canv4.scrollWidth;
var ctx4 = canv4.getContext('2d');

var canv_back = document.getElementById("content_back");
canv_back.height = canv_back.scrollHeight;
canv_back.width = canv_back.scrollWidth;
var ctx_back = canv_back.getContext('2d');

var canv_anim = document.getElementById("content_anim");
canv_anim.height = canv_anim.scrollHeight;
canv_anim.width = canv_anim.scrollWidth;
var ctx_anim = canv_anim.getContext('2d');

var canv_back_props = document.getElementById("content_back_prop");
canv_back_props.height = canv_back_props.scrollHeight;
canv_back_props.width = canv_back_props.scrollWidth;
var ctx_back_props = canv_back_props.getContext('2d');

var height = window.innerHeight;
var width = window.innerWidth;

var back = ctx.createLinearGradient(0,0,0,height*.8);
back.addColorStop(0,"#0773e0");
back.addColorStop(.1,"#0b86f0");
back.addColorStop(.4495,"#7ab5d5");
back.addColorStop(.46,"#1e84c0");
back.addColorStop(.52,"#00a9ca");
back.addColorStop(.62,"#79e4e3");
back.addColorStop(.65,"#98eae6");
back.addColorStop(.8,"#e9ede0");
back.addColorStop(1,"#ffecd1");
ctx.fillStyle = back;
ctx.fillRect(0,0,width,height);
drawimg(forage_li , ctx2, 0,50);
drawimg(forage , ctx3, 0,0);
// drawimg(seat , ctx, width * .7,height*.5,140/width,180/height);
// drawimg(umbrella , ctx, width * .7,height*.25,280/width,400/height);
// drawimg(table , ctx, width * .65,height*.65,70/width,90/height);
drawimg(logo , ctx, width * .38,height*.05,400/width,290/height);
drawimg(bar , ctx, width * .75,height*.55,400/width,290/height);
drawimg(pole , ctx, width * .097,height*.65,10/width,190/height);
drawimg(pole , ctx, width * .247,height*.65,10/width,190/height);
drawimg(pole , ctx, width * .397,height*.65,10/width,190/height);


ctx.beginPath();
ctx.moveTo(-width * .15,height*.655);
ctx.quadraticCurveTo(-width * .025,height * .8, width * .1,height*.655);
ctx.quadraticCurveTo(width * .175,height * .8, width * .25,height*.655);
ctx.quadraticCurveTo(width * .325,height * .8, width * .4,height*.655);
ctx.stroke();
ctx.closePath();

ctx_back.fillStyle = back_cols[0];
ctx_back.fillRect(0,0,window.innerWidth,window.innerHeight);
ctx_back.fillRect(0,window.innerHeight * 2,window.innerWidth,window.innerHeight);
ctx_back.fillRect(0,window.innerHeight * 4,window.innerWidth,window.innerHeight);

ctx_back.fillStyle = back_cols[1];
ctx_back.fillRect(0,window.innerHeight * 1,window.innerWidth,window.innerHeight);
ctx_back.fillRect(0,window.innerHeight * 3,window.innerWidth,window.innerHeight);
ctx_back.fillRect(0,window.innerHeight * 5,window.innerWidth,window.innerHeight);

// layer2


var cols = ["rgba(255,0,0,", "rgba(0,255,0,", "rgba(0,0,255,","rgba(255,255,0,", "rgba(0,255,255,", "rgba(255,0,255,"]

var bulb_obj = function(time, col, x, y) {
    this.in_rad = 1;
    this.out_rad = 10;
    this.time = time;
    this.x = x;
    this.y = y;
    this.col = col;
}

var index = 0;
var Animation_sun = function(){
    // Explicitly bind update()'s 'this' context and cache in instance property
    this.boundUpdate = this.update.bind(this);

    // change value and color to match graphic
    this.sun = {in_rad: 50, out_rad: 200, time:0, x: window.innerWidth * 7/10, y: window.innerHeight / 7, col: "rgba(243,230,178,"};
    this.bulbs = [];
    // Track frame time
    this.lastAnimationTime = 0;

    ctx.beginPath();
    ctx.moveTo(-width * .15,height*.655);
    ctx.quadraticCurveTo(-width * .025,height * .8, width * .1,height*.655);
    ctx.quadraticCurveTo(width * .175,height * .8, width * .25,height*.655);
    ctx.quadraticCurveTo(width * .325,height * .8, width * .4,height*.655);
    
    var key = 0;

    ctx4.fillStyle = "red";
    for (i = 0; i < width * .4; i += 12){
        for(j = height*.755; j> height * .655; j-- ){
            if(ctx.isPointInPath(i,j)){
                key ++;
                this.bulbs.push(new bulb_obj(i,cols[index], i,j));
                //this.bulbs.push(new bulb_obj(i,cols[key%6], i,j - 50));
                //this.bulbs.push(new bulb_obj(i,cols[key%3], i,j + 50));
                break;
            }
        }
    }
    ctx.closePath();
}

// Define update loop on the "Animation" prototype
Animation_sun.prototype.update = function() {

ctx4.clearRect(0, 0, canv2.width, canv2.height);

// Calculate time since last frame
var currentAnimationTime = Date.now();
var animationDeltaTime   = (currentAnimationTime - (this.lastAnimationTime || Date.now())) / 3000;

// Reset time for next frame
this.lastAnimationTime = currentAnimationTime;

// Draw

    var grd = ctx.createRadialGradient(this.sun.x,this.sun.y,this.sun.in_rad,this.sun.x,this.sun.y,this.sun.out_rad);
    grd.addColorStop(0, this.sun.col + "1)");
    grd.addColorStop(.1, this.sun.col + ".5)");
    grd.addColorStop(1, this.sun.col + "0)");
    
    
    ctx4.fillStyle = grd;
    ctx4.beginPath();
    ctx4.arc(this.sun.x, this.sun.y, 500, 0, 2 * Math.PI);
    ctx4.fill();
    ctx4.closePath();
    // Update props
    //sun
    this.sun.in_rad = 40 - (2 * Math.sin(this.sun.time/.5));
    this.sun.out_rad = 200 - (20 * Math.sin(this.sun.time/.5));
    this.sun.time += animationDeltaTime;

    //rice_bulbs
    this.bulbs.forEach((bulb) => {
        var grd = ctx.createRadialGradient(bulb.x,bulb.y,bulb.in_rad,bulb.x,bulb.y,bulb.out_rad);
        grd.addColorStop(0, bulb.col + "1)");
        grd.addColorStop(.1, bulb.col + ".5)");
        grd.addColorStop(1, bulb.col + "0)");
        
        
        ctx4.fillStyle = grd;
        ctx4.beginPath();
        ctx4.arc(bulb.x, bulb.y, 500, 0, 2 * Math.PI);
        ctx4.fill();
        ctx4.closePath();
        bulb.out_rad = 7 - (3 * Math.sin(bulb.time/.09));
        bulb.time += animationDeltaTime;
    });

//schedule and make constraint

if(this.sun.time == Number.MAX_VALUE / 2){this.sun.time = 0};
window.requestAnimationFrame(this.boundUpdate);
}

// ----------------------------------------------------
// Start
// ----------------------------------------------------

// Create animation instance and call first update
// var animation_forage = new Animation_forage();
// animation_forage.update();

// var lastScrollTop = 0;
// window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
//    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
//    if (st > lastScrollTop){
//     animation_forage.update();
//    } else {
//     animation_forage.update();
//    }
//    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
// }, false);

var animation_sun = new Animation_sun();
animation_sun.update();



// content layer non - animations

//woofer

//main
ctx_back_props.beginPath();
ctx_back_props.fillStyle = 'rgba(255,255,255,.5)';
ctx_back_props.roundedRect(-300, height / 2 - 300 - 15, 700 + 15, 200, 15);
ctx_back_props.fill();
ctx_back_props.closePath();

//handle
ctx_back_props.beginPath();
ctx_back_props.fillStyle = back_cols[0] ;
ctx_back_props.roundedRect(-300, height / 2 - 300 + 15, 700 - 15, 200, 15);
ctx_back_props.fill();
ctx_back_props.closePath();

//handle empty
ctx_back_props.beginPath();
ctx_back_props.clearRect(-300, height / 2 - 200, 800, 400, 50);
ctx_back_props.fillStyle = 'rgba(255,255,255,.5)';
ctx_back_props.roundedRect(-300, height / 2 - 200, 800, 400, 50);
ctx_back_props.fill();
ctx_back_props.closePath();


ctx_back_props.clearRect(-50,height / 2 - 130,700,50);
ctx_back_props.fillStyle = back_cols[0];
ctx_back_props.beginPath();
ctx_back_props.arc(430, height / 2 - 160, 25, 0, 2 * Math.PI);
ctx_back_props.closePath();
ctx_back_props.fill();
ctx_back_props.clearRect(0,height / 2 + 15,150,100)

ctx_back_props.fillStyle = 'rgba(255,255,255,.5)';
ctx_back_props.beginPath();
ctx_back_props.arc(300,height / 2 - 105 , 10, 0, 2 * Math.PI);
ctx_back_props.arc(350,height / 2 - 105 , 10, 0, 2 * Math.PI);
ctx_back_props.arc(200,height / 2 - 105 , 10, 0, 2 * Math.PI);
ctx_back_props.arc(250,height / 2 - 105 , 10, 0, 2 * Math.PI);
ctx_back_props.closePath();
ctx_back_props.fill();

//stage_light_base
ctx_back_props.fillStyle = 'rgba(255,255,255,.5)';
ctx_back_props.beginPath();
ctx_back_props.arc(width * .8,height * 3.9 , 13, 0, 2 * Math.PI);
ctx_back_props.arc(width * .2,height * 3.9 , 13, 0, 2 * Math.PI);
ctx_back_props.closePath();
ctx_back_props.fill();


//lemonade
drawimg(lem, ctx_back_props, 0, height, 1, 1, .5);
drawimg(melon, ctx_back_props, -width * .1, height * 1.2, .4, .8, .2);

//stage
// drawimg(crowd, ctx_back_props, 0, height*2);

// var light = ctx.createRadialGradient(layer.x,layer.y,layer.in_rad,layer.x,layer.y,layer.out_rad);
// grd.addColorStop(0, layer.col + "1)");
// grd.addColorStop(.1, layer.col + ".5)");
// grd.addColorStop(1, layer.col + "0)");
// ctx_back_props.fillStyle = light;

//ball
//drawimg(ball, ctx_back_props, 0, height*3,height/(2 * width),1/2);



var Animation_cont_layer = function(){
    // Explicitly bind update()'s 'this' context and cache in instance property
    this.boundUpdate = this.update.bind(this);

    this.ballobj = {img : ball, x: 100, y: 2.35, time:0};
    this.floatobj = {img : float, x: width * .55, y: 4.4,dist: .003, time: 1, period: 1.5};
    this.woof = {rad : 75, attack_speed : 60, reck_speed : -700, sp : 100};
    this.ice = [{img: ice, dist: .0007, time: 0, angle : 14.4, x: .87, y:1.75, period: 1, dim: 100},
                {img: ice, dist: .001, time: 0.4, angle : 14.4, x:.93, y:1.67, period: 2, dim:100},
                {img: ice, dist: .001, time: .20, angle : 14.4, x:.95, y:1.87, period: 2, dim:100}];
    this.lights = [{x:width * .2, start: 5, speed: 1.5, left: 5.5, right: 4.5}, {x:width * .8, start: 4, speed: -1.5, left: 4.5 , right: 3.5}];
    
    // Track frame time
    this.lastAnimationTime = 0;
}

// Define update loop on the "Animation" prototype
Animation_cont_layer.prototype.update = function() {
    
    ctx_anim.clearRect(0, 0, canv_anim.width, canv_anim.height);
    
    // Calculate time since last frame
    var currentAnimationTime = Date.now();
    var animationDeltaTime   = (currentAnimationTime - (this.lastAnimationTime || Date.now())) / 3000;

    // Reset time for next frame
    this.lastAnimationTime = currentAnimationTime;
    
    // Draw

    //float
    drawimg(this.floatobj.img, ctx_anim, this.floatobj.x, height * this.floatobj.y,height/(2 * width),1/2, .2);
    this.floatobj.y += this.floatobj.dist * Math.sin(this.floatobj.time * 2 * Math.PI/this.floatobj.period);
    this.floatobj.time += animationDeltaTime;
    ctx_anim.clearRect(this.floatobj.x,height * 5, width * .5, height * .5);
    
    //ball
    drawimg(this.ballobj.img, ctx_anim, this.ballobj.x, this.ballobj.y * height,height/(2 * width),1/2, .5);
    //update
    this.ballobj.y = 2.15 + (.3 * Math.pow(Math.abs((((this.ballobj.time - Math.floor(this.ballobj.time)) * 2) - 1)), 2));
    this.ballobj.time += animationDeltaTime;

    //woofer
    ctx_anim.fillStyle = back_cols[0];
    ctx_anim.beginPath();
    ctx_anim.arc(330, height / 2 + 60, this.woof.rad, 0, 2 * Math.PI);
    ctx_anim.closePath();
    ctx_anim.fill();
    ctx_anim.fillStyle = 'rgba(255,255,255,.5)';
    ctx_anim.beginPath();
    ctx_anim.arc(330, height / 2 + 60, 15, 0, 2 * Math.PI);
    ctx_anim.closePath();
    ctx_anim.fill();
    //update
    this.woof.rad += this.woof.sp * animationDeltaTime;
    if(this.woof.rad >= 80){
        this.woof.sp = this.woof.reck_speed;
        this.woof.rad = 79;
    }
    if(this.woof.rad <= 70){
        this.woof.sp = this.woof.attack_speed;
        this.woof.rad = 71;
    } 

    //stage
    
    this.lights.forEach((light) => {
        var light_grad = ctx.createRadialGradient(light.x, height * 3.9,100,light.x, height * 3.9,650);
        light_grad.addColorStop(0, "rgba(255,255,255,.4)");
        light_grad.addColorStop(.4, "rgba(255,255,255,.1)");
        light_grad.addColorStop(1, "rgba(255,255,255,0)");
        ctx_anim.fillStyle = light_grad;
        ctx_anim.beginPath();
        ctx_anim.arc(light.x, height * 3.9, 650, light.start, light.start + .3);
        ctx_anim.lineTo(light.x, height * 3.9);
        ctx_anim.fill();
    })
    drawimg(crowd, ctx_anim, 0, height*3,1,1,.5);
    //update
    this.lights.forEach((light) => {
        light.start += light.speed * animationDeltaTime;
        if(light.start > light.left || light.start < light.right){
            light.speed = light.speed * -1;
            light.start = (Math.abs(light.start - light.left) > Math.abs(light.start - light.right)) ? light.right : light.left;
        }
    });
    
    
    this.ice.forEach((cube) => {
        drawimg(cube.img, ctx_anim, width * cube.x, height * cube.y, cube.dim/width, cube.dim/ height);
        cube.x += cube.dist * Math.sin(cube.time * 2 * Math.PI/cube.period) * Math.sin(cube.angle * Math.PI/ 180);
        cube.y += cube.dist * Math.sin(cube.time * 2 * Math.PI/cube.period)  * Math.cos(cube.angle * Math.PI/ 180);
        cube.time += animationDeltaTime;
        ctx_anim.clearRect(width * .6,height * 2, width * .4, height * .2);
    })
    
    
    
    //schedule and make constraint

    window.requestAnimationFrame(this.boundUpdate);
}

var animation_cont_layer = new Animation_cont_layer();
animation_cont_layer.update();





// var Animation_forage = function(){
//     // Explicitly bind update()'s 'this' context and cache in instance property
//     this.boundUpdate = this.update.bind(this);

//     this.forage_d = {img : forage, x: 0, y: 0, fac: 1, speed : .7};
//     this.forage_l = {img : forage_li, x: 0, y: 50, fac: 1, speed : 1.5};

//     // Track frame time
//     this.lastAnimationTime = 0;
// }

// // Define update loop on the "Animation" prototype
// Animation_forage.prototype.update = function() {

     

//     ctx2.clearRect(0, 0, canv2.width, canv2.height);
//     ctx3.clearRect(0, 0, canv3.width, canv3.height);

//     // Calculate time since last frame
//     var currentAnimationTime = Date.now();
//     var animationDeltaTime   = (currentAnimationTime - (this.lastAnimationTime || Date.now())) / 3000;

//     // Reset time for next frame
//     this.lastAnimationTime = currentAnimationTime;

//     // Draw
//     drawimg(this.forage_d.img , ctx2, this.forage_d.x, this.forage_d.y, this.forage_d.fac, this.forage_d.fac);
//     drawimg(this.forage_l.img , ctx3, this.forage_l.x, this.forage_l.y, this.forage_l.fac, this.forage_l.fac);

//     // Update props
//     this.forage_d.x -= (this.forage_d.speed * animationDeltaTime) * window.innerWidth / 2;
//     this.forage_d.y -= (this.forage_d.speed * animationDeltaTime) * window.innerHeight / 2;
//     this.forage_d.fac += this.forage_d.speed * animationDeltaTime;

//     this.forage_l.x -= (this.forage_l.speed * animationDeltaTime) * window.innerWidth / 2;
//     this.forage_l.y -= (this.forage_l.speed * animationDeltaTime) * window.innerHeight / 2;
//     this.forage_l.fac += this.forage_l.speed * animationDeltaTime;

//     //schedule and make constraint

//     //for first stop
//     if(this.forage_d.fac > 1.2 && flg){
//         flg = 0;
//         return;
//     }
    
//     //for stop when goes out
//     else if((this.forage_d.fac > 2 || this.forage_d.fac < 1.2) && (!flg)){

//         this.forage_d.speed = this.forage_d.speed * -1;
//         this.forage_l.speed = this.forage_l.speed * -1;
//         return;
//     }

//     else{
//         window.requestAnimationFrame(this.boundUpdate);
//     };
// }
