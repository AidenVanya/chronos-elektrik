import { Component, signal, inject, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BrandLockupComponent } from '../../shared/components/brand-lockup/brand-lockup.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { IconBolt, IconArrowRight } from '../../shared/icons';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive, BrandLockupComponent, ButtonComponent, IconBolt, IconArrowRight],
  template: `
    <header [style.backdropFilter]="scrolled() || mobileOpen() ? 'blur(18px) saturate(140%)' : 'blur(0px)'"
            [style.webkitBackdropFilter]="scrolled() || mobileOpen() ? 'blur(18px) saturate(140%)' : 'blur(0px)'"
            [style.background]="scrolled() || mobileOpen() ? 'rgba(10,10,12,0.95)' : 'transparent'"
            [style.borderBottom]="scrolled() || mobileOpen() ? '1px solid var(--line)' : '1px solid transparent'"
            style="position:fixed;top:0;left:0;right:0;z-index:50;transition:all .3s ease;">
      <div class="nav-inner" style="max-width:1240px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;padding:18px 32px;">
        <a routerLink="/" style="text-decoration:none;color:inherit;" (click)="closeMenu()">
          <app-brand-lockup [size]="36" />
        </a>
        <nav class="nav-links" style="display:flex;gap:2px;">
          @for (link of links; track link.path) {
            <a [routerLink]="link.path" routerLinkActive="nav-active" [routerLinkActiveOptions]="{exact: link.path === '/'}"
               style="color:var(--muted);text-decoration:none;font-size:13.5px;font-weight:500;padding:7px 11px;border-radius:999px;transition:color .15s, background .15s;border:1px solid transparent;"
               (mouseenter)="onLinkEnter($event)" (mouseleave)="onLinkLeave($event)">
              {{ link.label }}
            </a>
          }
        </nav>
        <div style="display:flex;align-items:center;gap:10px;">
          <span class="mono" style="display:inline-flex;align-items:center;gap:5px;font-size:11.5px;color:var(--accent);background:var(--accent-soft);border:1px solid rgba(91,141,239,.2);border-radius:999px;padding:5px 11px;letter-spacing:.08em;">
            <icon-bolt [size]="11" />7/24
          </span>
          <a routerLink="/booking" class="nav-cta" style="text-decoration:none;">
            <app-button variant="primary">
              Mühendis Çağırın <icon-arrow-right [size]="14" />
            </app-button>
          </a>
          <button class="hamburger" [class.open]="mobileOpen()" (click)="toggleMenu()"
                  aria-label="Menüyü aç/kapat" style="position:relative;">
            <span class="h-line"></span>
            <span class="h-line"></span>
            <span class="h-line"></span>
            <span class="bolt-icon"><icon-bolt [size]="17" /></span>
          </button>
        </div>
      </div>
      <nav class="mobile-menu" [class.menu-open]="mobileOpen()">
        <div class="mobile-menu-eyebrow">
          <icon-bolt [size]="12" />
          <span>Chronos Elektrik</span>
        </div>
        @for (link of links; track link.path) {
          <a [routerLink]="link.path" (click)="closeMenu()">{{ link.label }}</a>
        }
        <a routerLink="/booking" (click)="closeMenu()" class="mobile-cta">Mühendis Çağırın →</a>
      </nav>
    </header>
  `,
  styles: [`
    :host { display:block; }
    .nav-active { color:var(--text) !important; background:rgba(91,141,239,.08) !important; border-color:rgba(91,141,239,.25) !important; }
  `],
})
export class NavComponent {
  cfg = inject(ConfigService);
  scrolled = signal(false);
  mobileOpen = signal(false);

  links = [
    { label: 'Anasayfa', path: '/' },
    { label: 'Hizmetler', path: '/services' },
    { label: 'Neden Biz', path: '/why-us' },
    { label: 'Randevu', path: '/booking' },
    { label: 'Hizmet Bölgesi', path: '/coverage' },
    { label: 'İletişim', path: '/contact' },
  ];

  @HostListener('window:scroll')
  onScroll() { this.scrolled.set(window.scrollY > 12); }

  toggleMenu() { this.mobileOpen.update(v => !v); }
  closeMenu()  { this.mobileOpen.set(false); }

  onLinkEnter(e: MouseEvent) {
    const el = e.currentTarget as HTMLElement;
    if (!el.classList.contains('nav-active')) {
      el.style.color = 'var(--text)';
      el.style.background = 'rgba(255,255,255,.04)';
    }
  }
  onLinkLeave(e: MouseEvent) {
    const el = e.currentTarget as HTMLElement;
    if (!el.classList.contains('nav-active')) {
      el.style.color = 'var(--muted)';
      el.style.background = 'transparent';
    }
  }
}
