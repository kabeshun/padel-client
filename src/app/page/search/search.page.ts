import { Component } from "@angular/core";
import { FacilityService } from "../../service/facility.service";
import { Facility } from "../../model/facility";
import { map } from "rxjs/operators";

@Component({
  selector: "app-search",
  templateUrl: "search.page.html",
  styleUrls: ["search.page.scss"],
})
export class SearchPage {
  facilities: Facility[];
  times: any[];
  constructor(private facilityService: FacilityService) {
    let params = {};
    this.facilityService.loadFacilities().subscribe((facilities) => {
      facilities = facilities.map((facilities) => new Facility(facilities));
      this.facilities = [];
      this.facilities = facilities;
      console.error(this.facilities);
      console.error(this.facilities);
    });
    this.times = [
      "9:00",
      "9:30",
      "10:00",
      "10:30",
      "11:00",
      "11:30",
      "12:00",
      "12:30",
      "13:00",
      "13:30",
      "14:00",
      "14:30",
      "15:00",
      "15:30",
      "16:00",
      "16:30",
    ];
  }
}
