import { Component, inject, signal, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageShellComponent } from '../../core/page-shell/page-shell.component';
import { SectionComponent } from '../../shared/components/section/section.component';
import { RevealComponent } from '../../shared/components/reveal/reveal.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { EyebrowComponent } from '../../shared/components/eyebrow/eyebrow.component';
import { AnimatedCounterComponent } from '../../shared/components/animated-counter/animated-counter.component';
import { MarqueeComponent } from '../../shared/components/marquee/marquee.component';
import { IconArrowRight, IconCheck, IconBolt, IconSmartHome, IconBoltEV, IconPanel } from '../../shared/icons';
import { ConfigService } from '../../core/config.service';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink, PageShellComponent, SectionComponent, RevealComponent,
    CardComponent, ButtonComponent, EyebrowComponent,
    AnimatedCounterComponent, MarqueeComponent,
    IconArrowRight, IconCheck, IconBolt, IconSmartHome, IconBoltEV, IconPanel,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  cfg = inject(ConfigService);

  @ViewChild('heroVideo') heroVideoRef?: ElementRef<HTMLVideoElement>;

  dim = signal(72);
  ev = signal(64);
  private timer?: ReturnType<typeof setInterval>;

  rooms = [
    { name: 'Oturma Odası', state: 'Açık · 72%', active: true },
    { name: 'Mutfak', state: 'Açık · 40%', active: true },
    { name: 'Çalışma', state: 'Kapalı', active: false },
    { name: 'Yatak Odası', state: 'Sahne · Sinema', active: true },
  ];
  bars = Array.from({ length: 16 }, (_, i) => 30 + Math.sin(i / 1.7) * 18 + Math.random() * 18);

  services = [
    {
      tag: '01 / AKILLI', title: 'Akıllı Ev ve Otomasyon',
      desc: 'Tam IoT entegrasyonlu KNX, Lutron ve Crestron kontrol sistemleri; sinema sesli odalar ve tek panelden yönetim.',
      points: ['Aydınlatma sahneleri', 'Çok odalı AV', 'Ses ve uygulama kontrolü'],
      icon: 'smart-home',
    },
    {
      tag: '02 / ENERJİ', title: 'Mimari Aydınlatma ve EV Çözümleri',
      desc: 'Yaşam, perakende ve dış mekânlar için özel LED tasarımı; ayrıca yük dengelemeli 7–22 kW EV şarj istasyonu kurulumu.',
      points: ['Tasarım aydınlatma', '22kW\'a kadar EV şarj', 'Güneş ve batarya entegrasyonu'],
      icon: 'bolt-ev',
    },
    {
      tag: '03 / TEMEL', title: 'Temel Elektrik Mühendisliği',
      desc: 'Üst düzey konut tesisatı, pano güncelleme, arıza tespiti ve EMO kayıtlı mühendislerle periyodik muayene.',
      points: ['Komple tesisat', 'Pano güncelleme', 'Muayene ve arıza tespiti'],
      icon: 'panel',
    },
  ];

  metrics = [
    { k: '100%', label: 'EMO kayıtlı, sigortalı mühendisler', sub: 'Her iş yetkili mühendis tarafından imzalanır.' },
    { k: '₺0', label: 'Sürpriz ücret. Başlamadan önce sabit fiyat.', sub: 'Fiyatı önce siz onaylıyorsunuz. Sonra başlıyoruz.' },
    { k: '24ay', label: 'Her kurulumda işçilik garantisi', sub: 'Bir şey arızalanırsa geri geliriz. Sorgusuz.' },
  ];

  certifications = ['TSE Belgeli','EMO Kayıtlı','CE Onaylı','EPDK Yetkili','KNX Partner','ISO 9001','TS HD 60364 Uyumlu','İSG Sertifikalı','ISO 45001'];
  certTripled = [...this.certifications, ...this.certifications, ...this.certifications];

  headlineParts(): { text: string; accent: boolean }[] {
    return this.cfg.config().headline.split(/\*\*([^*]+)\*\*/).map((part, i) => ({
      text: part, accent: i % 2 === 1,
    }));
  }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.dim.update(d => Math.max(40, Math.min(95, d + (Math.random() * 6 - 3))));
      this.ev.update(e => Math.min(100, e + 0.2));
    }, 2200);
  }
  ngAfterViewInit(): void {
    const v = this.heroVideoRef?.nativeElement;
    if (v) {
      v.muted = true;
      v.volume = 0;
      v.play().catch(() => {});
    }
  }

  ngOnDestroy() { clearInterval(this.timer); }

  readonly videos = [
    '/videos/mp_.mp4',
    '/videos/x_f_c_e_b_e_d_c_d_f_a_b_c_d_e_f_gmp_.mp4',
  ];
  private videoIdx = 0;

  onVideoEnded(video: HTMLVideoElement): void {
    this.videoIdx = (this.videoIdx + 1) % this.videos.length;
    video.src = this.videos[this.videoIdx];
    video.load();
    video.play().catch(() => {});
  }

  evDash(): number { return 2 * Math.PI * 28; }
  evOffset(): number { return (1 - this.ev() / 100) * 2 * Math.PI * 28; }

  bookingStep = signal(0);
  bookingType = signal<string | null>(null);
  bookingOption = signal<string | null>(null);
  bookingSlot = signal<string | null>(null);
  bookingContact = signal({ name: '', email: '', phone: '', postcode: '', notes: '' });
  bookingSubmitted = signal(false);
  bookingRef = signal('');

  serviceTypes = [
    {
      key: 'residential', title: 'Konut', desc: 'Evler, daireler, tadilatlar', icon: 'smart-home',
      options: [
        { name: 'Komple tesisat yenileme', est: '₺65.000 – ₺140.000' },
        { name: 'Pano güncelleme', est: '₺9.000 – ₺18.000' },
        { name: 'Periyodik muayene', est: '₺3.500 – ₺6.500' },
        { name: 'Arıza tespiti', est: '₺2.500 – ₺5.500' },
      ],
    },
    {
      key: 'smart', title: 'Akıllı Ev', desc: 'Otomasyon, AV, aydınlatma tasarımı', icon: 'bolt-ev',
      options: [
        { name: 'Aydınlatma sahneleri ve dimmer', est: '₺36.000 – ₺90.000' },
        { name: 'Tüm ev KNX sistemi', est: '₺160.000 – ₺480.000' },
        { name: 'Ev sineması kurulumu', est: '₺70.000 – ₺240.000' },
        { name: 'EV şarj istasyonu (7–22kW)', est: '₺18.000 – ₺40.000' },
      ],
    },
    {
      key: 'commercial', title: 'Ticari', desc: 'Perakende, otel, ofis', icon: 'panel',
      options: [
        { name: 'Mimari aydınlatma', est: '₺90.000+' },
        { name: 'Ofis tesisat kurulumu', est: '₺240 – ₺560 /m²' },
        { name: 'Periyodik muayene', est: '₺9.500 – ₺24.000' },
        { name: 'Yedek güç / UPS', est: '₺65.000+' },
      ],
    },
  ];

  slots = [
    { day: 'Bugün', date: '16 May', slots: ['09:00','11:30','14:00','16:30'] },
    { day: 'Yarın', date: '17 May', slots: ['08:00','10:30','13:00','15:30','17:00'] },
    { day: 'Pzt', date: '18 May', slots: ['09:00','12:00','14:30'] },
    { day: 'Sal', date: '19 May', slots: ['08:30','11:00','13:30','16:00'] },
  ];

  get selectedType() { return this.serviceTypes.find(t => t.key === this.bookingType()); }
  get canAdvance(): boolean {
    const s = this.bookingStep();
    const c = this.bookingContact();
    if (s === 0) return !!this.bookingType();
    if (s === 1) return !!this.bookingOption();
    if (s === 2) return !!this.bookingSlot();
    if (s === 3) return !!(c.name && c.email.includes('@') && c.phone && c.postcode);
    return false;
  }

  nextStep() { if (this.canAdvance) this.bookingStep.update(s => Math.min(3, s + 1)); }
  prevStep() { this.bookingStep.update(s => Math.max(0, s - 1)); }

  submitBooking() {
    if (!this.canAdvance) return;
    this.bookingRef.set(String(Math.floor(Math.random() * 9000 + 1000)));
    this.bookingSubmitted.set(true);
  }

  resetBooking() {
    this.bookingStep.set(0); this.bookingType.set(null); this.bookingOption.set(null);
    this.bookingSlot.set(null); this.bookingContact.set({ name:'',email:'',phone:'',postcode:'',notes:'' });
    this.bookingSubmitted.set(false);
  }

  updateContact(field: string, val: string) {
    this.bookingContact.update(c => ({ ...c, [field]: val }));
  }

  get bookingOptionEst() {
    return this.selectedType?.options.find(o => o.name === this.bookingOption())?.est ?? '';
  }
}
