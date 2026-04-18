import { Component, OnInit } from '@angular/core';
import { serverTimestamp } from 'firebase/firestore';
import { ContactService } from '../contact/contact.service';
import { Contact } from '../model/contact.model';

interface RoadmapOption {
  id: string;
  label: string;
  description: string;
  url: string;
}

@Component({
  selector: 'app-lead-magnet',
  templateUrl: './lead-magnet.component.html',
  styleUrls: ['./lead-magnet.component.css']
})
export class LeadMagnetComponent implements OnInit {
  email = '';
  submitted = false;
  selectedRoadmapId: string | null = null;
  isSubmitting = false;

  readonly roadmapOptions: RoadmapOption[] = [
    {
      id: 'college',
      label: 'College Student',
      description: 'Best for foundations, DSA, projects, and AI-first preparation.',
      url: 'https://drive.google.com/file/d/1YtWoXfsM3CA8f6cFUfhr4QUJ8c3sry8_/view?usp=sharing'
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
      url: 'https://drive.google.com/file/d/1h4bOuSMZqOiRN6uRTnuCxFTmTvrq3WLh/view?usp=sharing'
    }
  ];

  get selectedRoadmap(): RoadmapOption | undefined {
    return this.roadmapOptions.find(opt => opt.id === this.selectedRoadmapId);
  }

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    // Set first roadmap as default
    this.selectedRoadmapId = 'early-career';
  }

  selectRoadmap(optionId: string): void {
    this.selectedRoadmapId = optionId;
  }

  async onSubmit(): Promise<void> {
    if (!this.email || !this.selectedRoadmapId) {
      return;
    }

    this.isSubmitting = true;

    try {
      const selectedOption = this.selectedRoadmap;
      if (!selectedOption) return;

      // Save lead to Firebase
      const roadmapLead: Contact = {
        name: `Roadmap Lead - ${selectedOption.label}`,
        email: this.email,
        message: [
          'Source: Homepage lead magnet',
          `Downloaded Roadmap: ${selectedOption.label}`,
          `Page URL: ${window.location.href}`,
          `User Agent: ${navigator.userAgent}`
        ].join('\n'),
        date: serverTimestamp() as Contact['date']
      };

      await this.contactService.createContact(roadmapLead);

      // Show success message
      this.submitted = true;

      // Open the PDF in a new tab
      setTimeout(() => {
        window.open(selectedOption.url, '_blank');
      }, 500);

      // Reset after 3 seconds
      setTimeout(() => {
        this.resetForm();
      }, 3000);

    } catch (error) {
      console.error('Error submitting lead:', error);
      // Still show success and open PDF even if Firebase save fails
      this.submitted = true;
      const selectedOption = this.selectedRoadmap;
      if (selectedOption) {
        setTimeout(() => {
          window.open(selectedOption.url, '_blank');
        }, 500);
      }
      setTimeout(() => {
        this.resetForm();
      }, 3000);
    } finally {
      this.isSubmitting = false;
    }
  }

  private resetForm(): void {
    this.email = '';
    this.submitted = false;
    this.selectedRoadmapId = 'early-career';
  }
}
