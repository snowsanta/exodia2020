var back_cols = ["rgb(150,206,180)","rgb(255,238,173)"]
var height = window.innerHeight;
var width = window.innerWidth;

window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('finish')
})

function drawimg(image, context, x, y, w = 0, h = 0){
    if(!image.complete){
        setTimeout(function(){
            drawimg(image, context, x, y, w, h);
        },50);
        return;
    }
    if(h && w){
        context.drawImage(image, x, y, window.innerWidth * w, window.innerHeight * h);
        return;
    }
    context.drawImage(image, x, y, window.innerWidth, window.innerHeight);
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

var beach_back = new Image();
beach_back.src = './renders/beach_back.jpg';
var sand = new Image();
sand.src = './renders/sand.png';
var forage_li = new Image();
forage_li.src = './renders/forage_light.png';
var forage = new Image();
forage.src = './renders/forage_dark.png';
var lem = new Image();
lem.src = "./renders/lemonade_sill.png";
var crowd = new Image();
crowd.src = "./renders/crowd.png";
var ball = new Image(300,300);
ball.src = "./renders/ball.png";

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


drawimg(beach_back, ctx, 0, -150);
drawimg(sand, ctx, 0, 90);
drawimg(forage_li , ctx2, 0,50);
drawimg(forage , ctx3, 0,0);

ctx_back.fillStyle = back_cols[0];
ctx_back.fillRect(0,0,window.innerWidth,window.innerHeight);
ctx_back.fillRect(0,window.innerHeight * 2,window.innerWidth,window.innerHeight);
ctx_back.fillRect(0,window.innerHeight * 4,window.innerWidth,window.innerHeight);

ctx_back.fillStyle = back_cols[1];
ctx_back.fillRect(0,window.innerHeight * 1,window.innerWidth,window.innerHeight);
ctx_back.fillRect(0,window.innerHeight * 3,window.innerWidth,window.innerHeight);

// layer2



var Animation_forage = function(){
    // Explicitly bind update()'s 'this' context and cache in instance property
    this.boundUpdate = this.update.bind(this);

    this.forage_d = {img : forage, x: 0, y: 0, fac: 1, speed : .7};
    this.forage_l = {img : forage_li, x: 0, y: 50, fac: 1, speed : 1.5};

    // Track frame time
    this.lastAnimationTime = 0;
}

// Define update loop on the "Animation" prototype
var run__anim = 1;
var flg = 1;
var flg3 = 1;
Animation_forage.prototype.update = function() {

     

    ctx2.clearRect(0, 0, canv2.width, canv2.height);
    ctx3.clearRect(0, 0, canv3.width, canv3.height);

    // Calculate time since last frame
    var currentAnimationTime = Date.now();
    var animationDeltaTime   = (currentAnimationTime - (this.lastAnimationTime || Date.now())) / 3000;

    // Reset time for next frame
    this.lastAnimationTime = currentAnimationTime;

    // Draw
    drawimg(this.forage_d.img , ctx2, this.forage_d.x, this.forage_d.y, this.forage_d.fac, this.forage_d.fac);
    drawimg(this.forage_l.img , ctx3, this.forage_l.x, this.forage_l.y, this.forage_l.fac, this.forage_l.fac);

    // Update props
    this.forage_d.x -= (this.forage_d.speed * animationDeltaTime) * window.innerWidth / 2;
    this.forage_d.y -= (this.forage_d.speed * animationDeltaTime) * window.innerHeight / 2;
    this.forage_d.fac += this.forage_d.speed * animationDeltaTime;

    this.forage_l.x -= (this.forage_l.speed * animationDeltaTime) * window.innerWidth / 2;
    this.forage_l.y -= (this.forage_l.speed * animationDeltaTime) * window.innerHeight / 2;
    this.forage_l.fac += this.forage_l.speed * animationDeltaTime;

    //schedule and make constraint

    //for first stop
    if(this.forage_d.fac > 1.2 && flg){
        flg = 0;
        console.log(flg);
        return;
    }
    
    //for stop when goes out
    else if((this.forage_d.fac > 2 || this.forage_d.fac < 1.2) && (!flg)){
        console.log(this.forage_d.fac);

        this.forage_d.speed = this.forage_d.speed * -1;
        this.forage_l.speed = this.forage_l.speed * -1;
        return;
    }

    else{
        window.requestAnimationFrame(this.boundUpdate);
    };
}


var Animation_sun = function(){
    // Explicitly bind update()'s 'this' context and cache in instance property
    this.boundUpdate = this.update.bind(this);
// change value and color to match graphic
    this.sun = [
        {in_rad: 50, out_rad: 200, time:0, x: window.innerWidth * 7/10, y: window.innerHeight / 7, col: "rgba(243,230,178,"},
        {in_rad: 1, out_rad: 10, time:0, x: window.innerWidth / 10, y: window.innerHeight * 7/10, col: "rgba(255,0,0,"},
        {in_rad: 1, out_rad: 10, time:.16, x: window.innerWidth * 1.1 / 10, y: window.innerHeight * 7/10, col: "rgba(255,0,0,"},
        {in_rad: 1, out_rad: 10, time:.32, x: window.innerWidth * 1.2 / 10, y: window.innerHeight * 7/10, col: "rgba(255,0,0,"},
        {in_rad: 1, out_rad: 10, time:.77, x: window.innerWidth * 1.3 / 10, y: window.innerHeight * 7/10, col: "rgba(255,0,0,"},
        {in_rad: 1, out_rad: 10, time:2, x: window.innerWidth * 1.4 / 10, y: window.innerHeight * 7/10, col: "rgba(255,0,0,"},
        {in_rad: 1, out_rad: 10, time:0, x: window.innerWidth * 1.5 / 10, y: window.innerHeight * 7/10, col: "rgba(255,0,0,"},
    ];

    // Track frame time
    this.lastAnimationTime = 0;
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

this.sun.forEach((layer) => {
    var grd = ctx.createRadialGradient(layer.x,layer.y,layer.in_rad,layer.x,layer.y,layer.out_rad);
    grd.addColorStop(0, layer.col + "1)");
    grd.addColorStop(.1, layer.col + ".5)");
    grd.addColorStop(1, layer.col + "0)");
    
    
    ctx4.fillStyle = grd;
    ctx4.beginPath();
    ctx4.arc(layer.x, layer.y, 500, 0, 2 * Math.PI);
    ctx4.fill();
    ctx4.closePath();
    // Update props
    if(layer.in_rad > 10 ){
        //sun
        layer.in_rad = 40 - (2 * Math.sin(layer.time/.5));
        layer.out_rad = 200 - (20 * Math.sin(layer.time/.5));
        layer.time += animationDeltaTime;
    }
    else{
        //rice_bulbs
        layer.out_rad = 7 - (3 * Math.sin(layer.time/.09));
        layer.time += animationDeltaTime;
    }
})

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


// content layer animations


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



//lemonade
drawimg(lem, ctx_back_props, 0, height);

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

    this.ballobj = {img : ball, x: 100, y: height*3.2, speed : 0, accn : 3000};
    this.woof = {rad : 75, attack_speed : 60, reck_speed : -700, sp : 100};
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

    //ball
    drawimg(this.ballobj.img, ctx_anim, this.ballobj.x, this.ballobj.y,height/(2 * width),1/2);

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

    //stage
    
    this.lights.forEach((light) => {
        var light_grad = ctx.createRadialGradient(light.x, height * 2.9,100,light.x, height * 2.9,650);
        light_grad.addColorStop(0, "rgba(255,255,255,.4)");
        light_grad.addColorStop(.4, "rgba(255,255,255,.1)");
        light_grad.addColorStop(1, "rgba(255,255,255,0)");
        ctx_anim.fillStyle = light_grad;
        ctx_anim.beginPath();
        ctx_anim.arc(light.x, height * 2.9, 650, light.start, light.start + .3);
        ctx_anim.lineTo(light.x, height * 2.9);
        ctx.closePath();
        ctx_anim.fill();

    })
    
    ctx_anim.globalAlpha = .5;
    drawimg(crowd, ctx_anim, 0, height*2);
    ctx_anim.globalAlpha = 1;
    


    // Update props

    //ball
    this.ballobj.y += (this.ballobj.speed * animationDeltaTime);
    this.ballobj.speed += (this.ballobj.accn * animationDeltaTime);
    if(this.ballobj.y > height * 3.45){
        this.ballobj.speed = this.ballobj.speed * -1;
    }
    if(this.ballobj.y < height * 3.2){
        this.ballobj.speed = 0;
        this.ballobj.y = height * 3.2;
    }

    //woofer
    this.woof.rad += this.woof.sp * animationDeltaTime;
    if(this.woof.rad >= 80){
        this.woof.sp = this.woof.reck_speed;
    }
    if(this.woof.rad <= 70){
        this.woof.sp = this.woof.attack_speed;
    }

    //lights
    this.lights.forEach((light) => {
        light.start += light.speed * animationDeltaTime;
        if(light.start > light.left || light.start < light.right){
            light.speed = light.speed * -1;
            light.start = (Math.abs(light.start - light.left) > Math.abs(light.start - light.right)) ? light.right : light.left;
        }
    });

    //schedule and make constraint

    window.requestAnimationFrame(this.boundUpdate);
}

var animation_cont_layer = new Animation_cont_layer();
animation_cont_layer.update();

