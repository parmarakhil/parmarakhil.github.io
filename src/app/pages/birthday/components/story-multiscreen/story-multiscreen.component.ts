import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { trigger, state, style, animate, transition } from "@angular/animations";

export interface Screen {
  id: string;
  type: "intro" | "calm-canvas" | "our-story" | "climax";
  title?: string;
  content?: string;
}

@Component({
  selector: "app-story-multiscreen",
  templateUrl: "./story-multiscreen.component.html",
  styleUrls: ["./story-multiscreen.component.scss"],
  animations: [
    trigger("screenState", [
      state("enter", style({ opacity: 1, transform: "translateY(0)" })),
      state("exit", style({ opacity: 0, transform: "translateY(20px)" })),
      transition("exit => enter", animate("1000ms ease-out")),
      transition("enter => exit", animate("600ms ease-in"))
    ])
  ]
})
export class StoryMultiscreenComponent implements OnInit {
  @Output() screenChanged = new EventEmitter<Screen["type"]>();

  screens: Screen[] = [
    {
      id: "intro",
      type: "intro",
      content: `They say 11:11 is the universe aligning to bring you exactly what you need. For a long time, I made that wish. Today, the universe gets to celebrate the day it actually answered. Happy Birthday to my favorite manifestation.`
    },
    {
      id: "calm-canvas",
      type: "calm-canvas"
    },
    {
      id: "our-story",
      type: "our-story"
    },
    {
      id: "chapter-3",
      type: "climax",
      title: "The Promise of Absolute Certainty",
      content: `I know your mind can sometimes carry the weight of the past, trying to protect you. So let me make this beautifully, undeniably clear: I am here for the long haul.

I am here to take every single step needed to build our life together. I don't just see a future with you-I am entirely certain of it. I cannot wait for the day I get to marry you, and until then, I promise to protect your heart, validate your thoughts, and walk right beside you through absolutely everything. You never have to overthink where we stand.

Happy Birthday, my beautiful manifestation.`
    }
  ];

  currentScreenIndex = 0;
  screenState = "enter";

  ngOnInit(): void {
    this.emitActiveScreen();
  }

  get currentScreen(): Screen {
    return this.screens[this.currentScreenIndex];
  }

  goToNextScreen(): void {
    if (this.currentScreenIndex < this.screens.length - 1) {
      this.screenState = "exit";
      setTimeout(() => {
        this.currentScreenIndex++;
        this.screenState = "enter";
        this.emitActiveScreen();
      }, 600);
    }
  }

  goToPreviousScreen(): void {
    if (this.currentScreenIndex > 0) {
      this.screenState = "exit";
      setTimeout(() => {
        this.currentScreenIndex--;
        this.screenState = "enter";
        this.emitActiveScreen();
      }, 600);
    }
  }

  goToScreen(index: number): void {
    if (index < 0 || index >= this.screens.length || index === this.currentScreenIndex) {
      return;
    }

    this.screenState = "exit";
    setTimeout(() => {
      this.currentScreenIndex = index;
      this.screenState = "enter";
      this.emitActiveScreen();
    }, 600);
  }

  private emitActiveScreen(): void {
    this.screenChanged.emit(this.currentScreen.type);
  }
}
