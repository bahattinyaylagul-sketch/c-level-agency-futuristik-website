

import { Component, ChangeDetectionStrategy, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Slide {
  title: string;
  subtitle: string;
  gradient: string;
}

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  imports: [CommonModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent implements OnInit, OnDestroy {
  slides = signal<Slide[]>([
    {
      title: 'Geleceği Şekillendiren <span class="text-primary">Pazarlama</span>',
      subtitle: 'AI ve SEO’nun birleştiği noktada fark yaratan büyüme.',
      gradient: 'from-background via-red-900/30 to-purple-900/30'
    },
    {
      title: 'İçerik Değil, <span class="text-primary">Anlam</span> Üretiyoruz',
      subtitle: 'Semantik SEO ve AI içerik üretimiyle markanızı konumlandırıyoruz.',
      gradient: 'from-background via-purple-900/30 to-red-900/30'
    },
    {
      title: 'Görünürlük Değil, <span class="text-primary">Otorite</span> İnşa Ediyoruz',
      subtitle: 'Topical authority ve E-E-A-T temelli yaklaşımla sürdürülebilir büyüme.',
      gradient: 'from-background via-red-900/40 to-background'
    }
  ]);

  currentIndex = signal(0);
  private intervalId?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.startSlider();
  }

  ngOnDestroy(): void {
    this.stopSlider();
  }

  private startSlider(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex.update(current => (current + 1) % this.slides().length);
    }, 7000);
  }

  private stopSlider(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}