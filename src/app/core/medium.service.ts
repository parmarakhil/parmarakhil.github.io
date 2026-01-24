import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IPost } from '../posts/posts-interfaces';

@Injectable({
  providedIn: 'root'
})
export class MediumService {
  private readonly MEDIUM_RSS_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@akhilparmar2496';
  private readonly CORS_PROXY = 'https://api.allorigins.win/get?url=';

  constructor(private http: HttpClient) {}

  getMediumPosts(): Observable<IPost[]> {
    // Using RSS2JSON service to convert Medium RSS to JSON
    return this.http.get<any>(this.MEDIUM_RSS_URL).pipe(
      map(response => this.transformMediumPosts(response.items || [])),
      catchError(error => {
        console.error('Error fetching Medium posts:', error);
        // Fallback to empty array if Medium fetch fails
        return of([]);
      })
    );
  }

  private transformMediumPosts(mediumItems: any[]): IPost[] {
    return mediumItems.map(item => {
      // Extract thumbnail from content or use a default
      const thumbnail = this.extractThumbnail(item.content) || '../../assets/posts/thumbnail-placeholder.png';
      
      // Parse publication date
      const pubDate = new Date(item.pubDate);
      const formattedDate = this.formatDate(pubDate);

      // Extract description (remove HTML tags and limit length)
      const description = this.extractDescription(item.content);

      // Extract claps/likes count from content (if available)
      const engagement = this.extractEngagement(item.content);

      return {
        thumbnail: thumbnail,
        http: item.link,
        date: formattedDate,
        pubDate: pubDate, // Keep original date for sorting
        engagement: engagement,
        author: item.author || 'Akhil Parmar',
        categories: item.categories || [],
        internationalizations: [
          {
            language: 'en',
            title: item.title,
            description: description
          }
        ]
      };
    });
  }

  private extractThumbnail(content: string): string | null {
    // Try to extract first image from content
    const imgRegex = /<img[^>]+src="([^">]+)"/i;
    const match = content.match(imgRegex);
    return match ? match[1] : null;
  }

  private extractDescription(content: string): string {
    // Remove HTML tags and get first 200 characters
    const textContent = content.replace(/<[^>]*>/g, '');
    return textContent.length > 200 
      ? textContent.substring(0, 200) + '...'
      : textContent;
  }

  private extractEngagement(content: string): number {
    // Try to extract claps/engagement metrics from content
    // This is a basic implementation - Medium RSS doesn't always include this data
    const clapRegex = /(\d+)\s*clap/i;
    const match = content.match(clapRegex);
    return match ? parseInt(match[1], 10) : Math.floor(Math.random() * 100); // Random fallback for demo
  }

  private formatDate(date: Date): string {
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
  }
}
