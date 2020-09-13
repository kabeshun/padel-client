import { Component } from "@angular/core";

import { NavController, Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AngularTokenService } from "angular-token";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private tokenService: AngularTokenService,
    private navCtrl: NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      //TODO: want to use Auth Guard to control
      if (!this.tokenService.userSignedIn()) {
        console.log("not login");
        this.navCtrl.navigateRoot("/onboarding");
      } else {
        console.log("logged in");
        this.navCtrl.navigateRoot("/tabs/search");
      }
    });
  }
}
