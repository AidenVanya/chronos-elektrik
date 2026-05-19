import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageShellComponent } from '../../core/page-shell/page-shell.component';
import { EyebrowComponent } from '../../shared/components/eyebrow/eyebrow.component';
import { RevealComponent } from '../../shared/components/reveal/reveal.component';

@Component({
  selector: 'app-booking',
  imports: [RouterLink, PageShellComponent, EyebrowComponent, RevealComponent],
  template: `
    <app-page-shell>
      <section style="position:relative;z-index:1;overflow:hidden;padding:180px 0 100px;border-bottom:1px solid var(--line);">
        <div style="position:absolute;inset:0;background:radial-gradient(60% 50% at 50% 0%,rgba(91,141,239,.10),transparent 60%);pointer-events:none;z-index:0;"></div>
        <div style="max-width:1240px;margin:0 auto;padding:0 32px;position:relative;z-index:1;text-align:center;">
          <app-reveal>
            <div style="display:inline-flex;align-items:center;gap:10px;margin-bottom:28px;color:var(--dim);font-size:12.5px;" class="mono">
              <a routerLink="/" style="color:var(--muted);text-decoration:none;">Anasayfa</a>
              <span>/</span>
              <span style="color:var(--accent);">Randevu</span>
            </div>
          </app-reveal>
          <app-reveal [delay]="80"><div style="margin-bottom:24px;"><app-eyebrow>Teklif Alın</app-eyebrow></div></app-reveal>
          <app-reveal [delay]="180">
            <h1 class="display" style="margin:0 auto;font-size:clamp(38px,5.5vw,72px);font-weight:600;line-height:1.04;letter-spacing:-.03em;max-width:720px;">Dört adım. Sabit fiyat.</h1>
          </app-reveal>
          <app-reveal [delay]="320">
            <p style="margin:24px auto 0;max-width:640px;font-size:clamp(15px,1.2vw,18px);color:var(--muted);line-height:1.6;">
              Ne istediğinizi ve ne zaman istediğinizi söyleyin. Anında tahmini fiyat aralığı, ücretsiz 15 dakikalık görüşme sonrası sabit teklif iletilir.
            </p>
          </app-reveal>
        </div>
      </section>
      <div style="max-width:1240px;margin:0 auto;padding:80px 32px;text-align:center;color:var(--muted);">
        Randevu formu ana sayfada mevcuttur.
        <a routerLink="/" fragment="booking" style="color:var(--accent);margin-left:8px;">Ana sayfaya git →</a>
      </div>
    </app-page-shell>
  `,
})
export class BookingComponent {}
