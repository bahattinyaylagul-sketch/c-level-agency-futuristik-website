import { Component, ChangeDetectionStrategy, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Insight, InsightService } from '../../services/insight.service';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';


@Component({
  selector: 'app-insights-page',
  templateUrl: './insights-page.component.html',
  imports: [CommonModule, RouterLink, BreadcrumbComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InsightsPageComponent {
  private insightService = inject(InsightService);
  
  categories = signal(['Tümü', 'AI & SEO', 'Veri Analitiği', 'Growth Tactics']);
  selectedCategory = signal('Tümü');

  allInsights = signal<Insight[]>(this.insightService.getInsights());
  
  filteredInsights = computed(() => {
    const category = this.selectedCategory();
    if (category === 'Tümü') {
      return this.allInsights();
    }
    return this.allInsights().filter(i => i.category === category);
  });

  selectCategory(category: string) {
    this.selectedCategory.set(category);
  }
}