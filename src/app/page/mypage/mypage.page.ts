import { Component } from "@angular/core";
import { User } from "../../model/user";
import { UserService } from "../../service/user.service";

@Component({
  selector: "app-mypage",
  templateUrl: "mypage.page.html",
  styleUrls: ["mypage.page.scss"],
})
export class MypagePage {
  me: User;

  constructor(private userService: UserService) {
    this.userService.loadUser(1).subscribe((me) => {
      this.me = new User(me);
    });
  }
}
