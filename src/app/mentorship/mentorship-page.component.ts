import { Component } from '@angular/core';
import {
  APPLY_NOW_URL,
  BOOK_SESSION_URL,
  MENTORSHIP_AUDIENCE_POINTS,
  MENTORSHIP_HERO_POINTS,
  MENTORSHIP_PLANS,
  MENTORSHIP_STEPS,
  MENTORSHIP_TESTIMONIALS,
  MENTORSHIP_VALUE_COLUMNS
} from './mentorship.data';

@Component({
  selector: 'app-mentorship-page',
  templateUrl: './mentorship-page.component.html'
})
export class MentorshipPageComponent {
  readonly bookSessionUrl = BOOK_SESSION_URL;
  readonly applyNowUrl = APPLY_NOW_URL;
  readonly propeersUrl = APPLY_NOW_URL;
  readonly directMentorshipUrl = APPLY_NOW_URL;
  readonly heroPoints = MENTORSHIP_HERO_POINTS;
  readonly plans = MENTORSHIP_PLANS;
  readonly valueColumns = MENTORSHIP_VALUE_COLUMNS;
  readonly audiencePoints = MENTORSHIP_AUDIENCE_POINTS;
  readonly steps = MENTORSHIP_STEPS;
  readonly testimonials = MENTORSHIP_TESTIMONIALS;
}
