import { inject } from '@angular/core';
import { ResolveFn, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Insight, InsightService } from '../services/insight.service';

export const insightResolver: ResolveFn<Insight | null> = (route, state) => {
  // FIX: Add explicit types for injected services to resolve type inference issues.
  const insightService: InsightService = inject(InsightService);
  const router: Router = inject(Router);
  const slug = route.paramMap.get('slug');

  if (!slug) {
    router.navigate(['/icgoruler']);
    return null;
  }

  const insight = insightService.getInsightBySlug(slug);

  if (!insight) {
    router.navigate(['/icgoruler']); // Or a 404 page
    return null;
  }
  
  return insight;
};
