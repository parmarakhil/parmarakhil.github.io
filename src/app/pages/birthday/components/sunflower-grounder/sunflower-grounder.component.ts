import { Component, OnInit, HostListener, Output, EventEmitter } from "@angular/core";
import { trigger, state, style, animate, transition } from "@angular/animations";

@Component({
  selector: "app-sunflower-grounder",
  templateUrl: "./sunflower-grounder.component.html",
  styleUrls: ["./sunflower-grounder.component.scss"],
  animations: [
    trigger("bloomState", [
      state("rest", style({ transform: "scale(1)" })),
      state("bloomed", style({ transform: "scale(1.15)" })),
      transition("rest <=> bloomed", animate("800ms ease-in-out"))
    ]),
    trigger("breatheState", [
      state("hidden", style({ opacity: 0, transform: "translateY(10px)" })),
      state("visible", style({ opacity: 1, transform: "translateY(0)" })),
      transition("hidden => visible", animate("400ms 200ms ease-out"))
    ])
  ]
})
export class SunflowerGrounderComponent implements OnInit {
  @Output() proceedClicked = new EventEmitter<void>();

  bloomState = "rest";
  breatheState = "hidden";
  isPressed = false;

  ngOnInit(): void {
    // Breathe state becomes visible on mount
    this.breatheState = "visible";
  }

  @HostListener("mousedown")
  onMouseDown(): void {
    this.isPressed = true;
    this.bloomState = "bloomed";
  }

  @HostListener("mouseup")
  onMouseUp(): void {
    this.isPressed = false;
    this.bloomState = "rest";
  }

  @HostListener("mouseleave")
  onMouseLeave(): void {
    if (this.isPressed) {
      this.isPressed = false;
      this.bloomState = "rest";
    }
  }

  @HostListener("touchstart")
  onTouchStart(): void {
    this.isPressed = true;
    this.bloomState = "bloomed";
  }

  @HostListener("touchend")
  onTouchEnd(): void {
    this.isPressed = false;
    this.bloomState = "rest";
  }

  onProceedClick(): void {
    this.proceedClicked.emit();
  }
}
