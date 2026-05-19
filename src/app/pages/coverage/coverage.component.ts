import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageShellComponent } from '../../core/page-shell/page-shell.component';
import { RevealComponent } from '../../shared/components/reveal/reveal.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { EyebrowComponent } from '../../shared/components/eyebrow/eyebrow.component';
import { IconArrowRight, IconCheck } from '../../shared/icons';

@Component({
  selector: 'app-coverage',
  imports: [RouterLink, PageShellComponent, RevealComponent, CardComponent, ButtonComponent, EyebrowComponent, IconArrowRight, IconCheck],
  templateUrl: './coverage.component.html',
})
export class CoverageComponent {
  zones = [
    { name: 'İstanbul Avrupa', cities: ['Beşiktaş','Şişli','Beyoğlu','Sarıyer','Kağıthane','Eyüp','Gaziosmanpaşa','Sultangazi','Esenler','Bağcılar','Güngören','Bahçelievler','Bakırköy','Zeytinburnu','Fatih'] },
    { name: 'İstanbul Anadolu', cities: ['Kadıköy','Üsküdar','Ataşehir','Maltepe','Kartal','Pendik','Tuzla','Sultanbeyli','Sancaktepe','Ümraniye','Beykoz','Şile','Çekmeköy'] },
    { name: 'Marmara Bölgesi', cities: ['Bursa','Yalova','Balıkesir','Tekirdağ','Kocaeli','Gebze','İzmit','Çorlu','Çerkezköy','Lüleburgaz'] },
  ];

  cities = [
    { x: 50, y: 70 }, { x: 48, y: 56 }, { x: 42, y: 82 },
    { x: 36, y: 64 }, { x: 58, y: 78 }, { x: 28, y: 56 },
  ];
}
