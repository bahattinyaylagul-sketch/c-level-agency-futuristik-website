import { Injectable, signal, inject } from '@angular/core';
import { Router, NavigationEnd, ActivatedRouteSnapshot, Data } from '@angular/router';
import { filter } from 'rxjs/operators';

export interface Breadcrumb {
  label: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  // FIX: Add explicit type for injected Router to resolve type inference issues.
  private router: Router = inject(Router);
  private _breadcrumbs = signal<Breadcrumb[]>([]);
  readonly breadcrumbs = this._breadcrumbs.asReadonly();

  constructor() {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe(() => {
      const root = this.router.routerState.snapshot.root;
      const breadcrumbs: Breadcrumb[] = [];
      this.addBreadcrumb(root, [], breadcrumbs);
      this._breadcrumbs.set(breadcrumbs);
    });
  }

  private addBreadcrumb(route: ActivatedRouteSnapshot | null, parentUrl: string[], breadcrumbs: Breadcrumb[]) {
    if (route) {
      const routeUrl = parentUrl.concat(route.url.map(url => url.path));
      
      if (route.data['breadcrumb']) {
        const breadcrumbLabel = this.getLabel(route.data);
        if (breadcrumbLabel) {
           const breadcrumb = {
            label: breadcrumbLabel,
            url: '/' + routeUrl.join('/')
           };
           // Prevent adding a breadcrumb with an empty URL (e.g., for the root component)
           if(routeUrl.length > 0) {
             breadcrumbs.push(breadcrumb);
           }
        }
      }
      
      this.addBreadcrumb(route.firstChild, routeUrl, breadcrumbs);
    }
  }

  private getLabel(data: Data): string {
    const breadcrumbData = data['breadcrumb'];
    if (typeof breadcrumbData === 'function') {
      return breadcrumbData(data);
    }
    return breadcrumbData;
  }
}
