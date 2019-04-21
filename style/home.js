var x=0;
$(function() {
        var item = $('#display').children('li');   
        var len=item.length;
        var i=0;
        g=function(){
        	item.eq(i).fadeOut(300,function(){
        		i++;
        		if(i===len){i=0;}
        	});

        	item.eq(i).fadeIn(300);
        }
        item.not(':first').hide();
    
        setInterval( g, 3000 );
    });

var l=0;
$(window).scroll(function(){
var f=$(this).scrollTop();
if(f>l){
	$("nav").fadeIn(3000,function(){
		$(this).addClass("glass");
	});
}
else if(f==0){
	$("nav").removeClass("glass");
}
l=f;
});


//slideshow
