import { Component, Input } from '@angular/core';
import { RoadmapStage } from './roadmaps.data';

@Component({
  selector: 'app-roadmap-stage-card',
  templateUrl: './roadmap-stage-card.component.html'
})
export class RoadmapStageCardComponent {
  @Input() stage!: RoadmapStage;
}
