import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ResumeComponent } from "../resume/resume.component";
import { HeaderComponent } from "../header/header.component";
import { AboutComponent } from "../about/about.component";
import { SkillsComponent } from "../skills/skills.component";
import { ContactComponent } from "../contact/contact.component";
import { TestimonialsComponent } from "../testimonials/testimonials.component";
import { ServicesComponent } from "../services/services.component";
import { AchievementsComponent } from "../achievements/achievements.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { WelcomeModule } from "../welcome/welcome.molule";
import { ExperienceModule } from "../experience/experience.module";
import { CoreModule } from "../core/core.module";
import { PostsModule } from "../posts/posts.molule";
import { ProjectsModule } from "../projects/projects.molule";
import { ContactService } from "../contact/contact.service";
import { FooterComponent } from "../footer/footer.component";
import { MentorshipPageComponent } from "../mentorship/mentorship-page.component";
import { MentorshipPlanCardComponent } from "../mentorship/mentorship-plan-card.component";
import { SocialComponent } from "../social/social.component";
import { RoadmapsPageComponent } from "../roadmaps/roadmaps-page.component";
import { RoadmapStageCardComponent } from "../roadmaps/roadmap-stage-card.component";
import { RoadmapTeaserComponent } from "../roadmap-teaser/roadmap-teaser.component";
import { ContentHubComponent } from "../content-hub/content-hub.component";
import { LeadMagnetComponent } from "../lead-magnet/lead-magnet.component";
import { FinalCtaComponent } from "../final-cta/final-cta.component";

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule, 
    RouterModule,
    CoreModule,
    FontAwesomeModule,
    WelcomeModule,
    ExperienceModule,
    PostsModule,
    ProjectsModule
  ],
  declarations: [ 
    ResumeComponent,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent,
    TestimonialsComponent,
    ServicesComponent,
    AchievementsComponent,
    FooterComponent,
    MentorshipPageComponent,
    MentorshipPlanCardComponent,
    SocialComponent,
    RoadmapsPageComponent,
    RoadmapStageCardComponent,
    RoadmapTeaserComponent,
    ContentHubComponent,
    LeadMagnetComponent,
    FinalCtaComponent,
  ],
  exports: [ ResumeComponent, MentorshipPlanCardComponent ],
  providers: [ ContactService ]
})

export class ResumeModule { }
