var main = function () {
    //Dropdown menu commmand
    $('.dropdown-toggle').click(function () {
        $('.dropdown-menu').toggle();
    }); // end of drop down menu commmand

    $('.arrow-next').click(function () { //when click next arrow button
        var currentSlide = $('.active-slide'); // current slide
        var nextSlide = currentSlide.next(); //make current slide forward

        if (nextSlide.length === 0) { //if nextSlide is empty
            nextSlide = $('.slide').first(); // go back to first slide
        }

        currentSlide.fadeOut(1000).removeClass('active-slide'); //fade out current slide by 800ms
        nextSlide.fadeIn(1000).addClass('active-slide'); //fade in next slide by 800ms;

        //next dot command
        var currentDot = $('.active-dot'); 
        var nextDot = currentDot.next();

        if (nextDot.length === 0) {
            nextDot = $('.dot').first();
        }

        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');

    }); //end of next arrow and next dots command

    $('.arrow-prev').click(function(){
        var currentSlide = $('.active-slide');
        var prevSlide = currentSlide.prev();
        
        var currentDot = $('.active-dot');
        var prevDot = currentDot.prev();
        
        if(prevSlide.length === 0){
            prevSlide = $('.slide').last();
            prevDot = $('.dot').last();
        }
        
        currentSlide.fadeOut(800).removeClass('active-slide');
        prevSlide.fadeIn(800).addClass('active-slide');
        
        currentDot.removeClass('active-dot');
        prevDot.addClass('active-dot');
    });
    
    $('').click(function(){
        
    });
}

$(document).ready(main);