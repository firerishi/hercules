  
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
  });