import { Component, ElementRef, AfterViewInit, OnDestroy, input } from '@angular/core';

@Component({
  selector: 'app-reveal',
  template: `<ng-content />`,
  host: { '[class]': '"reveal"', '[style.--reveal-delay]': 'delay() + "ms"' },
})
export class RevealComponent implements AfterViewInit, OnDestroy {
  delay = input(0);
  private io?: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          this.io?.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    this.io.observe(this.el.nativeElement);
  }

  ngOnDestroy() { this.io?.disconnect(); }
}
