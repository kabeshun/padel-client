import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { AngularTokenService } from "angular-token";
import { UserService } from "../../service/user.service";

@Component({
  selector: "app-onboarding",
  templateUrl: "./onboarding.page.html",
  styleUrls: ["./onboarding.page.scss"],
})
export class OnboardingPage {
  constructor(
    private navCtrl: NavController,
    private userService: UserService,
    private tokenService: AngularTokenService
  ) {}

  mailLogin() {
    console.log("mail");
    this.navCtrl.navigateForward("/onboarding/register");
  }

  facebookLogin() {
    console.log("facebook");
  }

  appleLogin() {
    console.log("apple");
  }

  goMailLoginPage() {
    this.navCtrl.navigateForward("/onboarding/login");
  }
}
