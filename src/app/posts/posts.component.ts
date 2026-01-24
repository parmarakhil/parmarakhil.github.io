import { Component, OnInit } from "@angular/core";
import { DataService } from "../core/data.service";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { IPost } from "./posts-interfaces";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss", "./posts.component.responsivity.scss"]
})
export class PostsComponent implements OnInit {

  currentPage: number = 1;
  resultsPerPage: number;
  posts: IPost[] = [];
  allPosts: IPost[] = []; // Store all posts for sorting
  sortBy: 'recent' | 'popular' = 'recent';
  isLoading: boolean = false;
  
  faChevronLeft: IconDefinition;
  faChevronRight: IconDefinition;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.faChevronLeft = faChevronLeft;
    this.faChevronRight = faChevronRight;
    
    this.loadPosts();
  }

  loadPosts(): void {
    this.isLoading = true;
    
    // Fetch the Posts from the Data Service
    this.dataService.getPosts()
      .subscribe({
        next: (posts: IPost[]) => {
          this.allPosts = posts;
          this.applySorting();
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error loading posts:', error);
          this.isLoading = false;
        }
      });
  }

  applySorting(): void {
    let sortedPosts = [...this.allPosts];
    
    if (this.sortBy === 'recent') {
      // Sort by publication date (newest first)
      sortedPosts.sort((a, b) => {
        const dateA = a.pubDate || new Date(a.date);
        const dateB = b.pubDate || new Date(b.date);
        return dateB.getTime() - dateA.getTime();
      });
    } else if (this.sortBy === 'popular') {
      // Sort by engagement (highest first), then by date
      sortedPosts.sort((a, b) => {
        const engagementA = a.engagement || 0;
        const engagementB = b.engagement || 0;
        
        if (engagementA !== engagementB) {
          return engagementB - engagementA;
        }
        
        // If engagement is equal, sort by date
        const dateA = a.pubDate || new Date(a.date);
        const dateB = b.pubDate || new Date(b.date);
        return dateB.getTime() - dateA.getTime();
      });
    }
    
    this.posts = sortedPosts;
    this.currentPage = 1; // Reset to first page when sorting changes
  }

  onSortChange(sortBy: 'recent' | 'popular'): void {
    this.sortBy = sortBy;
    this.applySorting();
  }

  ceil(val: number): number {
    return Math.ceil(val);
  }

  onClickPrevious() {
      this.currentPage--;
  }

  onClickNext() {
      this.currentPage++;
  }

  updateNavigation(resultsPerPage: number) {
    this.resultsPerPage = resultsPerPage;
  }
}