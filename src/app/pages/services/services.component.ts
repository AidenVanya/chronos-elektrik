import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageShellComponent } from '../../core/page-shell/page-shell.component';
import { RevealComponent } from '../../shared/components/reveal/reveal.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { EyebrowComponent } from '../../shared/components/eyebrow/eyebrow.component';
import { IconArrowRight, IconCheck, IconSmartHome, IconBoltEV, IconPanel } from '../../shared/icons';

@Component({
  selector: 'app-services',
  imports: [RouterLink, PageShellComponent, RevealComponent, CardComponent, ButtonComponent, EyebrowComponent, IconArrowRight, IconCheck, IconSmartHome, IconBoltEV, IconPanel],
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  faqOpen = signal(0);

  serviceDetails = [
    {
      anchor: 'smart', tag: '01 / AKILLI EV',
      title: 'Akıllı Ev ve Otomasyon',
      kicker: 'Tek dokunuş. Tek panel. Evdeki her sistem.',
      blurb: 'Tüm IoT entegrasyonu ile KNX, Lutron ve Crestron kontrol sistemleri tasarlıyor ve kuruyoruz — aydınlatma sahneleri, çok odalı AV, klima, perde, güvenlik — hepsi ailenizin gerçekten kullanabileceği tek bir panelde.',
      features: ['KNX ve Lutron sertifikalı','Çok odalı AV (Sonos, B&O)','Ses, uygulama, duvar kontrolü','Tasarım aydınlatma sahneleri','Özel sinema odaları','Apple Home / Matter uyumlu'],
      stat: '200+', statLabel: 'İstanbul ve Marmara genelinde teslim edilen tüm-ev otomasyon projesi.', icon: 'smart-home',
    },
    {
      anchor: 'energy', tag: '02 / ENERJİ VE EV',
      title: 'Mimari Aydınlatma ve EV Çözümleri',
      kicker: 'Aydınlatma tasarımının temiz enerjiyle buluştuğu yer.',
      blurb: 'Yaşam, perakende ve dış mekânlar için özel LED aydınlatma tasarımı; aktif yük dengeleme ve EPDK teşvik yönetimiyle birlikte sertifikalı 7–22 kW EV şarj istasyonu kurulumu.',
      features: ['7kW ve 22kW şarj','Yük dengeli kurulum','EPDK teşvik desteği','Mimari LED tasarım','Dış ve peyzaj aydınlatma','Güneş PV ve batarya bağlantısı'],
      stat: '22kW', statLabel: 'Kurduğumuz maksimum şarj hızı — üç fazlı altyapı, yeni nesil araçlara hazır.', icon: 'bolt-ev',
    },
    {
      anchor: 'core', tag: '03 / TEMEL ELEKTRİK',
      title: 'Temel Elektrik Mühendisliği',
      kicker: 'Her şeyin dayandığı temel.',
      blurb: 'Üst düzey konut tesisat yenileme, pano güncelleme, arıza tespiti ve EMO kayıtlı mühendislerle periyodik muayene.',
      features: ['Komple tesisat yenileme','Pano güncelleme','Periyodik muayene belgesi','Arıza tespiti','Yeni yapı ve ek inşaat','Tarihi yapı uzmanlığı'],
      stat: '100%', statLabel: 'Son 18 ayda ilk denemede başarılı periyodik muayene oranı.', icon: 'panel',
    },
  ];

  steps = [
    { n: '01', t: 'Görüşme', d: '15 dakikalık ücretsiz keşif — biz dinleriz, siz anlatırsınız.' },
    { n: '02', t: 'Tasarım', d: 'Kıdemli bir mühendis düzen, malzeme listesi ve takvim hazırlar.' },
    { n: '03', t: 'Teklif', d: 'Yazılı sabit teklif. Anlaştığınız fiyat ödediğiniz fiyattır.' },
    { n: '04', t: 'Kurulum', d: 'Sertifikalı ekip sahada. Düzenli çalışma, günlük ilerleme notları.' },
    { n: '05', t: 'Teslim', d: 'Belgeleme, 24 ay işçilik garantisi, sonrasında destek.' },
  ];

  tiers = [
    { tag: 'Temel', from: '₺3.500', popular: false, desc: 'Muayene, arıza tespiti, tekil devre işleri.', features: ['Periyodik muayene belgesi','Arıza tespiti','1 saat içinde geliş'] },
    { tag: 'Yenileme', from: '₺15.500', popular: true, desc: 'Pano güncelleme, EV şarj, küçük tesisat.', features: ['12 devreye kadar','Akıllı sigortalar','24 ay garanti'] },
    { tag: 'Akıllı Ev', from: '₺65.000', popular: false, desc: 'KNX / Lutron aydınlatma, AV, perde, klima.', features: ['Tasarımda kablolama planı','Özel kontrol paneli','Sonrası bakım planı'] },
    { tag: 'Özel', from: 'Talep üzerine', popular: false, desc: 'Komple tesisat, tarihi yapı, ticari.', features: ['Proje yöneticisi','Aşamalı kurulum','Çağrı üzerine mühendis'] },
  ];

  faqs = [
    { q: 'Belgeli misiniz?', a: 'Her kıdemli mühendis TSE onaylı ve EMO kayıtlıdır; ₺50M\'a kadar mesleki sorumluluk sigortası vardır.' },
    { q: 'Acil müdahale ne kadar hızlı?', a: 'İstanbul içinde ortalama 38 dakika. Dışında 45–60 dk, trafiğe bağlı. Acil hattımız 7/24/365 açıktır.' },
    { q: 'Sabit fiyat veriyor musunuz?', a: 'Evet. Ücretsiz 15 dakikalık görüşme sonrası yazılı sabit teklif iletiriz.' },
    { q: 'Hangi garantiyi sunuyorsunuz?', a: 'İşçilik ve malzemede 24 ay garanti.' },
    { q: 'Hafta sonu çalışıyor musunuz?', a: 'Standart çalışma Pazartesi–Cumartesi. Acil hat hafta sonu ve resmi tatiller dahil 7/24 açıktır.' },
  ];

  tabs = [
    { id: 'smart', label: 'Akıllı Ev ve Otomasyon' },
    { id: 'energy', label: 'Mimari ve EV' },
    { id: 'core', label: 'Temel Elektrik' },
  ];
}
