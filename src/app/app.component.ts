import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  title: string = "Akhil Parmar";

  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {

    this.titleService.setTitle(this.title);

    this.metaTagService.addTags([
      { name: "keywords", content: "Software developer, Web Developer, Java Developer, Full-stack Java Developer,Automation developer,Camunda Developer, Akhil Parmar, Akhil Parmar website, Akhil Parmar CV" },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Akhil Parmar" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "date", content: "2020-05-12", scheme: "YYYY-MM-DD" },
      { charset: "UTF-8" }
    ]);

    this.metaTagService.updateTag(
      { name: "description", content: "Hello, I'm a Full-stack Java Web Developer with 2 years of experience developing automation tools using java, angular and camunda" }
    );
  }
}
