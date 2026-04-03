import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { serverTimestamp } from 'firebase/firestore';
import { ContactService } from '../contact/contact.service';
import { Contact } from '../model/contact.model';
import { ROADMAP_STAGES, RoadmapStage } from './roadmaps.data';

interface DownloadOption {
  id: string;
  label: string;
  description: string;
  url: string;
}

@Component({
  selector: 'app-roadmaps-page',
  templateUrl: './roadmaps-page.component.html',
  styleUrls: ['./roadmaps-page.component.css']
})
export class RoadmapsPageComponent implements OnInit {
  readonly stages: RoadmapStage[] = ROADMAP_STAGES;
  readonly mediumUrl = 'https://medium.com/@akhilparmar2496';
  readonly mentorshipUrl = '/mentorship';
  readonly linkedInShareText = `One thing I struggled with earlier was not knowing what to focus on next.

This roadmap breaks it down really well based on your experience level:

🎓 Students
💼 Early career
🧠 Experienced engineers

Worth checking out:
https://akhilparmar.in/roadmap`;
  readonly downloadOptions: DownloadOption[] = [
    {
      id: 'college',
      label: 'College Student',
      description: 'Best for foundations, DSA, projects, and AI-first preparation.',
      url: 'https://drive.google.com/file/d/1h4bOuSMZqOiRN6uRTnuCxFTmTvrq3WLh/view?usp=sharing'
    },
    {
      id: 'early-career',
      label: 'Early Career Professional',
      description: 'Balanced roadmap for DSA, LLD, HLD, delivery, and growth.',
      url: 'https://drive.google.com/file/d/1ya_5KkKB_5eJYKLl3kC7TIHf8K99rqSF/view?usp=sharing'
    },
    {
      id: 'experienced',
      label: 'Staff or Experienced Professionals',
      description: 'HLD-heavy roadmap for systems, scale, architecture, and AI systems.',
      url: 'https://drive.google.com/file/d/1YtWoXfsM3CA8f6cFUfhr4QUJ8c3sry8_/view?usp=sharing'
    }
  ];

  leadForm: FormGroup;
  leadSubmitted = false;
  leadSubmissionError = false;
  isSubmittingLead = false;
  showWebinarModal = false;
  showWebinarWaitlistForm = false;
  webinarWaitlistSubmitted = false;
  webinarWaitlistError = false;
  isSubmittingWebinarWaitlist = false;
  selectedDownloadOptionId = 'college';
  shareStatus = '';
  webinarWaitlistForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private titleService: Title,
    private metaService: Meta,
    private contactService: ContactService
  ) {
    this.leadForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
    this.webinarWaitlistForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle('Software Engineering Roadmap 2026 | Akhil Parmar');
    this.metaService.updateTag({
      name: 'description',
      content: 'Complete software engineering roadmap for college students, early career, and experienced engineers. Practical paths for DSA, system design, and AI skills in 2026.'
    });
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (!element) {
      return;
    }

    const offsetTop = element.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top: Math.max(offsetTop, 0), behavior: 'smooth' });
  }

  selectDownloadOption(optionId: string): void {
    this.selectedDownloadOptionId = optionId;
  }

  openWebinarModal(): void {
    this.showWebinarModal = true;
    this.showWebinarWaitlistForm = false;
    this.webinarWaitlistSubmitted = false;
    this.webinarWaitlistError = false;
    this.webinarWaitlistForm.reset();
  }

  closeWebinarModal(): void {
    this.showWebinarModal = false;
  }

  showWebinarWaitlist(): void {
    this.showWebinarWaitlistForm = true;
    this.webinarWaitlistSubmitted = false;
    this.webinarWaitlistError = false;
  }

  get selectedDownloadOption(): DownloadOption | undefined {
    return this.downloadOptions.find((option) => option.id === this.selectedDownloadOptionId);
  }

  async submitLead(): Promise<void> {
    if (this.leadForm.invalid) {
      this.leadForm.markAllAsTouched();
      return;
    }

    const email = this.leadForm.get('email')?.value;
    const selectedOption = this.selectedDownloadOption;
    if (!selectedOption) {
      return;
    }

    this.isSubmittingLead = true;
    this.leadSubmissionError = false;

    const storageKey = 'roadmap_leads';
    const existingLeads = localStorage.getItem(storageKey);
    const parsedLeads: Array<{ email: string; optionId: string; createdAt: string }> = existingLeads ? JSON.parse(existingLeads) : [];

    const leadExists = parsedLeads.some((lead) => lead.email === email && lead.optionId === this.selectedDownloadOptionId);

    if (!leadExists) {
      parsedLeads.push({
        email,
        optionId: this.selectedDownloadOptionId,
        createdAt: new Date().toISOString()
      });
      localStorage.setItem(storageKey, JSON.stringify(parsedLeads));
    }

    const roadmapLead: Contact = {
      name: `Roadmap Lead - ${selectedOption.label}`,
      email,
      message: [
        'Source: /roadmap lead capture',
        `Downloaded Roadmap: ${selectedOption.label}`,
        `Page URL: ${window.location.href}`,
        `User Agent: ${navigator.userAgent}`
      ].join('\n'),
      date: serverTimestamp() as Contact['date']
    };

    try {
      await this.contactService.createContact(roadmapLead);
      this.leadSubmitted = true;
      this.openRoadmapInNewTab(selectedOption.url);
    } catch {
      this.leadSubmissionError = true;
    } finally {
      this.isSubmittingLead = false;
    }
  }

  async shareOnLinkedIn(): Promise<void> {
    const pageUrl = encodeURIComponent(window.location.href);
    const didCopy = await this.copyToClipboard(this.linkedInShareText);
    this.shareStatus = didCopy
      ? 'LinkedIn post text copied. Paste it into the post composer after the share window opens.'
      : 'LinkedIn share opened. Copy the suggested post text manually if your browser blocks clipboard access.';

    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`, '_blank', 'noopener,noreferrer');
  }

  shareOnTwitter(): void {
    const pageUrl = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Found a really useful roadmap for software engineers.

Breaks down what to focus on at different stages:

• Students
• Early career
• Senior engineers

https://akhilparmar.in/roadmap`);
    window.open(`https://twitter.com/intent/tweet?url=${pageUrl}&text=${text}`, '_blank', 'noopener,noreferrer');
  }

  async submitWebinarWaitlist(): Promise<void> {
    if (this.webinarWaitlistForm.invalid) {
      this.webinarWaitlistForm.markAllAsTouched();
      return;
    }

    this.isSubmittingWebinarWaitlist = true;
    this.webinarWaitlistError = false;

    const name = this.webinarWaitlistForm.get('name')?.value || '';
    const email = this.webinarWaitlistForm.get('email')?.value || '';

    const waitlistLead: Contact = {
      name,
      email,
      message: [
        'Source: /roadmap webinar waitlist',
        'Intent: Webinar recording waitlist',
        `Page URL: ${window.location.href}`,
        `User Agent: ${navigator.userAgent}`
      ].join('\n'),
      date: serverTimestamp() as Contact['date']
    };

    try {
      await this.contactService.createContact(waitlistLead);
      this.webinarWaitlistSubmitted = true;
      this.webinarWaitlistForm.reset();
    } catch {
      this.webinarWaitlistError = true;
    } finally {
      this.isSubmittingWebinarWaitlist = false;
    }
  }

  private openRoadmapInNewTab(url: string): void {
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    anchor.style.display = 'none';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    // Keep user on the current page after opening the tab (best effort; browser-dependent).
    setTimeout(() => window.focus(), 0);
  }

  private async copyToClipboard(value: string): Promise<boolean> {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
        return true;
      }
    } catch {
      return this.copyWithTextarea(value);
    }

    return this.copyWithTextarea(value);
  }

  private copyWithTextarea(value: string): boolean {
    const textarea = document.createElement('textarea');
    textarea.value = value;
    textarea.setAttribute('readonly', 'true');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();

    try {
      return document.execCommand('copy');
    } catch {
      return false;
    } finally {
      document.body.removeChild(textarea);
    }
  }
}
