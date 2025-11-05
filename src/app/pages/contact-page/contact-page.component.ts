import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  imports: [BreadcrumbComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPageComponent {}