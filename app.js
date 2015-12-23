var main = function(){
      //Dropdown menu commmand
      $('.dropdown-toggle').click(function(){
        $('.dropdown-menu').toggle();
      }); // end of drop down menu commmand

      $('.arrow-next').click(function(){     //when click next arrow button
        var currentSlide = $('.active-slide'); // current slide
        var nextSlide = currentSlide.next(); //make current slide forward

        if(nextSlide.length === 0){ //if nextSlide is empty
          nextSlide = $('.slide').first(); // go back to first slide
        }

        currentSlide.fadeOut(1000).removeClass('active-slide'); //fade out current slide by 800ms
        nextSlide.fadeIn(1000).addClass('active-slide'); //fade in next slide by 800ms;
      }); //end of next arrow command

      $()
}

$(document).ready(main);
