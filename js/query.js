

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
        $(' > .menut',tag).slideDown();
    },300); 

},function(){

    var tag=$(this);
    var menu3Attr=tag.attr('data-timemenut');
    clearTimeout(menut[menu3Attr]);
//  timer[timerAttr] = timerAttr;
    menut[menu3Attr] = setTimeout(function() {
        tag.removeClass('active_submenu');
        $(' > .menut',tag).slideUp();
        
    },400); 
});


function newFunction(timerAttr) {
    return timer[timerAttr];
}


var sliderTag = $('.slider_content');
var items= sliderTag.find('.slider_items');
var sliderItems= 1;
function slider(){
    items.eq(sliderItems - 1).hide();
    items.eq(sliderItems - 1).fadeIn(100);
    sliderItems++;
    alert('aa');
}
$('.btn').hover(slider());
// $(document).ready(function(){
    
//     while(sliderItems <= 5){
    
//         slider();
//         sleep(2000);
//     }
    
// });

// function sleep(milliseconds) {
//     const date = Date.now();
//     let currentDate = null;
//     do {
//       currentDate = Date.now();
//     } while (currentDate - date < milliseconds);
//   }