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
  ) {
    console.error(this.tokenService.userSignedIn());
  }

  mailLogin() {
    console.log("mail");
    //this.navCtrl.navigateForward("/tabs/search");
    this.userService.signUp().subscribe(
      () => {
        console.log("aaaa");
      },
      () => {
        console.log("error");
      }
    );
  }

  register() {
    this.userService.angularTokenRegister().subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  facebookLogin() {
    console.log("facebook");
  }
  appleLogin() {
    this.userService.angularTokenSignIn().subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
