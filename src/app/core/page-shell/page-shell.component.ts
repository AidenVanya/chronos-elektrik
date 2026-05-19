import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-page-shell',
  imports: [NavComponent, FooterComponent],
  template: `
    <div style="position:relative;z-index:1;">
      <app-nav />
      <ng-content />
      <app-footer />
    </div>
  `,
})
export class PageShellComponent {}
