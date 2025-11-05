import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VisionPageComponent } from './pages/vision-page/vision-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { PartnersPageComponent } from './pages/partners-page/partners-page.component';
import { InsightsPageComponent } from './pages/insights-page/insights-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { InsightDetailPageComponent } from './pages/insight-detail-page/insight-detail-page.component';
import { insightResolver } from './resolvers/insight.resolver';

export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent, 
    title: 'C-Level Agency | AI-Destekli Büyüme & SEO',
    data: { breadcrumb: 'Ana Sayfa' }
  },
  { 
    path: 'vizyon', 
    component: VisionPageComponent, 
    title: 'Vizyon | C-Level Agency',
    data: { breadcrumb: 'Vizyon' }
  },
  { 
    path: 'hizmetler', 
    component: ServicesPageComponent, 
    title: 'Hizmetler | C-Level Agency',
    data: { breadcrumb: 'Hizmetler' }
  },
  { 
    path: 'is-ortaklari', 
    component: PartnersPageComponent, 
    title: 'İş Ortakları | C-Level Agency',
    data: { breadcrumb: 'İş Ortakları' }
  },
  { 
    path: 'icgoruler', 
    component: InsightsPageComponent, 
    title: 'İçgörüler | C-Level Agency',
    data: { breadcrumb: 'İçgörüler' }
  },
  { 
    path: 'icgoruler/:slug', 
    component: InsightDetailPageComponent,
    resolve: { insight: insightResolver },
    data: { breadcrumb: (data: any) => data.insight.title }
  },
  { 
    path: 'iletisim', 
    component: ContactPageComponent, 
    title: 'İletişim | C-Level Agency',
    data: { breadcrumb: 'İletişim' }
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];