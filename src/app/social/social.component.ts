import { Component } from '@angular/core';

interface SocialProfile {
  name: string;
  url: string;
  icon: string;
  description: string;
  followers?: string;
  color: string;
}

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent {
  socialProfiles: SocialProfile[] = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/parmarakhil/',
      icon: 'linkedin-in',
      description: 'Connect with me on LinkedIn to see my professional journey, endorsements, and work experience.',
      followers: '10,000+',
      color: '#0077B5'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/tech_byte_size/',
      icon: 'instagram',
      description: 'Follow me on Instagram for tech tips, interview prep insights, and career growth content.',
      followers: '20+',
      color: '#E4405F'
    }
  ];
}
