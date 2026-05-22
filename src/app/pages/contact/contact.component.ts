import { Component, inject, signal } from '@angular/core';
import { PageShellComponent } from '../../core/page-shell/page-shell.component';
import { RevealComponent } from '../../shared/components/reveal/reveal.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { EyebrowComponent } from '../../shared/components/eyebrow/eyebrow.component';
import { IconArrowRight, IconCheck } from '../../shared/icons';
import { ConfigService } from '../../core/config.service';

@Component({
  selector: 'app-contact',
  imports: [PageShellComponent, RevealComponent, ButtonComponent, EyebrowComponent, IconArrowRight, IconCheck],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  cfg = inject(ConfigService);
  form = signal({ name: '', email: '', phone: '', subject: '', message: '' });
  sent = signal(false);

  updateForm(field: string, val: string) {
    this.form.update(f => ({ ...f, [field]: val }));
  }

  submit(e: Event) {
    e.preventDefault();
    const f = this.form();
    if (f.name && f.email.includes('@') && f.message) this.sent.set(true);
  }
}
