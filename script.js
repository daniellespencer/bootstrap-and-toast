
//var chart = require('tui-chart'); /* CommonJS in Node.js */
//var chart = tui.chart; /* namespace */

const snippet = require('tui-code-snippet'); /* CommonJS */


var container = document.getElementById('chart-area');
var data = {
    categories: ['Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct'],
    series: {
        column: [
            {
                name: 'Seoul',
                data: [11.3, 17.0, 21.0, 24.4, 25.2, 20.4, 13.9]
            },
            {
                name: 'NewYork',
                data: [9.9, 16.0, 21.2, 24.2, 23.2, 19.4, 13.3]
            },
            {
                name: 'Sydney',
                data: [18.3, 15.2, 12.8, 11.8, 13.0, 15.2, 17.6]
            },
            {
                name: 'Moskva',
                data: [4.4, 12.2, 16.3, 18.5, 16.7, 10.9, 4.2]
            }
        ],
        line: [
            {
                name: 'Average',
                data: [11, 15.1, 17.8, 19.7, 19.5, 16.5, 12.3]
            }
        ]
    }
};
var options = {
    chart: {
        width: 1160,
        height: 540,
        title: '24-hr Average Temperature'
    },
    yAxis: [{
       title: 'Temperature (Celsius)',
       chartType: 'column',
       labelMargin: 15
    }, {
       title: 'Average',
       chartType: 'line',
       labelMargin: 15
    }],
    xAxis: {
        title: 'Month'
    },
    series: {
        line: {
            showDot: true
        }
    },
    tooltip: {
        grouped: true,
        suffix: '°C'
    }
};
var theme = {
    series: {
        column: {
            colors: [
                '#83b14e', '#458a3f', '#295ba0', '#2a4175', '#289399'
            ]
        },
        line: {
            colors: ['#333']
        }
    }
};
// For apply theme
// tui.chart.registerTheme('myTheme', theme);
// options.theme = 'myTheme';
chart = tui.chart.comboChart(container, data, options);