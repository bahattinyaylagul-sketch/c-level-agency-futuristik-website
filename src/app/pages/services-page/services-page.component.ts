import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';

interface ServiceDetail {
  title: string;
  description: string;
  keywords: string[];
  ctaText: string;
  ctaLink: string;
}

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  imports: [CommonModule, RouterLink, BreadcrumbComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesPageComponent {
  services = signal<ServiceDetail[]>([
    {
      title: 'SEO & GEO (Generative Engine Optimization)',
      description: 'Geleneksel SEO\'nun ötesine geçiyoruz. Google\'ın yanı sıra, ChatGPT gibi üretken yapay zekâ platformlarında da markanızın otoritesini inşa ediyoruz. Semantik SEO ve entity-based yaklaşımlarla, sadece sıralama değil, aynı zamanda doğru kitleyle anlamlı bir bağ kurmanızı sağlıyoruz.',
      keywords: ['SEO danışmanlığı', 'GEO hizmetleri', 'üretken yapay zekâ optimizasyonu', 'semantik SEO'],
      ctaText: 'Detaylı İncele',
      ctaLink: '/iletisim'
    },
    {
      title: 'AI İçerik Üretimi',
      description: 'Yapay zekâ destekli içerik motorlarımızla, hedef kitlenizin arama niyetine tam olarak yanıt veren, E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) ilkelerine uygun, özgün ve yüksek etkileşimli içerikler üretiyoruz. İçerik üretim sürecinizi otomatize ederek verimliliği artırıyoruz.',
      keywords: ['yapay zekâ içerik üretimi', 'SEO uyumlu makale', 'AI metin yazarlığı'],
      ctaText: 'Teklif Al',
      ctaLink: '/iletisim'
    },
    {
      title: 'Teknik SEO ve Yapısal Veri',
      description: 'Web sitenizin teknik temelini kusursuzlaştırıyoruz. Hız, mobil uyumluluk, taranabilirlik ve yapısal veri entegrasyonu ile arama motorlarının sitenizi en doğru şekilde anlamasını sağlıyor, sıralama potansiyelinizi maksimize ediyoruz.',
      keywords: ['teknik SEO denetimi', 'yapısal veri', 'site hızı optimizasyonu', 'schema markup'],
      ctaText: 'Teknik Analiz İste',
      ctaLink: '/iletisim'
    },
    {
      title: 'İçerik Stratejisi ve Topical Authority',
      description: 'Sektörünüzde bir otorite olmanızı sağlıyoruz. Kapsamlı anahtar kelime araştırmaları ve rakip analizleriyle "topical authority" oluşturacak içerik stratejileri geliştiriyor, markanızı bilgi lideri olarak konumlandırıyoruz.',
      keywords: ['içerik stratejisi', 'topical authority', 'anahtar kelime araştırması', 'content marketing'],
      ctaText: 'Strateji Geliştirelim',
      ctaLink: '/iletisim'
    },
    {
      title: 'Veri Analitiği & Raporlama',
      description: 'Veriyi, aksiyona dönüştürülebilir içgörülere çeviriyoruz. Gelişmiş analitik araçları ve özel dashboard\'lar ile pazarlama kampanyalarınızın performansını şeffaf bir şekilde raporluyor, sürekli optimizasyon için yol haritanızı çiziyoruz.',
      keywords: ['veri analitiği', 'dijital pazarlama raporlama', 'performans takibi', 'Google Analytics 4'],
      ctaText: 'Raporlama Örneği Gör',
      ctaLink: '/iletisim'
    }
  ]);
}