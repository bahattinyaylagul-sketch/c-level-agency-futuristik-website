import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [CommonModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  navItems = signal([
    { label: 'Vizyon', link: '/vizyon' },
    { label: 'Hizmetler', link: '/hizmetler' },
    { label: 'İş Ortakları', link: '/is-ortaklari' },
    { label: 'İçgörüler', link: '/icgoruler' },
    { label: 'İletişim', link: '/iletisim' },
  ]);
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(value => !value);
  }
}