import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
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

@NgModule({
  imports: [
    ReactiveFormsModule,
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
    MentorshipPlanCardComponent
  ],
  exports: [ ResumeComponent, MentorshipPlanCardComponent ],
  providers: [ ContactService ]
})

export class ResumeModule { }
