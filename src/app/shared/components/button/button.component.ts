import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button
      [type]="type()"
      (click)="clicked.emit()"
      (mouseenter)="hover.set(true)"
      (mouseleave)="hover.set(false)"
      [class]="'btn btn-' + variant()"
      [class.btn-hover]="hover()"
      [class.btn-full]="full()"
    >
      <ng-content />
    </button>
  `,
  styles: [`
    .btn {
      display:inline-flex; align-items:center; justify-content:center; gap:10px;
      padding:14px 22px; border-radius:999px; font-weight:600; font-size:14.5px;
      font-family:inherit; letter-spacing:0.01em; cursor:pointer;
      transition:transform .18s ease, background .18s ease, box-shadow .25s ease, border-color .18s;
      border:1px solid transparent; user-select:none;
    }
    .btn-full { width:100%; }
    .btn-primary {
      background:var(--accent); color:#0b0b0d;
      box-shadow:0 10px 30px -10px rgba(91,141,239,.55), inset 0 1px 0 rgba(255,255,255,.35);
    }
    .btn-primary.btn-hover { transform:translateY(-1px); box-shadow:0 14px 40px -10px rgba(91,141,239,.7); }
    .btn-secondary { background:transparent; color:var(--text); border-color:var(--line-2); }
    .btn-secondary.btn-hover { border-color:var(--accent); color:var(--accent); }
    .btn-ghost { background:rgba(255,255,255,.04); color:var(--text); border-color:var(--line); }
    .btn-ghost.btn-hover { background:rgba(255,255,255,.08); }
  `],
})
export class ButtonComponent {
  variant = input<'primary'|'secondary'|'ghost'>('primary');
  type = input<'button'|'submit'>('button');
  full = input(false);
  clicked = output();
  hover = signal(false);
}
