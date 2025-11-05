import { Component, ChangeDetectionStrategy, inject, effect, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Insight, InsightService } from '../../services/insight.service';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-insight-detail-page',
  templateUrl: './insight-detail-page.component.html',
  imports: [CommonModule, RouterLink, BreadcrumbComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InsightDetailPageComponent {
  // FIX: Add explicit types for injected services to resolve type inference issues.
  private route: ActivatedRoute = inject(ActivatedRoute);
  private insightService: InsightService = inject(InsightService);
  private titleService: Title = inject(Title);

  private resolvedData = toSignal(this.route.data);

  insight = computed(() => this.resolvedData()?.['insight'] as Insight | undefined);

  otherInsights = computed(() => {
    const currentSlug = this.insight()?.slug;
    const allInsights = this.insightService.getInsights();
    if (currentSlug) {
      return allInsights.filter(i => i.slug !== currentSlug).slice(0, 4);
    }
    return allInsights.slice(0, 4);
  });

  constructor() {
    effect(() => {
      const currentInsight = this.insight();
      if (currentInsight) {
        this.titleService.setTitle(`${currentInsight.title} | C-Level Agency`);
      } else {
        // This case should ideally not be reached due to the resolver redirecting
        this.titleService.setTitle('İçgörü Bulunamadı | C-Level Agency');
      }
    });
  }
}
