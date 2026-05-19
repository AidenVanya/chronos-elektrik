import { Component, ElementRef, AfterViewInit, OnDestroy, input, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `{{ display() }}`,
})
export class AnimatedCounterComponent implements AfterViewInit, OnDestroy {
  to = input.required<number>();
  duration = input(1600);
  decimals = input(0);
  prefix = input('');
  suffix = input('');

  display = signal('0');
  private io?: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.display.set(this.prefix() + (0).toFixed(this.decimals()) + this.suffix());
    this.io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / this.duration());
            const eased = 1 - Math.pow(1 - t, 3);
            this.display.set(this.prefix() + (this.to() * eased).toFixed(this.decimals()) + this.suffix());
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          this.io?.unobserve(e.target);
        }
      });
    }, { threshold: 0.4 });
    this.io.observe(this.el.nativeElement);
  }

  ngOnDestroy() { this.io?.disconnect(); }
}
