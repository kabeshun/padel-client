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
      "9:00",
      "9:00",
      "9:00",
      "9:00",
      "9:00",
      "9:00",
      "9:00",
      "9:00",
      "9:00",
      "9:00",
      "9:00",
      "9:00",
      "9:00",
      "9:00",
      "9:00",
    ];
  }
}
