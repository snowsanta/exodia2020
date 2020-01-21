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


var beach_back = new Image();
beach_back.src = './renders/beach_back.jpg';
var sand = new Image();
sand.src = './renders/sand.png';
var forage_li = new Image();
forage_li.src = './renders/forage_light.png';
var forage = new Image();
forage.src = './renders/forage_dark.png';

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


drawimg(beach_back, ctx, 0, -150);
drawimg(sand, ctx, 0, 90);


ctx_back.fillRect(0,0,canv_back.scrollHeight,canv_back.scrollWidth);


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
Animation_forage.prototype.update = function() {

    var run__anim = 1;
    var flg = 1;
    var flg3 = 1;
     

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
    if(this.forage_d.fac >= 1.2 && flg){
        flg = 0;
        run__anim = 0;
    };
    
    if(this.forage_d.fac > 2 && !flg && flg3){
        run__anim = 0;
        flg3 = 0;
        this.forage_d.speed = this.forage_d.speed * -1;
        this.forage_l.speed = this.forage_l.speed * -1;
    };
    
    if(this.forage_d.fac <= 1.2 && !flg && !flg3){
        run__anim = 0;
        flg3 = 1;
        this.forage_d.speed = this.forage_d.speed * -1;
        this.forage_l.speed = this.forage_l.speed * -1;
    };

    if(run__anim){
        window.requestAnimationFrame(this.boundUpdate);
    }
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
var animation_forage = new Animation_forage();
animation_forage.update();

var lastScrollTop = 0;
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
    animation_forage.update();
   } else {
    animation_forage.update();
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);


var animation_sun = new Animation_sun();
animation_sun.update();

// drawimg(forage, ctx2, -100, -100, 1.2, 1.2);


// layer3





