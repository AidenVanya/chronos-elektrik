import { Injectable, signal } from '@angular/core';

export interface AppConfig {
  accent: string;
  headline: string;
  subheadline: string;
  heroVariant: 'split' | 'centered';
  showEmergencyBar: boolean;
  showSmartDashboard: boolean;
  phone: string;
}

@Injectable({ providedIn: 'root' })
export class ConfigService {
  config = signal<AppConfig>({
    accent: '#5B8DEF',
    headline: 'Mekânınızın Enerjisini ve **Otomasyonunu** Geleceğe Hazırlayın.',
    subheadline: 'Modern yaşam için tasarlanmış premium elektrik mühendisliği, akıllı ev entegrasyonu ve acil müdahale çözümleri.',
    heroVariant: 'centered',
    showEmergencyBar: true,
    showSmartDashboard: true,
    phone: '0850 245 00 11',
  });

  update<K extends keyof AppConfig>(key: K, value: AppConfig[K]) {
    this.config.update(c => ({ ...c, [key]: value }));
  }
}
