import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable } from "rxjs";
import { User } from "../model/user";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private api: ApiService) {}

  loadUsers(): Observable<User[]> {
    let params = {};
    return this.api.get("api/v1/users", params).pipe(
      map((data) => {
        return data as Array<User>;
      })
    );
  }

  loadUser(facility_id: number): Observable<User> {
    let params = {};
    return this.api.get("api/v1/users/" + facility_id, params).pipe(
      map((data) => {
        return new User(data);
      })
    );
  }
}
