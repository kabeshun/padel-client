import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "search",
        loadChildren: () =>
          import("../search/search.module").then((m) => m.SearchPageModule),
      },
      {
        path: "match",
        loadChildren: () =>
          import("../match/match.module").then((m) => m.MatchPageModule),
      },
      {
        path: "mypage",
        loadChildren: () =>
          import("../mypage/mypage.module").then((m) => m.MypagePageModule),
      },
      {
        path: "search/facility",
        loadChildren: () =>
          import("../facility/facility.module").then(
            (m) => m.FacilityPageModule
          ),
      },
      {
        path: "",
        redirectTo: "/tabs/search",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/tabs/search",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
