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
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage implements OnInit {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  registerForm: FormGroup;

  constructor(
    private userService: UserService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private tokenService: AngularTokenService
  ) {
    //TODO: Detailed Validation
    this.registerForm = new FormGroup(
      {
        email: new FormControl("", Validators.compose([Validators.required])),
        lastName: new FormControl(
          "",
          Validators.compose([Validators.required])
        ),
        firstName: new FormControl(
          "",
          Validators.compose([Validators.required])
        ),
        password: new FormControl(
          "",
          Validators.compose([Validators.required, Validators.minLength(6)])
        ),
        passwordConfirmation: new FormControl(
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
      .angularTokenRegister(
        this.registerForm.value["lastName"],
        this.registerForm.value["firstName"],
        this.registerForm.value["email"],
        this.registerForm.value["password"],
        this.registerForm.value["passwordConfirmation"]
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
            message: "ユーザの登録に失敗しました",
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
    return this.registerForm.invalid;
  }
}
