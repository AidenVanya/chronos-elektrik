import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `<ng-content />`,
  host: {
    '[style.position]': '"relative"',
    '[style.background]': '"linear-gradient(180deg, rgba(255,255,255,0.025), rgba(255,255,255,0.005))"',
    '[style.border]': 'hovered() ? "1px solid rgba(91,141,239,0.35)" : "1px solid var(--line)"',
    '[style.border-radius]': '"var(--radius-lg)"',
    '[style.padding.px]': 'padding()',
    '[style.backdrop-filter]': '"blur(14px)"',
    '[style.transition]': '"border-color .25s, transform .25s, box-shadow .25s"',
    '[style.transform]': 'hovered() && hoverable() ? "translateY(-3px)" : "none"',
    '[style.box-shadow]': 'hovered() && hoverable() ? "0 30px 60px -30px rgba(91,141,239,.25)" : "0 1px 0 rgba(255,255,255,.04) inset"',
    '(mouseenter)': 'hovered.set(true)',
    '(mouseleave)': 'hovered.set(false)',
    '[style.display]': '"block"',
  },
})
export class CardComponent {
  padding = input(28);
  hoverable = input(true, { alias: 'hover' });
  hovered = signal(false);
}
