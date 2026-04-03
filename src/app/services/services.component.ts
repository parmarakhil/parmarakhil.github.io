import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { serverTimestamp } from 'firebase/firestore';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact/contact.service';
import { Contact } from '../model/contact.model';
import {
  APPLY_NOW_URL,
  BOOK_SESSION_URL,
  MENTORSHIP_DISCOUNTS,
  MENTORSHIP_PLANS,
  MentorshipPlan
} from '../mentorship/mentorship.data';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  private readonly emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$';
  private readonly phonePattern = '^(?!([6-9])\\1{9}$)[6-9][0-9]{9}$';
  private readonly linkedInPattern = '^https:\\/\\/(www\\.)?linkedin\\.com\\/in\\/[A-Za-z0-9_.%:-]+\\/?$';

  readonly topmateUrl = BOOK_SESSION_URL;
  readonly propeersUrl = APPLY_NOW_URL;
  readonly starterPlan = this.getPlan('Starter');
  readonly growthPlan = this.getPlan('Growth');
  readonly elitePlan = this.getPlan('Elite Mentorship');
  readonly discounts = MENTORSHIP_DISCOUNTS;

  showInquiryModal = false;
  selectedProgram = '';
  selectedRedirectUrl = '';
  inquirySubmitted = false;
  inquiryError = false;
  isSubmitting = false;
  showTimelineDropdown = false;
  showSessionTypeDropdown = false;

  inquiryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private route: ActivatedRoute
  ) {
    this.inquiryForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      phone: ['', [Validators.required, Validators.pattern(this.phonePattern)]],
      linkedin: ['', [Validators.required, Validators.pattern(this.linkedInPattern)]],
      currentRole: ['', [Validators.required]],
      targetGoal: ['', [Validators.required]],
      timeline: [''],
      sessionType: [''],
      additionalInfo: ['']
    });

    this.route.queryParamMap.subscribe((params) => {
      const inquiryType = params.get('inquiry');
      if (inquiryType === 'one-time') {
        this.openInquiryModal('One-Time Session', this.topmateUrl);
      }
    });
  }

  get isOneTimeMentorship(): boolean {
    return this.selectedProgram === 'One-Time Session' || this.selectedProgram === 'One-Time Mentorship';
  }

  openInquiryModal(program: string, redirectUrl: string): void {
    this.selectedProgram = program;
    this.selectedRedirectUrl = redirectUrl;
    this.inquirySubmitted = false;
    this.inquiryError = false;
    this.showInquiryModal = true;
    this.inquiryForm.reset();
    this.showTimelineDropdown = false;
    this.showSessionTypeDropdown = false;

    const timelineControl = this.inquiryForm.get('timeline');
    const sessionTypeControl = this.inquiryForm.get('sessionType');

    if (this.isOneTimeMentorship) {
      timelineControl?.clearValidators();
      timelineControl?.setValue('');
      sessionTypeControl?.setValidators([Validators.required]);
      sessionTypeControl?.setValue('');
    } else {
      timelineControl?.setValidators([Validators.required]);
      timelineControl?.setValue('');
      sessionTypeControl?.clearValidators();
      sessionTypeControl?.setValue('');
    }

    timelineControl?.updateValueAndValidity();
    sessionTypeControl?.updateValueAndValidity();
  }

  closeInquiryModal(): void {
    this.showInquiryModal = false;
    this.showTimelineDropdown = false;
    this.showSessionTypeDropdown = false;
  }

  async submitInquiry(): Promise<void> {
    if (this.inquiryForm.invalid) {
      this.inquiryForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.inquiryError = false;

    const inquiryContact: Contact = {
      name: this.inquiryForm.get('fullName')?.value,
      email: this.inquiryForm.get('email')?.value,
      message: this.buildInquiryMessage(),
      date: serverTimestamp() as Contact['date']
    };

    try {
      await this.contactService.createContact(inquiryContact);
      this.inquirySubmitted = true;
    } catch {
      this.inquiryError = true;
    } finally {
      this.isSubmitting = false;
    }
  }

  private buildInquiryMessage(): string {
    const fullName = this.inquiryForm.get('fullName')?.value || '';
    const email = this.inquiryForm.get('email')?.value || '';
    const phone = this.inquiryForm.get('phone')?.value || '';
    const linkedin = this.inquiryForm.get('linkedin')?.value || '';
    const currentRole = this.inquiryForm.get('currentRole')?.value || 'N/A';
    const targetGoal = this.inquiryForm.get('targetGoal')?.value || 'N/A';
    const timeline = this.inquiryForm.get('timeline')?.value || 'N/A';
    const sessionType = this.inquiryForm.get('sessionType')?.value || 'N/A';
    const additionalInfo = this.inquiryForm.get('additionalInfo')?.value || 'N/A';

    return [
      `Program: ${this.selectedProgram}`,
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `LinkedIn: ${linkedin}`,
      `Current Role: ${currentRole}`,
      `Target Goal: ${targetGoal}`,
      `Session Type: ${sessionType}`,
      `Preparation Timeline: ${timeline}`,
      `Additional Info: ${additionalInfo}`
    ].join('\n');
  }

  toggleTimelineDropdown(): void {
    this.showTimelineDropdown = !this.showTimelineDropdown;
    if (this.showTimelineDropdown) {
      this.showSessionTypeDropdown = false;
    }
  }

  selectTimeline(value: string): void {
    this.inquiryForm.get('timeline')?.setValue(value);
    this.showTimelineDropdown = false;
  }

  toggleSessionTypeDropdown(): void {
    this.showSessionTypeDropdown = !this.showSessionTypeDropdown;
    if (this.showSessionTypeDropdown) {
      this.showTimelineDropdown = false;
    }
  }

  selectSessionType(value: string): void {
    this.inquiryForm.get('sessionType')?.setValue(value);
    this.showSessionTypeDropdown = false;
  }

  private getPlan(planName: string): MentorshipPlan | undefined {
    return MENTORSHIP_PLANS.find((plan: MentorshipPlan) => plan.name === planName);
  }
}
