import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-birthday-page",
  templateUrl: "./birthday-page.component.html",
  styleUrls: ["./birthday-page.component.scss"]
})
export class BirthdayPageComponent implements OnInit {
  @ViewChild("mainContent") mainContent: ElementRef;
  @ViewChild("backgroundAudio") backgroundAudio: ElementRef<HTMLAudioElement>;

  gateClicked = false;
  sunflowerClicked = false;
  currentStoryScreen: "intro" | "calm-canvas" | "our-story" | "climax" = "intro";
  audioEnabled = false;
  showAudioTooltip = false;

  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) {}

  ngOnInit(): void {
    // Set SEO metadata to noindex for privacy
    this.titleService.setTitle("Private Celebration");

    this.metaTagService.addTag({
      name: "robots",
      content: "noindex, nofollow"
    });

    this.metaTagService.addTag({
      name: "viewport",
      content: "width=device-width, initial-scale=1, viewport-fit=cover"
    });

    // Disable automatic audio in accordance with browser policies
    this.audioEnabled = false;
  }

  onGateClicked(): void {
    this.gateClicked = true;
    // Smooth scroll to main content after gate dismisses
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  }

  onSunflowerProceed(): void {
    this.sunflowerClicked = true;
    // Smooth scroll to story content
    setTimeout(() => {
      this.mainContent?.nativeElement?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }

  onStoryScreenChanged(screen: "intro" | "calm-canvas" | "our-story" | "climax"): void {
    this.currentStoryScreen = screen;
  }

  toggleAudio(): void {
    this.audioEnabled = !this.audioEnabled;
    if (this.backgroundAudio?.nativeElement) {
      if (this.audioEnabled) {
        this.backgroundAudio.nativeElement.volume = 0.4; // Set volume to 40%
        this.backgroundAudio.nativeElement.play().catch(err => {
          console.log("Audio playback failed:", err);
          this.audioEnabled = false;
        });
      } else {
        this.backgroundAudio.nativeElement.pause();
      }
    }
  }

  onAudioButtonHover(): void {
    this.showAudioTooltip = true;
  }

  onAudioButtonLeave(): void {
    this.showAudioTooltip = false;
  }

  get isFinalScreen(): boolean {
    return this.sunflowerClicked && this.currentStoryScreen === "climax";
  }
}
