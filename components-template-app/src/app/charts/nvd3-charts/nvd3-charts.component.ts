import { Component, ViewEncapsulation, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-nvd3-charts',
  templateUrl: './nvd3-charts.component.html',
  styleUrls: [
    './nvd3-charts.component.scss',
    '../../../../node_modules/nvd3/build/nv.d3.css'
],
  encapsulation: ViewEncapsulation.None
})
export class Nvd3ChartsComponent {

  data = undefined;
  options = undefined;
  isBrowser: boolean;

  // Library references
  // https://github.com/krispo/ng2-nvd3
  // http://nvd3-community.github.io/nvd3/examples/documentation.html <- NVD3 docs

  constructor(
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.data = route.snapshot.data['data'].data;
    this.options = route.snapshot.data['data'].options;
  }

  toggleDonutChart(donut): void {
    const options = donut.options;
    options.chart.donut = !options.chart.donut;
    donut.updateWithOptions(options);
  }

}
