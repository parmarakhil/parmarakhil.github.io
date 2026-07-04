import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { trigger, state, style, animate, transition } from "@angular/animations";

@Component({
  selector: "app-birthday-clock-gate",
  templateUrl: "./clock-gate.component.html",
  styleUrls: ["./clock-gate.component.scss"],
  animations: [
    trigger("fadeOut", [
      state("hidden", style({ opacity: 0, pointerEvents: "none" })),
      state("visible", style({ opacity: 1 })),
      transition("visible => hidden", animate("1200ms ease-in-out"))
    ])
  ]
})
export class ClockGateComponent implements OnInit {
  @Output() gateClicked = new EventEmitter<void>();

  isHidden = false;
  currentState = "visible";

  ngOnInit(): void {
    // Clock is fixed at 11:11 for the mystical moment
  }

  onClockClick(): void {
    this.currentState = "hidden";
    this.isHidden = true;
    // Emit event after animation completes
    setTimeout(() => this.gateClicked.emit(), 1200);
  }
}
