import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable } from "rxjs";
import { Facility } from "../model/facility";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class FacilityService {
  param: any;
  constructor(private api: ApiService) {}

  loadFacilities(): Observable<Facility[]> {
    let params = {};
    return this.api.get("api/v1/facilities", params).pipe(
      map((data) => {
        return data as Array<Facility>;
      })
    );
  }

  loadFacility(facility_id: number): Observable<Facility> {
    let params = {};
    return this.api.get("api/v1/facilities/" + facility_id, params).pipe(
      map((data) => {
        return new Facility(data);
      })
    );
  }
}
