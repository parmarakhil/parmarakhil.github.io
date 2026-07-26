import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { trigger, style, animate, transition } from "@angular/animations";

interface DateMemory {
  id: string;
  title: string;
  song: string;
  subtitle: string;
  url: string;
  icon: string;
  imagePath: string;
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
      title: "Our Promise",
      song: "I Love You",
      subtitle: "One of the songs that became part of our journey.",
      url: "https://music.youtube.com/watch?v=lbfVSykGDX8&si=C8TRHfwucdajDWM-",
      icon: "🎵",
      imagePath: "assets/images/ILU.jpg"
    },
    {
      id: "memory-2",
      title: "Her Smile",
      song: "Laal Bindi",
      subtitle: "One of the songs that became part of our journey.",
      url: "https://music.youtube.com/watch?v=uXyqsmb9xwY&si=ZvuC6JqpP6mdHUBt",
      icon: "🎵",
      imagePath: "assets/images/Laal bindi.jpg"
    },
    {
      id: "memory-3",
      title: "The Beginning",
      song: "Falling in Love",
      subtitle: "One of the songs that became part of our journey.",
      url: "https://music.youtube.com/watch?v=3qZc08AiPYQ&si=8FlA86leZgGkpJ6t",
      icon: "🎵",
      imagePath: "assets/images/Falling In Love.jpg"
    },
    {
      id: "memory-4",
      title: "The Rhythm We Shared",
      song: "Qayde Se",
      subtitle: "One of the songs that became part of our journey.",
      url: "https://music.youtube.com/watch?v=Z25GNhpajyY&si=g9CBXMUteMzCl07s",
      icon: "🎵",
      imagePath: "assets/images/Qayde se.jpg"
    },
    {
      id: "memory-5",
      title: "Forgiveness",
      song: "Maafi",
      subtitle: "One of the songs that became part of our journey.",
      url: "https://music.youtube.com/watch?v=Hr5BtPkylmA&si=eA0Sgx14bwWCHiUv",
      icon: "🎵",
      imagePath: "assets/images/maafi.jpg"
    },
    {
      id: "memory-6",
      title: "Distance, Yet Close",
      song: "Dooron Dooron",
      subtitle: "One of the songs that became part of our journey.",
      url: "https://music.youtube.com/watch?v=9T-Zbxg9X_4&si=Yg5w4RQzPAeu8yGq",
      icon: "🎵",
      imagePath: "assets/images/Dooron.jpg"
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
