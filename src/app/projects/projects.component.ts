import { Component, OnInit } from '@angular/core';
import { DataService } from "../core/data.service";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { IProject } from "./projects-interfaces";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ["./projects.component.scss", "./projects.component.responsivity.scss"]
})
export class ProjectsComponent implements OnInit {
currentPage: number = 1;
  resultsPerPage: number;
  projects: IProject[] = [];
  
  faChevronLeft: IconDefinition;
  faChevronRight: IconDefinition;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.faChevronLeft = faChevronLeft;
    this.faChevronRight = faChevronRight;
    
    // Fetch the Projects from the Data Service
    this.dataService.getProjects()
      .subscribe((projects: IProject[]) => {
        this.projects = projects;
      });
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
