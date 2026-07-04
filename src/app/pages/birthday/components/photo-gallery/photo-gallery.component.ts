import { Component, OnInit } from "@angular/core";
import { trigger, style, animate, transition } from "@angular/animations";

interface DatePhoto {
  id: string;
  imagePath: string;
  location: string;
  context: string;
}

@Component({
  selector: "app-photo-gallery",
  templateUrl: "./photo-gallery.component.html",
  styleUrls: ["./photo-gallery.component.scss"],
  animations: [
    trigger("imageHover", [
      transition(":enter", [
        style({ opacity: 0, transform: "scale(0.95)" }),
        animate("600ms ease-out", style({ opacity: 1, transform: "scale(1)" }))
      ])
    ])
  ]
})
export class PhotoGalleryComponent implements OnInit {
  datePhotos: DatePhoto[] = [
    {
      id: "date-1",
      imagePath: "assets/images/laxmi.jpeg",
      location: "Around the blessings",
      context: "my laxmi"
    },
    {
      id: "date-2",
      imagePath: "assets/images/loveyou.jpeg",
      location: "Walls Came Down",
      context: "A soft turning point"
    },
    {
      id: "date-3",
      imagePath: "assets/images/myfavView.jpeg",
      location: "Favorite View",
      context: "Where everything felt certain"
    },
    {
      id: "date-4",
      imagePath: "assets/images/dream.jpeg",
      location: "Dreaming Forward",
      context: "The future we keep choosing"
    },
    {
      id: "date-5",
      imagePath: "assets/images/lovelykid.jpeg",
      location: "Your Tender Joy",
      context: "The smile I always protect"
    },
    {
      id: "date-6",
      imagePath: "assets/images/sleepyface.jpeg",
      location: "Quiet Evenings",
      context: "Where minds finally rest"
    }
  ];

  hoveredPhotoId: string | null = null;

  ngOnInit(): void {}

  onPhotoHover(photoId: string): void {
    this.hoveredPhotoId = photoId;
  }

  onPhotoLeave(): void {
    this.hoveredPhotoId = null;
  }
}
