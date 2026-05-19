import { Component, input } from '@angular/core';
import { EyebrowComponent } from '../eyebrow/eyebrow.component';

@Component({
  selector: 'app-section',
  imports: [EyebrowComponent],
  template: `
    <section [id]="id()" style="position:relative;z-index:1;" [style.padding]="tight() ? '64px 0' : '120px 0'">
      <div style="max-width:1240px;margin:0 auto;padding:0 32px;position:relative;">
        @if (label() || title()) {
          <div style="display:flex;flex-direction:column;align-items:center;gap:18px;margin-bottom:56px;text-align:center;">
            @if (label()) { <app-eyebrow>{{ label() }}</app-eyebrow> }
            @if (title()) {
              <h2 class="display" style="margin:0;font-size:clamp(34px,4.4vw,56px);font-weight:600;line-height:1.05;letter-spacing:-.025em;max-width:880px;">{{ title() }}</h2>
            }
            @if (description()) {
              <p style="margin:0;color:var(--muted);font-size:17px;line-height:1.55;max-width:640px;">{{ description() }}</p>
            }
          </div>
        }
        <ng-content />
      </div>
    </section>
  `,
})
export class SectionComponent {
  id = input('');
  label = input('');
  title = input('');
  description = input('');
  tight = input(false);
}
