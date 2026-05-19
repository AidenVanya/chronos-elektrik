import { Component, input } from '@angular/core';

@Component({
  selector: 'icon-arrow-right',
  template: `<svg [attr.width]="size()" [attr.height]="size()" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>`,
})
export class IconArrowRight { size = input(16); }

@Component({
  selector: 'icon-check',
  template: `<svg [attr.width]="size()" [attr.height]="size()" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
})
export class IconCheck { size = input(14); }

@Component({
  selector: 'icon-bolt',
  template: `<svg [attr.width]="size()" [attr.height]="size()" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z"/></svg>`,
})
export class IconBolt { size = input(14); }

@Component({
  selector: 'icon-smart-home',
  template: `<svg [attr.width]="size()" [attr.height]="size()" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M10 30 32 12 54 30"/><path d="M16 28 V52 H48 V28"/><rect x="26" y="36" width="12" height="12" rx="2"/><circle cx="32" cy="42" r="2" fill="currentColor" stroke="none"/><path d="M22 14 a16 16 0 0 1 20 0" opacity=".5"/><path d="M18 8 a22 22 0 0 1 28 0" opacity=".25"/></svg>`,
})
export class IconSmartHome { size = input(40); }

@Component({
  selector: 'icon-bolt-ev',
  template: `<svg [attr.width]="size()" [attr.height]="size()" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="14" y="10" width="28" height="44" rx="3"/><path d="M14 18 H42 M14 26 H42" opacity=".35"/><path d="M30 30 L24 42 H30 L28 52 L36 38 H30 L32 30 Z" fill="currentColor" stroke="none"/><path d="M42 22 H50 V44 a4 4 0 0 1 -4 4 H42"/><circle cx="50" cy="20" r="1.4" fill="currentColor" stroke="none"/></svg>`,
})
export class IconBoltEV { size = input(40); }

@Component({
  selector: 'icon-panel',
  template: `<svg [attr.width]="size()" [attr.height]="size()" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="10" width="44" height="44" rx="3"/><path d="M10 22 H54"/><circle cx="18" cy="16" r="1.6" fill="currentColor" stroke="none"/><circle cx="24" cy="16" r="1.6" fill="currentColor" stroke="none" opacity=".5"/><rect x="16" y="28" width="8" height="6" rx="1"/><rect x="28" y="28" width="8" height="6" rx="1"/><rect x="40" y="28" width="8" height="6" rx="1"/><rect x="16" y="40" width="8" height="6" rx="1"/><rect x="28" y="40" width="8" height="6" rx="1" opacity=".5"/><rect x="40" y="40" width="8" height="6" rx="1"/></svg>`,
})
export class IconPanel { size = input(40); }
