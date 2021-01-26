

var timer = {};

// menu 1 slider and menu 2
$('.item_menu1').hover(function(){

    var tag=$(this);
    var timerAttr=tag.attr('data-time');
    clearTimeout(timer[timerAttr]);
//  timer[timerAttr] = timerAttr;
    timer[timerAttr] = setTimeout(function() {
        $(' > .menu2',tag).fadeIn(100);
        tag.addClass('active_menu');
    },500); 

},function(){

    var tag=$(this);
    var timerAttr=tag.attr('data-time');
    clearTimeout(timer[timerAttr]);
//  timer[timerAttr] = timerAttr;
    timer[timerAttr] = setTimeout(function() {
        $(' > .menu2',tag).fadeOut(100);
        tag.removeClass('active_menu');
    },600); 

});

/******************************************************************************************************/
//menu 3

var menut={};

$('.item_menu2').hover(function(){

    var tag=$(this);
    var menu3Attr=tag.attr('data-timemenut');
    clearTimeout(menut[menu3Attr]);
//  timer[timerAttr] = timerAttr;
    menut[menu3Attr] = setTimeout(function() {
        tag.addClass('active_submenu');
        $(' > .menut',tag).fadeIn(100);
    },300); 

},function(){

    var tag=$(this);
    var menu3Attr=tag.attr('data-timemenut');
    clearTimeout(menut[menu3Attr]);
//  timer[timerAttr] = timerAttr;
    menut[menu3Attr] = setTimeout(function() {
        tag.removeClass('active_submenu');
        $(' > .menut',tag).fadeOut();
        
    },400); 
});


function newFunction(timerAttr) {
    return timer[timerAttr];
}


var sliderTag = $('.slider_content');
var items = sliderTag.find('.slider_items');
var navItems= $('.navigator_items').find('li');
var countItems = items.length;
var sliderItems= 0;
function slider_show(){
    // alert(items.eq(1));
    // console.log(countItems);
    //items.hide();
    items.fadeOut(300);
    items.eq(sliderItems).fadeIn(600);
    
    navItems.removeClass('active_slider');
    navItems.eq(sliderItems).addClass('active_slider');

    sliderItems++;

    if (sliderItems > (countItems - 1)) {
        sliderItems=0;
    }
    
}

var sliderTimer = setInterval(function(){
    slider_show();
},5000);

$(navItems).hover(function(){
    clearInterval(sliderTimer);
},function(){
    sliderTimer = setInterval(function(){
        slider_show();},5000);
});

// $('.btn').click(function(){
//     slider_show();
// });

function nextslide(){
    slider_show();
}

$('.nextslide').click(function(){
    nextslide();
});


function prevslide(){
    if (sliderItems < 0){
        sliderItems=items.length - 1;//reset slider to end of slider
    }
    sliderItems = sliderItems - 2 ;
    slider_show();
}
$('.prevslide').click(function(){
    prevslide();
});

$(document).ready(function(){
    slider_show();
});

function goToSlide(index){
    sliderItems=index;
    slider_show();
}

$('.navigator_items li').hover(function(){
    var index = $(this).index();
    goToSlide(index);
},function(){});




var sliderItemTwo = $('.logo_slider2').find('.item_slider2');
var sliderNavTwo = $('.right_slider_nav').find('li');
var oldPrice = $('.old_price').find('span');
var newPrice = $('.new_price').find('span');
var shortInfo = $('.short_info').find('div');
var sliderNumTwo = 0;

function slider2() {

    sliderItemTwo.hide(200);
    oldPrice.hide(200);
    newPrice.hide(200);
    shortInfo.hide(200);
    sliderItemTwo.eq(sliderNumTwo).fadeIn();
    oldPrice.eq(sliderNumTwo).fadeIn();
    newPrice.eq(sliderNumTwo).fadeIn();
    shortInfo.eq(sliderNumTwo).fadeIn();
    sliderNavTwo.removeClass('active_slider2');
    sliderNavTwo.eq(sliderNumTwo).addClass('active_slider2');
    sliderNumTwo++;
    if (sliderNumTwo > sliderNavTwo.length - 1) {
        sliderNumTwo=0;
    }
    if (sliderNumTwo < 0) {
        sliderNumTwo = sliderNavTwo.length - 1;       
    }
}

slider2();
var sliderTowTimer=setInterval(function(){
    slider2();
},5000);

function gotoSliderTwoslide(sTi){
    sliderNumTwo = sTi;
    slider2();
}

$('.right_slider_nav li').click(function(){
    var sTi= $(this).index();
    gotoSliderTwoslide(sTi);
});


$('.flipTimer').flipTimer({ direction: 'down', date: 'Jan 27, 2021 03:34:00'});