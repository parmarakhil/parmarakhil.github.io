import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BirthdayPageComponent } from "./birthday-page.component";

const routes: Routes = [
  {
    path: "",
    component: BirthdayPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BirthdayRoutingModule {}
