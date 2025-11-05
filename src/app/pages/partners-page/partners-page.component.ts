import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PartnersSectionComponent } from '../../../components/partners-section/partners-section.component';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-partners-page',
  templateUrl: './partners-page.component.html',
  imports: [PartnersSectionComponent, RouterLink, BreadcrumbComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnersPageComponent {}