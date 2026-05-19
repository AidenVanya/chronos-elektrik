import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageShellComponent } from '../../core/page-shell/page-shell.component';
import { RevealComponent } from '../../shared/components/reveal/reveal.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { EyebrowComponent } from '../../shared/components/eyebrow/eyebrow.component';
import { IconArrowRight, IconCheck } from '../../shared/icons';

@Component({
  selector: 'app-why-us',
  imports: [RouterLink, PageShellComponent, RevealComponent, CardComponent, ButtonComponent, EyebrowComponent, IconArrowRight, IconCheck],
  templateUrl: './why-us.component.html',
})
export class WhyUsComponent {
  promises = [
    { k: '100%', label: 'EMO kayıtlı, sigortalı mühendisler', sub: 'Her iş yetkili mühendis tarafından imzalanır. İstanbul Elektrik Mühendisleri Odası kayıtlı.' },
    { k: '₺0', label: 'Sürpriz ücret yok', sub: 'Başlamadan önce yazılı sabit teklif. Onayladığınız tutar faturanızda görünür.' },
    { k: '24ay', label: 'İşçilik garantisi', sub: 'Her kurulumda 24 ay işçilik garantisi. Bir şey arızalanırsa geri geliriz. Sorgusuz.' },
  ];

  stats = [
    { v: '1.400+', label: 'Tamamlanan proje', sub: '2018\'den bu yana İstanbul ve Marmara geneli' },
    { v: '4.9/5', label: 'Müşteri memnuniyeti', sub: '380 doğrulanmış Google değerlendirmesi' },
    { v: '38 dk', label: 'Ortalama acil müdahale', sub: 'İstanbul içi, 7/24/365' },
    { v: '%100', label: 'İlk denemede muayene', sub: 'Son 18 ayda hiç başarısız muayene yok' },
  ];

  certifications = ['TSE Belgeli','EMO Kayıtlı','CE Onaylı','EPDK Yetkili','KNX Partner','ISO 9001','TS HD 60364','İSG Sertifikalı','ISO 45001'];
  certTripled = [...this.certifications, ...this.certifications, ...this.certifications];
}
