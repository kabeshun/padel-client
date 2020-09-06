import { Component } from "@angular/core";
import { IonTabs } from "@ionic/angular";

@Component({
  selector: "app-tabs",
  templateUrl: "tabs.page.html",
  styleUrls: ["tabs.page.scss"],
})
export class TabsPage {
  selectedTab: string;

  constructor() {
    this.selectedTab == "mypage";
  }

  ionTabChanged(tabs: IonTabs) {
    this.selectedTab = tabs.getSelected();
  }
}
