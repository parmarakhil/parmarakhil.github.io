import { Component } from '@angular/core';
import { MENTORSHIP_PLANS } from '../mentorship/mentorship.data';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  readonly plans = MENTORSHIP_PLANS;
}
