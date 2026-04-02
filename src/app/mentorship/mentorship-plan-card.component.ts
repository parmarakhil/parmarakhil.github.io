import { Component, EventEmitter, Input, Output } from '@angular/core';
import { APPLY_NOW_URL, BOOK_SESSION_URL, MentorshipPlan } from './mentorship.data';

@Component({
  selector: 'app-mentorship-plan-card',
  templateUrl: './mentorship-plan-card.component.html'
})
export class MentorshipPlanCardComponent {
  @Input() plan!: MentorshipPlan;
  @Input() compact = false;
  @Output() openInquiry = new EventEmitter<{ program: string; redirectUrl: string }>();

  readonly bookSessionUrl = BOOK_SESSION_URL;
  readonly propeersUrl = APPLY_NOW_URL;

  get isGrowthPlan(): boolean {
    return this.plan?.name === 'Growth';
  }

  get isOneTimePlan(): boolean {
    return this.plan?.name === 'Starter';
  }

  onPrimaryAction(): void {
    if (this.isOneTimePlan) {
      this.openInquiry.emit({ program: 'One-Time Session', redirectUrl: this.plan.ctaUrl });
      return;
    }

    this.openInquiry.emit({ program: 'Elite Mentorship', redirectUrl: this.plan.ctaUrl });
  }
}
