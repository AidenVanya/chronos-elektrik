import { Component } from '@angular/core';

@Component({
  selector: 'app-marquee',
  template: `
    <div class="marquee">
      <div class="marquee-track" style="gap:48px;">
        <ng-content /><ng-content /><ng-content />
      </div>
    </div>
  `,
})
export class MarqueeComponent {}
