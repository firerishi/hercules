  
  $(function() {
   

    // Smooth Scrolling to sections
    $('nav#about-nav ul li a').bind('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'linear');
      event.preventDefault();
    });

    // Smooth Scrolling to top
      $('#backtop').bind('click', function (event) {
       $("html, body").animate({
          scrollTop: 0
        }, 1000, 'linear');
        event.preventDefault();
      });

    // Slide toggle the main nav on click in tablet/mobile environment
    $('#main-responsive-nav').click(function() {
      $('#main-nav').slideToggle();      
    });


    // Show (always) the main nav menu when the window width is >= 1000px
    $(window).resize(function() {
      var winWidth = $(window).width();
      if (winWidth >= 1000) {
        $('#main-nav').show();
      }
      else {
       $('#main-nav').hide(); 
      }
    });

    // Backtop arrow/button should show only when scrolled down
    window.onscroll = scroll;
    function scroll () {
      var xoffset = window.pageXOffset;
      var yoffset = window.pageYOffset;
     console.log("scroll event detected! " + xoffset + " " + yoffset);     
     if (yoffset > 0) {
      $("#backtop").show();
     }
     else { 
      $("#backtop").hide();
     }
    }




    // $(function(){
    //   $('#container').masonry({
    //     // options
    //     itemSelector : '.item',
    //     columnWidth : 240
    //   });
    // });

    

    


  });