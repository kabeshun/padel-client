import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./page/tabs/tabs.module").then((m) => m.TabsPageModule),
  },
  {
    path: "facility",
    loadChildren: () =>
      import("./page/facility/facility.module").then(
        (m) => m.FacilityPageModule
      ),
  },
  {
    path: "onboarding",
    loadChildren: () =>
      import("./page/onboarding/onboarding.module").then(
        (m) => m.OnboardingPageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
