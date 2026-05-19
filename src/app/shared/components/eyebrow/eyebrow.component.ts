import { Component } from '@angular/core';

@Component({
  selector: 'app-eyebrow',
  template: `
    <span class="mono" style="display:inline-flex;align-items:center;gap:10px;padding:7px 14px;border-radius:999px;border:1px solid var(--line-2);background:rgba(255,255,255,.02);backdrop-filter:blur(8px);color:var(--muted);font-size:11.5px;letter-spacing:.18em;text-transform:uppercase;font-weight:500;">
      <span style="width:6px;height:6px;border-radius:999px;background:var(--accent);box-shadow:0 0 10px var(--accent);flex-shrink:0;"></span>
      <ng-content />
    </span>
  `,
})
export class EyebrowComponent {}
