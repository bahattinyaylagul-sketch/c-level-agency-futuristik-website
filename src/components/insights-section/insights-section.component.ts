import { Component, ChangeDetectionStrategy, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Insight, InsightService } from '../../app/services/insight.service';

@Component({
  selector: 'app-insights-section',
  templateUrl: './insights-section.component.html',
  imports: [CommonModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InsightsSectionComponent implements OnInit {
  private insightService = inject(InsightService);
  insights = signal<Insight[]>([]);

  ngOnInit() {
    this.insights.set(this.insightService.getInsights().slice(0, 3));
  }
}