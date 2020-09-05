import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatchPage } from "./match.page";
import { ExploreContainerComponentModule } from "../explore-container/explore-container.module";

import { MatchPageRoutingModule } from "./match-routing.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MatchPageRoutingModule,
  ],
  declarations: [MatchPage],
})
export class MatchPageModule {}
