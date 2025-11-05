import { Component, ChangeDetectionStrategy } from '@angular/core';

import { HeroSectionComponent } from '../../../components/hero-section/hero-section.component';
import { VisionSectionComponent } from '../../../components/vision-section/vision-section.component';
import { ServicesSectionComponent } from '../../../components/services-section/services-section.component';
import { PartnersSectionComponent } from '../../../components/partners-section/partners-section.component';
import { InsightsSectionComponent } from '../../../components/insights-section/insights-section.component';
import { ContactSectionComponent } from '../../../components/contact-section/contact-section.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [
    HeroSectionComponent,
    VisionSectionComponent,
    ServicesSectionComponent,
    PartnersSectionComponent,
    InsightsSectionComponent,
    ContactSectionComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
