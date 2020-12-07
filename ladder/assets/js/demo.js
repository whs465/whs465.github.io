type = ['', 'info', 'success', 'warning', 'danger'];

demo = {
  initPickColor: function () {
    $('.pick-class-label').click(function () {
      var new_class = $(this).attr('new-class');
      var old_class = $('#display-buttons').attr('data-class');
      var display_div = $('#display-buttons');
      if (display_div.length) {
        var display_buttons = display_div.find('.btn');
        display_buttons.removeClass(old_class);
        display_buttons.addClass(new_class);
        display_div.attr('data-class', new_class);
      }
    });
  },

  checkScrollForTransparentNavbar: debounce(function () {
    $navbar = $('.navbar[color-on-scroll]');
    scroll_distance = $navbar.attr('color-on-scroll') || 500;

    if ($(document).scrollTop() > scroll_distance) {
      if (transparent) {
        transparent = false;
        $('.navbar[color-on-scroll]').removeClass('navbar-transparent');
        $('.navbar[color-on-scroll]').addClass('navbar-default');
      }
    } else {
      if (!transparent) {
        transparent = true;
        $('.navbar[color-on-scroll]').addClass('navbar-transparent');
        $('.navbar[color-on-scroll]').removeClass('navbar-default');
      }
    }
  }, 17),

  initDocChartist: function () {
    var dataSales = {
      labels: [
        '9:00AM',
        '12:00AM',
        '3:00PM',
        '6:00PM',
        '9:00PM',
        '12:00PM',
        '3:00AM',
        '6:00AM',
      ],
      series: [
        [287, 385, 490, 492, 554, 586, 698, 695, 752, 788, 846, 944],
        [67, 152, 143, 240, 287, 335, 435, 437, 539, 542, 544, 647],
        [23, 113, 67, 108, 190, 239, 307, 308, 439, 410, 410, 509],
      ],
    };

    var optionsSales = {
      lineSmooth: false,
      low: 0,
      high: 800,
      showArea: true,
      height: '245px',
      axisX: {
        showGrid: false,
      },
      lineSmooth: Chartist.Interpolation.simple({
        divisor: 3,
      }),
      showLine: false,
      showPoint: false,
    };

    var responsiveSales = [
      [
        'screen and (max-width: 640px)',
        {
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            },
          },
        },
      ],
    ];

    Chartist.Line('#chartHours', dataSales, optionsSales, responsiveSales);

    var data = {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'Mai',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      series: [
        [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
        [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695],
      ],
    };

    var options = {
      seriesBarDistance: 10,
      axisX: {
        showGrid: false,
      },
      height: '245px',
    };

    var responsiveOptions = [
      [
        'screen and (max-width: 640px)',
        {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            },
          },
        },
      ],
    ];

    Chartist.Bar('#chartActivity', data, options, responsiveOptions);

    var dataPreferences = {
      series: [[25, 30, 20, 25]],
    };

    var optionsPreferences = {
      donut: true,
      donutWidth: 40,
      startAngle: 0,
      total: 100,
      showLabel: false,
      axisX: {
        showGrid: false,
      },
    };

    Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);

    Chartist.Pie('#chartPreferences', {
      labels: ['62%', '32%', '6%'],
      series: [62, 32, 6],
    });
  },

  initChartist: function () {
    var dataSales = {
      labels: [
        '9:00AM',
        '12:00AM',
        '3:00PM',
        '6:00PM',
        '9:00PM',
        '12:00PM',
        '3:00AM',
        '6:00AM',
      ],
      series: [
        [287, 385, 490, 492, 554, 586, 698, 695, 752, 788, 846, 944],
        [67, 152, 143, 240, 287, 335, 435, 437, 539, 542, 544, 647],
        [23, 113, 67, 108, 190, 239, 307, 308, 439, 410, 410, 509],
      ],
    };

    var optionsSales = {
      lineSmooth: false,
      low: 0,
      high: 800,
      showArea: true,
      height: '245px',
      axisX: {
        showGrid: false,
      },
      lineSmooth: Chartist.Interpolation.simple({
        divisor: 3,
      }),
      showLine: false,
      showPoint: false,
    };

    var responsiveSales = [
      [
        'screen and (max-width: 640px)',
        {
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            },
          },
        },
      ],
    ];

    Chartist.Line('#chartHours', dataSales, optionsSales, responsiveSales);

    var data = {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'Mai',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      series: [
        [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
        [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695],
      ],
    };

    var options = {
      seriesBarDistance: 10,
      axisX: {
        showGrid: false,
      },
      height: '245px',
    };

    var responsiveOptions = [
      [
        'screen and (max-width: 640px)',
        {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            },
          },
        },
      ],
    ];

    Chartist.Bar('#chartActivity', data, options, responsiveOptions);

    var dataPreferences = {
      series: [[25, 30, 20, 25]],
    };

    var optionsPreferences = {
      donut: true,
      donutWidth: 40,
      startAngle: 0,
      total: 100,
      showLabel: false,
      axisX: {
        showGrid: false,
      },
    };

    Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);

    Chartist.Pie('#chartPreferences', {
      labels: ['62%', '32%', '6%'],
      series: [62, 32, 6],
    });
  },

  initGoogleMaps: function () {
    var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
    var mapOptions = {
      zoom: 13,
      center: myLatlng,
      scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
      styles: [
        {
          featureType: 'water',
          stylers: [{ saturation: 43 }, { lightness: -11 }, { hue: '#0088ff' }],
        },
        {
          featureType: 'road',
          elementType: 'geometry.fill',
          stylers: [
            { hue: '#ff0000' },
            { saturation: -100 },
            { lightness: 99 },
          ],
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#808080' }, { lightness: 54 }],
        },
        {
          featureType: 'landscape.man_made',
          elementType: 'geometry.fill',
          stylers: [{ color: '#ece2d9' }],
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry.fill',
          stylers: [{ color: '#ccdca1' }],
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#767676' }],
        },
        {
          featureType: 'road',
          elementType: 'labels.text.stroke',
          stylers: [{ color: '#ffffff' }],
        },
        { featureType: 'poi', stylers: [{ visibility: 'off' }] },
        {
          featureType: 'landscape.natural',
          elementType: 'geometry.fill',
          stylers: [{ visibility: 'on' }, { color: '#b8cb93' }],
        },
        { featureType: 'poi.park', stylers: [{ visibility: 'on' }] },
        { featureType: 'poi.sports_complex', stylers: [{ visibility: 'on' }] },
        { featureType: 'poi.medical', stylers: [{ visibility: 'on' }] },
        {
          featureType: 'poi.business',
          stylers: [{ visibility: 'simplified' }],
        },
      ],
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var marker = new google.maps.Marker({
      position: myLatlng,
      title: 'Hello World!',
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);
  },

  showNotification: function (from, align) {
    color = Math.floor(Math.random() * 4 + 1);

    $.notify(
      {
        icon: 'pe-7s-gift',
        message:
          'Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for every web developer.',
      },
      {
        type: type[color],
        timer: 4000,
        placement: {
          from: from,
          align: align,
        },
      }
    );
  },
};

$(document).ready(function () {
  animateDiv($('.tortu'));
});

function makeNewPosition($container) {
  // Get viewport dimensions (remove the dimension of the div)
  var h = $container.height() - 50;
  var w = $container.width() - 50;

  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);

  return [nh, nw];
}

function animateDiv($target) {
  var newq = makeNewPosition($target.parent());
  var oldq = $target.offset();
  var speed = calcSpeed([oldq.top, oldq.left], newq);

  $target.animate(
    {
      top: newq[0],
      left: newq[1],
    },
    speed,
    function () {
      animateDiv($target);
    }
  );
}

function calcSpeed(prev, next) {
  var x = Math.abs(prev[1] - next[1]);
  var y = Math.abs(prev[0] - next[0]);

  var greatest = x > y ? x : y;

  var speedModifier = 0.001;

  var speed = Math.ceil(greatest / speedModifier);

  return speed;
}

// chart colors
var colors = ['#0A7533', '#FF3A2F', '#333333', '#c3e6cb', '#dc3545', '#6c757d'];

/* large line chart */
var chLine = document.getElementById('chLine');
var chartData = {
  labels: [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
    '32',
    '33',
    '34',
    '35',
    '36',
    '37',
    '38',
    '39',
    '40','41',
  ],
  datasets: [
    {
      label: 'Singles',
      fill: false,
      data: [
        0,
        0,
        1,
        1,
        1,
        2,
        2,
        3,
        3,
        6,
        7,
        7,
        7,
        7,
        7,
        7,
        8,
        9,
        9,
        11,
        11,
        13,
        13,
        13,
        13,
        13,
        13,
        13,
        13,
        13,
        13,
        13,
        13,
        13,
        13,
        13,
        13,
        13,
        13,13,
      ],
      backgroundColor: 'transparent',
      borderColor: colors[0],
      borderWidth: 2,
      pointBackgroundColor: colors[0],
    },
    {
      label: 'Doubles',
      fill: false,
      data: [
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        2,
        2,
        3,
        3,
        4,
        5,
        5,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,7,
      ],
      backgroundColor: colors[3],
      borderColor: colors[1],
      borderWidth: 2,
      pointBackgroundColor: colors[1],
    },
  ],
};

if (chLine) {
  new Chart(chLine, {
    type: 'line',
    data: chartData,
    options: {
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Days',
            },
            ticks: {
              beginAtZero: false,
              precision: 0,
              callback: function (item, index, items) {
                if (index === 0) return item;
                if ((index + 1) % 2 === 0) return item;
              },
            },
          },
        ],
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'Matches',
            },
            ticks: {
              precision: 0,
              callback: function (item, index, items) {
                if (index === 0) return item;
                if ((index + 1) % 2 === 0) return item;
              },
            },
          },
        ],
      },
      legend: {
        display: true,
      },
    },
  });
}

var ctx = document.getElementById('chPie').getContext('2d');
var chPie = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['No change', 'Change'],
    datasets: [
      {
        backgroundColor: colors,
        borderWidth: 2,
        data: [8, 12],
      },
    ],
  },
});
