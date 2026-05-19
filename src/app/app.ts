import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <div class="bg-grid"></div>
    <div class="bg-glow"></div>
    <div class="orb" style="width:420px;height:420px;left:-100px;top:20vh;background:var(--accent);animation:drift1 18s ease-in-out infinite;opacity:.18;"></div>
    <div class="orb" style="width:360px;height:360px;right:-80px;top:120vh;background:#5b8def;animation:drift2 22s ease-in-out infinite;opacity:.12;"></div>
    <router-outlet />
  `,
  styles: [':host { display: block; }']
})
export class App {}
