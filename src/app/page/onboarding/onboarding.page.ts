import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-onboarding",
  templateUrl: "./onboarding.page.html",
  styleUrls: ["./onboarding.page.scss"],
})
export class OnboardingPage {
  constructor(private navCtrl: NavController) {}

  mailLogin() {
    console.log("mail");
    this.navCtrl.navigateForward("/tabs/search");
  }
  facebookLogin() {
    console.log("facebook");
  }
  appleLogin() {
    console.log("apple");
  }
}
