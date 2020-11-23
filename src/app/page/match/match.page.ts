import { Component } from "@angular/core";
import { User } from "../../model/user";
import { UserService } from "../../service/user.service";

@Component({
  selector: "app-match",
  templateUrl: "match.page.html",
  styleUrls: ["match.page.scss"],
})
export class MatchPage {
  tab: string;
  users: User[];
  constructor(private userService: UserService) {
    this.tab = "match";
    this.userService.loadUsers().subscribe((users) => {
      users = users.map((users) => new User(users));
      this.users = users;
    });
  }

  tabChange() {
    console.log(this.tab);
  }
}
