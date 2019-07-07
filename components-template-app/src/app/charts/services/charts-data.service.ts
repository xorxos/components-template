import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

@Injectable()
export class ChartsDataService {

  ng2Data = undefined;
  ng2Nvd3Data = undefined;

  ng2tooltipOptions = {
    backgroundColor: '#fff',
    titleFontFamily: 'Lato',
    titleFontSize: 14,
    titleFontStyle: 'bold',
    titleFontColor: '#9012fe',
    titleSpacing: 10,
    titleMarginBottom: 7,
    bodyFontFamily: 'Lato',
    bodyFontSize: 14,
    bodyFontStyle: 'bold',
    bodyFontColor: '#9b9b9b',
    bodySpacing: 10,
    borderColor: '#9012fe',
    borderWidth: 1,
    caretSize: 0,
    xPadding: 15,
    yPadding: 15
  };

  ng2Options = {
    radarChartOptions: { responsive: true, tooltips: this.ng2tooltipOptions },
    doughnutChartOptions: { responsive: true, tooltips: this.ng2tooltipOptions, legend: false },
    lineChartOptions: { responsive: true, tooltips: this.ng2tooltipOptions },
    pieChartOptions: { responsive: true, tooltips: this.ng2tooltipOptions, legend: false },
    barChartOptions: {
      scaleShowVerticalLines: false,
      responsive: true,
      tooltips: this.ng2tooltipOptions,
      scales: {
        yAxes: [{ ticks: { beginAtZero: true } }]
      }
    }
  };

  ng2Nvd3Options = {
    // ********************* LINE CHART *********************
    lineChart: {
      chart: {
        type: 'lineChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 40,
          left: 55
        },
        x: d => d.x,
        y: d => d.y,
        useInteractiveGuideline: true,
        dispatch: {
          stateChange: e => { console.log('stateChange'); },
          changeState: e => { console.log('changeState'); },
          tooltipShow: e => { console.log('tooltipShow'); },
          tooltipHide: e => { console.log('tooltipHide'); }
        },
        xAxis: {
          axisLabel: 'October 2017'
        },
        yAxis: {
          axisLabel: 'Users',
          tickFormat: d => d3.format('')(d),
          axisLabelDistance: -10
        },
        callback: chart => { console.log('!!! lineChart callback !!!'); }
      }
    },

    // ********************* BAR CHART *********************
    barChart: {
      chart: {
        type: 'discreteBarChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 50,
          left: 55
        },
        x: d => d.label,
        y: d => d.value,
        showValues: true,
        valueFormat: d => d3.format('')(d),
        duration: 500,
        xAxis: {
          axisLabel: '2016'
        },
        yAxis: {
          axisLabel: 'Thousand dollars',
          axisLabelDistance: -10,
          tickFormat: d => d3.format('')(d)
        }
      }
    },

    // ********************* MULTI BAR CHART *********************
    multiBarChart: {
      chart: {
        type: 'multiBarChart',
        height: 450,
        margin : {
          top: 100,
          right: 20,
          bottom: 45,
          left: 45
        },
        clipEdge: true,
        duration: 500,
        stacked: true,
        xAxis: {
          axisLabel: 'October 2017',
          showMaxMin: true,
          tickFormat: d => d3.format('')(d)
        },
        yAxis: {
          axisLabel: 'New Users',
          axisLabelDistance: -20,
          tickFormat: d => d3.format('')(d)
        }
      }
    },

    // ********************* MULTI BAR HORIZONTAL CHART *********************
    multiBarHorizontalChart: {
      chart: {
        type: 'multiBarHorizontalChart',
        height: 450,
        x: d => d.label,
        y: d => d.value,
        showControls: true,
        showValues: true,
        duration: 500,
        xAxis: {
          showMaxMin: false
        },
        yAxis: {
          axisLabel: 'Products sold',
          tickFormat: d => d3.format('')(d)
        }
      }
    },

    // ********************* LINE PLUS BAR CHART *********************
    linePlusBarWithFocusChart: {
      chart: {
        type: 'linePlusBarChart',
        height: 500,
        margin: {
          top: 30,
          right: 50,
          bottom: 50,
          left: 50
        },
        bars: {
          forceY: [0]
        },
        bars2: {
          forceY: [0]
        },
        xAxis: {
          axisLabel: 'Time',
          tickFormat: d => d3.time.format('%x')(new Date(d)),
        },
        x2Axis: {
          tickFormat: d => d3.time.format('%x')(new Date(d)),
          showMaxMin: false
        },
        y1Axis: {
          axisLabel: 'Items Sold',
          tickFormat: d => '#' + d3.format('')(d),
          axisLabelDistance: 12
        },
        y2Axis: {
          axisLabel: 'Earnings',
          tickFormat: d => '$' + d3.format('f')(d)
        }
        // y3Axis: {
        //   tickFormat: d => d3.format(',f')(d)
        // },
        // y4Axis: {
        //   tickFormat: d => '$' + d3.format(',.2f')(d)
        // }
      }
    },

    // ********************* DONUT CHART *********************
    donutChart: {
      chart: {
        type: 'pieChart',
        height: 450,
        donut: true,
        x: d => d.key,
        y: d => d.y,
        showLabels: true,
        // pie: { // You can set up the start and end angles for the donut chart
        //   startAngle: d => d.startAngle / 2 - Math.PI / 2,
        //   endAngle: d => d.endAngle / 2 - Math.PI / 2
        // },
        duration: 500,
        legend: {
          margin: {
            top: 5,
            right: 20,
            bottom: 5,
            left: 0
          }
        }
      }
    }
  };

  constructor(
    private http: HttpClient,
    @Inject(APP_BASE_HREF) private baseHref: string
  ) {}

  getNg2ChartsData(): Promise<any> {
    if (this.ng2Data) {
      return new Promise((resolve, reject) => {
        resolve(this.ng2Data);
      });
    } else {
      return new Promise((resolve, reject) => {
        this.http.get(this.baseHref + '/assets/data/ng2_charts.json').subscribe(
          data => {
            this.ng2Data = data;
            this.ng2Data.radarChart.options = this.ng2Options.radarChartOptions;
            this.ng2Data.doughnutChart.options = this.ng2Options.doughnutChartOptions;
            this.ng2Data.lineChart.options = this.ng2Options.lineChartOptions;
            this.ng2Data.pieChart.options = this.ng2Options.pieChartOptions;
            this.ng2Data.barChart.options = this.ng2Options.barChartOptions;
            resolve (this.ng2Data);
          },
          err => reject()
        );
      });
    }
  }

  getNg2Nvd3ChartsData(): Promise<any> {
    if (this.ng2Nvd3Data) {
      return new Promise((resolve, reject) => {
        resolve({ data: this.ng2Nvd3Data, options: this.ng2Nvd3Options });
      });
    } else {
      return new Promise((resolve, reject) => {
        this.http.get(this.baseHref + '/assets/data/nvd3_charts.json').subscribe(
          data => {
            this.ng2Nvd3Data = data;
            resolve ({ data: this.ng2Nvd3Data, options: this.ng2Nvd3Options });
          },
          err => reject()
        );
      });
    }
  }
}
