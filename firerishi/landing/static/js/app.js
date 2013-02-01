  
  $(function() {
    var chart;
    //Everyday
    Highcharts.setOptions({
      colors: ['#7D6E78', '#98A17A', '#C9AC68']
    });
    chart = new Highcharts.Chart({
      chart: {
        renderTo: 'everyday-chart',
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
      },
      credits:{
        enabled:false
      },
      title: {
        text: 'Everyday...'
      },       
      tooltip: {
        formatter: function(){return false;}
      },            
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            color: '#999',                        
            formatter: function() {
              return '<b>'+ this.point.name +'</b>';
            }
          }
        }
      },
      series: [{
        type: 'pie',
        name: 'everyday',
        data: [
            ['Develop',   50],
            ['Design',    30],                   
            ['Ideate',    20]
        ]
      }]
    });
    //Ideate
    Highcharts.setOptions({
      colors: ['#DFCDA4', '#D4BD86', '#E9DEC3']
    });
    chart = new Highcharts.Chart({
      chart: {
        renderTo: 'ideate-with',
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
      },
      credits: {
        enabled: false
      },
      title: {
        text: 'I ideate with...'
      },
      tooltip: {
        formatter: function () { return false; }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            color: '#999',
            formatter: function () {
              return '<b>' + this.point.name + '</b>';
            }
          }
        }
      },
      series: [{
        type: 'pie',
        name: 'ideate',
        data: [
            ['Evernote', 30],
            ['Solitude', 50],
            ['Moleskine', 20]
        ]
      }]
    });
    //Design
    Highcharts.setOptions({
      colors: ['#E5E7DE', '#B2B89B', '#CBD0BD']
    });
    chart = new Highcharts.Chart({
      chart: {
        renderTo: 'design-with',
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
      },
      credits: {
        enabled: false
      },
      title: {
        text: 'I design with...'
      },
      tooltip: {
        formatter: function () { return false; }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            color: '#999',
            formatter: function () {
              return '<b>' + this.point.name + '</b>';
            }
          }
        }
      },
      series: [{
        type: 'pie',
        name: 'design',
        data: [
            ['Pixelmator', 20],
            ['MS PPT', 30],
            ['Ai', 50]
        ]
      }]
    });
    //Develop
    Highcharts.setOptions({
      colors: ['#E5E1E3', '#CBC4C6', '#B2A6AA', '#98898D']
    });
    chart = new Highcharts.Chart({
      chart: {
        renderTo: 'develop-with',
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
      },
      credits: {
        enabled: false
      },
      title: {
        text: 'I develop with...'
      },
      tooltip: {
        formatter: function () { return false; }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            color: '#999',
            formatter: function () {
              return '<b>' + this.point.name + '</b>';
            }
          }
        }
      },
      series: [{
        type: 'pie',
        name: 'develop',
        data: [
            ['jquery, knockout', 25],
            ['django', 25],
            ['.NET', 25],
            ['HTML5 + CSS3', 25]
        ]
      }]
    });

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