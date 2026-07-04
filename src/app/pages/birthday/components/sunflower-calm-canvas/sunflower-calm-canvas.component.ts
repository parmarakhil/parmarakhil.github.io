import { Component, OnInit, HostListener, Output, EventEmitter } from "@angular/core";
import { trigger, state, style, animate, transition } from "@angular/animations";

@Component({
  selector: "app-sunflower-calm-canvas",
  templateUrl: "./sunflower-calm-canvas.component.html",
  styleUrls: ["./sunflower-calm-canvas.component.scss"],
  animations: [
    trigger("sunflowerState", [
      state("rest", style({ transform: "scale(1) rotate(0deg)" })),
      state("interacting", style({ transform: "scale(1.12) rotate(8deg)" })),
      transition("rest <=> interacting", animate("2000ms cubic-bezier(0.4, 0, 0.2, 1)"))
    ]),
    trigger("breathePromptState", [
      state("hidden", style({ opacity: 0 })),
      state("visible", style({ opacity: 1 })),
      transition("hidden => visible", animate("600ms ease-out")),
      transition("visible => hidden", animate("400ms ease-in"))
    ]),
    trigger("continueButtonState", [
      state("hidden", style({ opacity: 0, pointerEvents: "none" })),
      state("visible", style({ opacity: 1, pointerEvents: "auto" })),
      transition("hidden => visible", animate("800ms 300ms ease-out"))
    ])
  ]
})
export class SunflowerCalmCanvasComponent implements OnInit {
  @Output() continueClicked = new EventEmitter<void>();

  sunflowerState = "rest";
  breathePromptState = "visible";
  continueButtonState = "hidden";

  isHolding = false;
  holdStartTime: number | null = null;
  holdDuration = 3000; // 3 seconds in milliseconds
  hasInteractedLongEnough = false;

  private holdTimerInterval: any;

  ngOnInit(): void {}

  @HostListener("mousedown")
  onMouseDown(): void {
    this.startHold();
  }

  @HostListener("mouseup")
  onMouseUp(): void {
    this.endHold();
  }

  @HostListener("mouseleave")
  onMouseLeave(): void {
    if (this.isHolding) {
      this.endHold();
    }
  }

  @HostListener("touchstart")
  onTouchStart(): void {
    this.startHold();
  }

  @HostListener("touchend")
  onTouchEnd(): void {
    this.endHold();
  }

  onContinueClick(): void {
    this.continueClicked.emit();
  }

  private startHold(): void {
    this.isHolding = true;
    this.holdStartTime = Date.now();
    this.sunflowerState = "interacting";
    this.breathePromptState = "visible";

    // Check if hold duration is met every 100ms
    this.holdTimerInterval = setInterval(() => {
      if (this.holdStartTime && Date.now() - this.holdStartTime >= this.holdDuration) {
        if (!this.hasInteractedLongEnough) {
          this.hasInteractedLongEnough = true;
          this.continueButtonState = "visible";
          clearInterval(this.holdTimerInterval);
        }
      }
    }, 100);
  }

  private endHold(): void {
    this.isHolding = false;
    this.holdStartTime = null;
    this.sunflowerState = "rest";
    this.breathePromptState = "visible";
    clearInterval(this.holdTimerInterval);
  }
}
