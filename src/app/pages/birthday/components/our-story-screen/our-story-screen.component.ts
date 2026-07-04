import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { trigger, style, animate, transition } from "@angular/animations";

interface DateMemory {
  id: string;
  imagePath: string;
  caption: string;
  context: string;
}

@Component({
  selector: "app-our-story-screen",
  templateUrl: "./our-story-screen.component.html",
  styleUrls: ["./our-story-screen.component.scss"],
  animations: [
    trigger("fadeIn", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateY(20px)" }),
        animate("1200ms 200ms ease-out", style({ opacity: 1, transform: "translateY(0)" }))
      ])
    ])
  ]
})
export class OurStoryScreenComponent implements OnInit {
  @Output() nextClicked = new EventEmitter<void>();

  storyText = `We both walked into our new jobs just looking to build our careers. We both had our guards up, and explicitly didn't want a relationship. But the universe had other plans for 11:11. Slowly, our walls came down, and we found a rare, effortless comfort zone where we could entirely be ourselves. We didn't just fall in love; we found home.`;

  dateMemories: DateMemory[] = [
    {
      id: "memory-1",
      imagePath: "assets/images/laxmi.jpeg",
      caption: "Around the blessings",
      context: "my laxmi"
    },
    {
      id: "memory-2",
      imagePath: "assets/images/loveyou.jpeg",
      caption: "Where Walls Came Down",
      context: "A Soft Turning Point"
    },
    {
      id: "memory-3",
      imagePath: "assets/images/myfavView.jpeg",
      caption: "Finding Home in You",
      context: "The Comfort Zone"
    },
    {
      id: "memory-4",
      imagePath: "assets/images/dream.jpeg",
      caption: "Dreaming Forward",
      context: "Future We Keep Choosing"
    },
    {
      id: "memory-5",
      imagePath: "assets/images/lovelykid.jpeg",
      caption: "Your Tender Joy",
      context: "The Smile I Protect"
    },
    {
      id: "memory-6",
      imagePath: "assets/images/sleepyface.jpeg",
      caption: "Peace Beside You",
      context: "Where Minds Finally Rest"
    }
  ];

  hoveredMemoryId: string | null = null;

  ngOnInit(): void {}

  onMemoryHover(memoryId: string): void {
    this.hoveredMemoryId = memoryId;
  }

  onMemoryLeave(): void {
    this.hoveredMemoryId = null;
  }

  onContinue(): void {
    this.nextClicked.emit();
  }
}
