import { Component, OnInit } from "@angular/core";
import { trigger, style, animate, transition } from "@angular/animations";

export interface StoryChapter {
  id: string;
  title: string;
  content: string;
  type: "intro" | "chapter" | "climax";
}

@Component({
  selector: "app-story-section",
  templateUrl: "./story-section.component.html",
  styleUrls: ["./story-section.component.scss"],
  animations: [
    trigger("fadeIn", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateY(20px)" }),
        animate("1200ms 300ms ease-out", style({ opacity: 1, transform: "translateY(0)" }))
      ])
    ])
  ]
})
export class StorySectionComponent implements OnInit {
  chapters: StoryChapter[] = [
    {
      id: "intro",
      title: "11:11 — The Universe Aligns",
      content: `They say 11:11 is the universe aligning to bring you exactly what you need. For a long time, I made that wish. Tomorrow, the universe gets to celebrate the day it actually answered. Happy Birthday to my favorite manifestation.`,
      type: "intro"
    },
    {
      id: "chapter-1",
      title: "Chapter 1: The Unexpected Cubicle",
      content: `We both walked into our new jobs just looking to build our careers. If someone had told me on Day One that my future wife was sitting in the same room, I wouldn't have believed them. We both had our guards up. We both explicitly didn't want a relationship. We were focused, protected, and keeping to ourselves—or so we thought.`,
      type: "chapter"
    },
    {
      id: "chapter-2",
      title: "Chapter 2: Dropping the Guard & Finding Comfort",
      content: `But the universe had other plans for 11:11. Slowly, without either of us looking for it, the walls started coming down. Conversations turned into lunches, lunches turned into dates, and dates turned into a profound realization: I am completely myself when I am with you. We didn't just fall in love; we found a rare, effortless comfort zone where our minds could finally just rest.`,
      type: "chapter"
    },
    {
      id: "chapter-3",
      title: "The Promise of Absolute Certainty",
      content: `I know your mind can sometimes carry the weight of the past, trying to protect you. So let me make this beautifully, undeniably clear: I am here for the long haul. I am here to take every single step needed to build our life together. I don't just see a future with you—I am entirely certain of it. I cannot wait for the day I get to marry you, and until then, I promise to protect your heart, validate your thoughts, and walk right beside you through absolutely everything. You never have to wonder where we stand.`,
      type: "climax"
    }
  ];

  visibleChapters: Set<string> = new Set();

  ngOnInit(): void {
    // Initialize first chapter (intro) as visible immediately
    this.visibleChapters.add("intro");
  }

  onChapterVisible(chapterId: string): void {
    this.visibleChapters.add(chapterId);
  }
}
