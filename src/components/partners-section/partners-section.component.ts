
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partners-section',
  templateUrl: './partners-section.component.html',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnersSectionComponent {
  partners = signal<string[]>([
    'Aktif Bank',
    'N Kolay',
    'Passo Lig',
    'DünyaGöz',
    'TOBB ETÜ',
    'Maltepe Hastanesi',
    'Golf Dondurmaları',
    'Çalık Holding'
  ]);
}
