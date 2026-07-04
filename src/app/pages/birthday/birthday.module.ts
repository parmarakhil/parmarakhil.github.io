import { NgModule } from "@angular/core";
import { BirthdayRoutingModule } from "./birthday-routing.module";
import { CommonModule } from "@angular/common";
import { BirthdayPageComponent } from "./birthday-page.component";
import { ClockGateComponent } from "./components/clock-gate/clock-gate.component";
import { SunflowerGrounderComponent } from "./components/sunflower-grounder/sunflower-grounder.component";
import { PhotoGalleryComponent } from "./components/photo-gallery/photo-gallery.component";
import { StorySectionComponent } from "./components/story-section/story-section.component";
import { StoryMultiscreenComponent } from "./components/story-multiscreen/story-multiscreen.component";
import { SunflowerCalmCanvasComponent } from "./components/sunflower-calm-canvas/sunflower-calm-canvas.component";
import { OurStoryScreenComponent } from "./components/our-story-screen/our-story-screen.component";
import { CoreModule } from "../../core/core.module";

@NgModule({
  imports: [CommonModule, BirthdayRoutingModule, CoreModule],
  declarations: [
    BirthdayPageComponent,
    ClockGateComponent,
    SunflowerGrounderComponent,
    PhotoGalleryComponent,
    StoryMultiscreenComponent,
    StorySectionComponent,
    SunflowerCalmCanvasComponent,
    OurStoryScreenComponent
  ],
  exports: [BirthdayPageComponent]
})
export class BirthdayModule {}
