import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {
  AlertController,
  LoadingController,
  NavController,
} from "@ionic/angular";
import { AngularTokenService } from "angular-token";
import { UserService } from "../../../service/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  loginForm: FormGroup;

  constructor(
    private userService: UserService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private navCtrl: NavController
  ) {
    //TODO: Detailed Validation
    this.loginForm = new FormGroup(
      {
        email: new FormControl("", Validators.compose([Validators.required])),
        password: new FormControl(
          "",
          Validators.compose([Validators.required, Validators.minLength(6)])
        ),
      },
      {}
    );
  }

  ngOnInit() {}

  async register() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.userService
      .angularTokenSignIn(
        this.loginForm.value["email"],
        this.loginForm.value["password"]
      )
      .subscribe(
        async (res) => {
          console.log(res);
          await loading.dismiss();
          this.navCtrl.navigateForward("/tabs/search");
        },
        async (error) => {
          console.log(error);
          await loading.dismiss();
          const alert = await this.alertCtrl.create({
            message: "ログインに失敗しました",
            buttons: ["OK"],
          });
          await alert.present();
        }
      );
  }

  goLoginPage() {
    this.navCtrl.navigateForward("/onboarding/login");
  }

  isDisabled(): boolean {
    return this.loginForm.invalid;
  }
}
