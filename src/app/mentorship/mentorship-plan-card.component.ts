import { Component, Input } from '@angular/core';
import { MentorshipPlan } from './mentorship.data';

@Component({
  selector: 'app-mentorship-plan-card',
  templateUrl: './mentorship-plan-card.component.html'
})
export class MentorshipPlanCardComponent {
  @Input() plan!: MentorshipPlan;
  @Input() compact = false;
}
