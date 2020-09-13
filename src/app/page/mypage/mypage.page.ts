import { Component } from "@angular/core";
import {
  AlertController,
  LoadingController,
  NavController,
} from "@ionic/angular";
import { User } from "../../model/user";
import { UserService } from "../../service/user.service";

@Component({
  selector: "app-mypage",
  templateUrl: "mypage.page.html",
  styleUrls: ["mypage.page.scss"],
})
export class MypagePage {
  me: User;

  constructor(
    private userService: UserService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private navCtrl: NavController
  ) {
    this.userService.loadUser(1).subscribe((me) => {
      this.me = new User(me);
    });
  }

  async logout() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.userService.angularTokenSignOut().subscribe(
      async (res) => {
        console.log(res);
        await loading.dismiss();
        this.navCtrl.navigateForward("/onboarding");
      },
      async (error) => {
        console.log(error);
        await loading.dismiss();
        const alert = await this.alertCtrl.create({
          message: "ログアウトに失敗しました",
          buttons: ["OK"],
        });
        await alert.present();
      }
    );
  }
}
