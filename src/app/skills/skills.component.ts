import { Component, OnInit, OnDestroy } from "@angular/core";
import { DataService } from "../core/data.service";
import { IAbout } from "../about/about-interfaces";
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Subscription } from "rxjs";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"]
})
export class SkillsComponent implements OnInit, OnDestroy {

  private readonly skillOrder: string[] = ["ai", "backend", "databases", "messaging", "cloud", "tools"];
  private readonly skillLabels: Record<string, string> = {
    ai: "AI",
    backend: "Backend",
    databases: "Databases",
    messaging: "Messaging",
    cloud: "Cloud",
    tools: "Tools"
  };

  subscription: Subscription;
  aboutData: IAbout;

  constructor(
    private dataService: DataService,
    private library: FaIconLibrary
  ) {
    library.addIconPacks(fas);
  }

  ngOnInit(): void {
    this.subscription = this.dataService.getAbout()
        .subscribe((about: IAbout) => this.aboutData = about);
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getSkillCategories(): string[] {
    if (!this.aboutData?.skills) return [];
    return this.skillOrder.filter(
      key => this.aboutData.skills[key] && this.aboutData.skills[key].length > 0
    );
  }

  getSkillCategoryLabel(category: string): string {
    return this.skillLabels[category] || category;
  }

  getCertCategories(): string[] {
    if (!this.aboutData?.certifications) return [];
    const categories = new Set(this.aboutData.certifications.map(c => c.category));
    return Array.from(categories);
  }

  getCertsByCategory(category: string): any[] {
    if (!this.aboutData?.certifications) return [];
    return this.aboutData.certifications.filter(c => c.category === category);
  }
}
