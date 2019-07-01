import { Component, Input, ElementRef, Renderer2, ViewEncapsulation, ViewChild, OnChanges } from '@angular/core';

@Component({
  selector: 'app-preload-image',
  templateUrl: './preload-image.component.html',
  styleUrls: [
    './styles/preload-image.styles.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class PreloadImageComponent implements OnChanges {
  _src = '';
  _title = '';
  _alt = '';
  _class = '';
  _ratio: { w: number, h: number };
  @ViewChild('_img') _imageElement: ElementRef;

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {}

  @Input() set alt(val: string) {
    this._alt = (val !== undefined && val !== null) ? val : '';
  }

  @Input() set title(val: string) {
    this._title = (val !== undefined && val !== null) ? val : '';
  }

  @Input() set class(val: string) {
    this._class = (val !== undefined && val !== null) ? val : '';
  }

  @Input() set src(val: string) {
    this._src = (val !== undefined && val !== null) ? val : '';
  }

  @Input() set ratio(ratio: { w: number, h: number }) {
    this._ratio = ratio || null;
  }

  ngOnChanges() {
    const ratio_height = (this._ratio.h / this._ratio.w * 100) + '%';
    // Conserve aspect ratio (see: http://stackoverflow.com/a/10441480/1116959)
    // this._renderer.setStyle(this._elementRef.nativeElement, 'padding-bottom', ratio_height);
    this._renderer.setStyle(this._elementRef.nativeElement, 'padding', '0px 0px ' + ratio_height + ' 0px');
    this._update();
  }

  _update() {
    this._loaded(false);
  }

  _loaded(isLoaded: boolean) {
    if (isLoaded) {
      this._renderer.addClass(this._elementRef.nativeElement, 'img-loaded');
    } else {
      this._renderer.removeClass(this._elementRef.nativeElement, 'img-loaded');
    }
  }
}
