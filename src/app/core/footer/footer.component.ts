import { Component, inject, signal } from '@angular/core';
import { BrandLockupComponent } from '../../shared/components/brand-lockup/brand-lockup.component';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-footer',
  imports: [BrandLockupComponent],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  cfg = inject(ConfigService);

  links: Record<string, string[]> = {
    'Hizmetler': ['Akıllı Ev', 'EV Şarj', 'Aydınlatma Tasarımı', 'Tesisat Yenileme', 'Periyodik Muayene', 'Acil Servis'],
    'Şirket': ['Hakkımızda', 'Mühendisler', 'Projeler', 'Kariyer', 'Basın'],
    'Kaynaklar': ['Fiyatlar', 'Garantiler', 'Enerji Rehberi', 'SSS', 'İletişim'],
  };
  linkKeys = Object.keys(this.links);

  emailVal = signal('');
  sent = signal(false);

  onNewsletterSubmit(e: Event) {
    e.preventDefault();
    if (this.emailVal().includes('@')) this.sent.set(true);
  }

  cities = [
    { x: 50, y: 70, name: 'İstanbul' }, { x: 48, y: 56, name: 'Bursa' },
    { x: 42, y: 82, name: 'Balıkesir' }, { x: 36, y: 64, name: 'Eskişehir' },
    { x: 58, y: 78, name: 'Yalova' }, { x: 28, y: 56, name: 'Tekirdağ' },
  ];
}
