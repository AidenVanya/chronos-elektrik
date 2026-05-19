import { Component, input } from '@angular/core';

@Component({
  selector: 'app-brand-lockup',
  template: `
    <div style="display:flex;align-items:center;gap:12px;">
      <div [style.width.px]="size()" [style.height.px]="size()" style="position:relative;display:inline-flex;align-items:center;justify-content:center;color:var(--accent);">
        <svg [attr.width]="size()" [attr.height]="size()" viewBox="0 0 36 36" fill="none" style="filter:drop-shadow(0 0 12px rgba(91,141,239,.5))">
          <circle cx="18" cy="18" r="16" stroke="currentColor" stroke-width="1" opacity="0.3"/>
          <path d="M20 6 L11 21 H17 L15 30 L25 16 H19 L21 6 Z" fill="currentColor"/>
        </svg>
      </div>
      <div style="display:flex;flex-direction:column;line-height:1;">
        <span class="display" style="font-size:18px;font-weight:700;letter-spacing:.02em;">
          <span style="color:var(--accent);">CHRONOS</span>
          <span style="color:var(--text);margin-left:6px;">TECH</span>
        </span>
        <span class="mono" style="font-size:9.5px;color:var(--dim);letter-spacing:.22em;margin-top:5px;text-transform:uppercase;">Elektrik · Akıllı Çözümler</span>
      </div>
    </div>
  `,
})
export class BrandLockupComponent {
  size = input(36);
}
