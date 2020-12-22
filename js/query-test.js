

var timer = {};

// menu 1 slider and menu 2
$('.item_menu1').hover(function(){

    var tag=$(this);
    var timerAttr=tag.attr('data-time');
    clearTimeout(timer[timerAttr]);
//  timer[timerAttr] = timerAttr;
    timer[timerAttr] = setTimeout(function() {
        $(' > .menu2',tag).fadeIn(100);
    },500); 

},function(){

    var tag=$(this);
    var timerAttr=tag.attr('data-time');
    clearTimeout(timer[timerAttr]);
//  timer[timerAttr] = timerAttr;
    timer[timerAttr] = setTimeout(function() {
        $(' > .menu2',tag).fadeOut(100);
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
        $(' > .menut',tag).slideDown();
    },300); 

},function(){

    var tag=$(this);
    var menu3Attr=tag.attr('data-timemenut');
    clearTimeout(menut[menu3Attr]);
//  timer[timerAttr] = timerAttr;
    menut[menu3Attr] = setTimeout(function() {
        $(' > .menut',tag).slideUp();
    },400); 
});


function newFunction(timerAttr) {
    return timer[timerAttr];
}

