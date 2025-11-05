import { Injectable, signal } from '@angular/core';

export interface Insight {
  slug: string;
  image: string;
  category: string;
  title: string;
  excerpt: string;
  fullContent: string;
}

@Injectable({
  providedIn: 'root'
})
export class InsightService {
  private insights = signal<Insight[]>([
    {
      slug: 'ai-search-caginda-seo-nasil-degisiyor',
      image: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=800&q=80&auto=format&fit=crop',
      category: 'AI & SEO',
      title: 'AI Search Çağında SEO Nasıl Değişiyor?',
      excerpt: 'Google\'ın yeni algoritmaları ve yapay zekânın SEO stratejilerini nasıl temelden değiştirdiğini inceliyoruz.',
      fullContent: `
        <p class="mb-4">Google'ın Search Generative Experience (SGE) gibi yenilikleri, arama motoru optimizasyonunun (SEO) kurallarını yeniden yazıyor. Artık sadece anahtar kelime sıralamaları değil, kullanıcı niyetini anlayan ve doğrudan yanıtlar sunan yapay zekâ odaklı bir yaklaşım gerekiyor. C-Level Agency olarak bu değişimin öncüsüyüz.</p>
        <h2 class="font-display text-2xl font-bold text-white my-6">Semantik Arama ve Entity-Based SEO</h2>
        <p class="mb-4">Yapay zekâ, kelimelerin ötesindeki anlamı ve varlıklar (entities) arasındaki ilişkileri anlar. Başarılı bir SEO stratejisi, markanızı ve ürünlerinizi birer "varlık" olarak tanımlamalı ve Google'ın bilgi grafiğine (Knowledge Graph) entegre etmelidir. Bu, sadece arama sonuçlarında değil, aynı zamanda AI tarafından üretilen yanıtlarda da görünür olmanızı sağlar.</p>
        <h3 class="font-display text-xl font-bold text-white my-4">Uygulanabilir Stratejiler:</h3>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li>Yapısal veri (Schema Markup) kullanarak içeriğinizi makine tarafından okunabilir hale getirin.</li>
          <li>Kullanıcıların sorularına doğrudan yanıt veren "Soru-Cevap" formatında içerikler üretin.</li>
          <li>Marka bilinirliğini artırarak, AI'ın sizi güvenilir bir kaynak olarak görmesini sağlayın.</li>
        </ul>
        <p>AI arama çağı, bir tehdit değil, doğru stratejilerle markanız için devasa bir fırsattır. Veri odaklı yaklaşımımızla, bu yeni döneme sizi hazırlıyoruz.</p>
      `
    },
    {
      slug: 'generative-engine-optimizasyonu-nedir',
      image: 'https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?w=800&q=80&auto=format&fit=crop',
      category: 'AI & SEO',
      title: 'Generative Engine Optimizasyonu Nedir?',
      excerpt: 'ChatGPT ve benzeri platformlarda markanızın nasıl öne çıkabileceğini ve bu yeni alanda nasıl lider olabileceğinizi keşfedin.',
      fullContent: `
        <p class="mb-4">Generative Engine Optimization (GEO), markanızın ChatGPT, Perplexity, ve Claude gibi üretken yapay zekâ platformlarının cevaplarında yer almasını sağlayan yeni nesil bir optimizasyon disiplinidir. Bu, geleneksel SEO'nun bir uzantısıdır ancak kendine özgü dinamikleri vardır.</p>
        <h2 class="font-display text-2xl font-bold text-white my-6">GEO ve SEO Arasındaki Fark Nedir?</h2>
        <p class="mb-4">SEO, arama motoru sonuç sayfalarında (SERP) sıralama elde etmeye odaklanırken, GEO, AI modellerinin eğitim verilerinde yer alarak ve güvenilir bir kaynak olarak algılanarak, üretilen yanıtlarda doğal bir şekilde bahsedilmeyi hedefler. Bu, marka bilinirliği ve otorite için dolaylı ama son derece güçlü bir yoldur.</p>
        <h3 class="font-display text-xl font-bold text-white my-4">GEO İçin Temel Adımlar:</h3>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li>Sektörünüzde "Topical Authority" (Konu Otoritesi) oluşturun.</li>
          <li>Yüksek kaliteli, özgün ve referans gösterilebilir içerikler üretin.</li>
          <li>Wikipedia, endüstri raporları ve güvenilir yayınlar gibi AI'ın sıkça referans aldığı kaynaklarda yer alın.</li>
          <li>Verilerinizi ve bilgilerinizi açık ve erişilebilir formatlarda sunun.</li>
        </ul>
        <p>GEO, geleceğin dijital pazarlamasının temel taşlarından biridir. Bu alanda erken pozisyon alan markalar, uzun vadede paha biçilmez bir rekabet avantajı elde edecektir.</p>
      `
    },
    {
      slug: 'veri-gorsellestirmenin-buyume-stratejisine-etkisi',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop',
      category: 'Veri Analitiği',
      title: 'Veri Görselleştirmenin Büyüme Stratejisine Etkisi',
      excerpt: 'Büyük veriyi anlamlı içgörülere dönüştürerek, pazarlama kararlarınızı nasıl daha isabetli hale getirebilirsiniz?',
      fullContent: `
        <p class="mb-4">Rakamlar ve tablolarla dolu bir dünyada, veriyi anlaşılır ve eyleme geçirilebilir hale getirmek kritik bir öneme sahiptir. Veri görselleştirme, karmaşık veri setlerini grafikler, haritalar ve interaktif dashboard'lar aracılığıyla hikayelere dönüştürme sanatıdır. Bu, pazarlama stratejinizin temelini oluşturmalıdır.</p>
        <h2 class="font-display text-2xl font-bold text-white my-6">Neden Veri Görselleştirme Hayatidir?</h2>
        <p class="mb-4">İnsan beyni, görsel bilgiyi metinden 60.000 kat daha hızlı işler. İyi tasarlanmış bir görselleştirme, trendleri, aykırı değerleri ve gizli kalmış fırsatları anında ortaya çıkarabilir. Bu sayede, "tahmin" etmek yerine "bilerek" karar alırsınız.</p>
        <h3 class="font-display text-xl font-bold text-white my-4">Pazarlamada Kullanım Alanları:</h3>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Kampanya Performansı Takibi:</strong> Hangi kanalların en iyi dönüşümü sağladığını anlık olarak görün.</li>
          <li><strong>Müşteri Segmentasyonu:</strong> Farklı müşteri gruplarının davranışlarını görsel olarak analiz edin.</li>
          <li><strong>Pazar Trendleri Analizi:</strong> Sektördeki yükselen ve alçalan trendleri herkesten önce fark edin.</li>
          <li><strong>Web Analitiği:</strong> Kullanıcıların sitenizdeki yolculuğunu haritalandırarak optimizasyon alanlarını belirleyin.</li>
        </ul>
        <p>Google Looker Studio, Tableau ve Power BI gibi araçlarla, verilerinizi en güçlü stratejik varlığınıza dönüştürüyoruz.</p>
      `
    },
    {
      slug: 'topical-authority-ile-sektor-lideri-olun',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format&fit=crop',
      category: 'Growth Tactics',
      title: 'Topical Authority ile Sektör Lideri Olun',
      excerpt: 'Sadece anahtar kelimelere odaklanmak yerine, konu bütünlüğü oluşturarak Google\'ın gözünde nasıl bir otorite haline gelebilirsiniz?',
      fullContent: `
        <p class="mb-4">Topical Authority (Konu Otoritesi), bir markanın veya web sitesinin belirli bir konu alanında Google ve kullanıcılar tarafından en güvenilir ve kapsamlı bilgi kaynağı olarak görülmesidir. Tek tek anahtar kelimeler için sıralama almaktan çok daha güçlü ve sürdürülebilir bir SEO stratejisidir.</p>
        <h2 class="font-display text-2xl font-bold text-white my-6">Konu Otoritesi Nasıl İnşa Edilir?</h2>
        <p class="mb-4">Bu, "Pillar Page" (Ana Sayfa) ve "Cluster Content" (Küme İçerik) modeliyle yapılır. Belirlediğiniz ana bir konu için kapsamlı bir rehber (pillar page) oluşturursunuz. Ardından, bu ana konunun alt başlıklarını detaylandıran daha spesifik makaleler (cluster content) yazarak bunları ana sayfanıza bağlarsınız.</p>
        <h3 class="font-display text-xl font-bold text-white my-4">Faydaları Nelerdir?</h3>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Google E-E-A-T Sinyallerini Güçlendirir:</strong> Uzmanlık, Otorite ve Güvenilirlik sinyallerinizi artırır.</li>
          <li><strong>Daha Yüksek Sıralamalar:</strong> Birbirini destekleyen içerikler sayesinde tüm ilgili anahtar kelimelerde sıralamanız yükselir.</li>
          <li><strong>Kullanıcı Deneyimini İyileştirir:</strong> Ziyaretçilere bir konuda aradıkları tüm bilgileri tek bir yerde sunar.</li>
          <li><strong>Sürdürülebilir Trafik:</strong> Algoritma güncellemelerine karşı daha dayanıklı hale gelirsiniz.</li>
        </ul>
        <p>İçerik stratejinizi konu kümeleri etrafında şekillendirerek, rakiplerinizden sıyrılıp sektörünüzün dijital bilgi lideri olabilirsiniz.</p>
      `
    },
    {
      slug: 'ga4-te-etkilesim-metriklerini-anlamak',
      image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&q=80&auto=format&fit=crop',
      category: 'Veri Analitiği',
      title: 'GA4\'te Etkileşim Metriklerini Anlamak',
      excerpt: 'Yeni nesil Google Analytics metriklerini doğru yorumlayarak kullanıcı davranışlarını daha derinlemesine analiz edin.',
      fullContent: `
        <p class="mb-4">Google Analytics 4 (GA4), Universal Analytics'ten (UA) farklı olarak, kullanıcı etkileşimini merkeze alan bir ölçüm modeline sahiptir. Artık "Hemen Çıkma Oranı" (Bounce Rate) yerine "Etkileşim Oranı" (Engagement Rate) gibi daha anlamlı metrikler kullanıyoruz.</p>
        <h2 class="font-display text-2xl font-bold text-white my-6">"Etkileşimli Oturum" Nedir?</h2>
        <p class="mb-4">GA4, bir oturumu "etkileşimli" olarak kabul etmek için aşağıdaki koşullardan en az birinin gerçekleşmesini bekler:</p>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li>Oturumun 10 saniyeden (varsayılan, ayarlanabilir) uzun sürmesi.</li>
          <li>En az bir "dönüşüm" etkinliğinin gerçekleşmesi.</li>
          <li>En az 2 sayfa görüntülenmesi.</li>
        </ul>
        <p class="mb-4"><strong>Etkileşim Oranı</strong> ise, toplam oturumlar içindeki etkileşimli oturumların yüzdesidir. Bu metrik, kullanıcıların içeriğinizle ne kadar ilgili olduğunu gösteren güçlü bir göstergedir.</p>
        <h3 class="font-display text-xl font-bold text-white my-4">Bu Veriyi Nasıl Kullanmalısınız?</h3>
        <p>Düşük etkileşim oranına sahip sayfalar, içeriğinizin veya kullanıcı deneyiminizin zayıf olduğunun bir işareti olabilir. Bu sayfaları belirleyerek içerik kalitesini artırabilir, sayfa hızını optimize edebilir veya kullanıcıları daha fazla etkileşime teşvik edecek öğeler (örneğin videolar, iç linkler) ekleyebilirsiniz. Veriyi doğru okumak, doğru aksiyonu almanın ilk adımıdır.</p>
      `
    },
    {
      slug: 'yapay-zeka-ile-icerik-uretiminin-gelecegi',
      image: 'https://images.unsplash.com/photo-1688647952936-a51cf3ba8305?w=800&q=80&auto=format&fit=crop',
      category: 'AI & SEO',
      title: 'Yapay Zeka ile İçerik Üretiminin Geleceği',
      excerpt: 'Otomasyon ve yaratıcılık dengesini kurarak, AI destekli içerik stratejilerinin potansiyelini en üst düzeye çıkarın.',
      fullContent: `
        <p class="mb-4">Yapay zekâ (AI), içerik üretimini kökten değiştiren bir teknoloji. Fikir aşamasından taslak oluşturmaya, metin yazımından optimizasyona kadar her adımda verimliliği artırıyor. Ancak AI, insan yaratıcılığının ve stratejik düşüncesinin bir yedeği değil, güçlü bir yardımcısıdır.</p>
        <h2 class="font-display text-2xl font-bold text-white my-6">AI İçerikte İnsan Dokunuşunun Önemi</h2>
        <p class="mb-4">Google, AI tarafından üretilen içeriğe karşı değildir; ancak düşük kaliteli ve kullanıcıya değer katmayan içeriğe karşıdır. Başarılı bir AI içerik stratejisi, otomasyonun hızı ile insan uzmanlığının derinliğini birleştirmelidir. Bu, Google'ın E-E-A-T (Deneyim, Uzmanlık, Otorite, Güvenilirlik) yönergeleri için de kritik öneme sahiptir.</p>
        <h3 class="font-display text-xl font-bold text-white my-4">Hibrit Modelin Avantajları:</h3>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Hız ve Ölçeklenebilirlik:</strong> AI ile kısa sürede çok sayıda içerik taslağı oluşturulabilir.</li>
          <li><strong>Uzmanlık ve Özgünlük:</strong> İnsan editörler, AI taslaklarına kendi deneyimlerini, özgün bakış açılarını ve marka sesini katar.</li>
          <li><strong>Doğruluk ve Güvenilirlik:</strong> AI'ın ürettiği bilgilerin doğruluğu mutlaka bir uzman tarafından kontrol edilmelidir.</li>
          <li><strong>SEO Optimizasyonu:</strong> AI, temel anahtar kelime yerleşimini yapabilirken, stratejik bir SEO uzmanı içeriğin kullanıcı niyetine tam olarak cevap verdiğinden ve anlamsal olarak zengin olduğundan emin olur.</li>
        </ul>
        <p>Geleceğin içerik stratejisi, "insan mı, AI mı?" sorusuna değil, "insan + AI" sinerjisine dayanmaktadır. Biz, bu sinerjiyi en etkili şekilde kullanarak markanız için fark yaratan içerikler üretiyoruz.</p>
      `
    }
  ]);

  getInsights(): Insight[] {
    return this.insights();
  }

  getInsightBySlug(slug: string): Insight | undefined {
    return this.insights().find(i => i.slug === slug);
  }
}