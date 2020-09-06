import { Component } from "@angular/core";
import { NavController } from "@ionic/angular";
import { FacilityService } from "../../service/facility.service";
import { Facility } from "../../model/facility";
import { FacilityPage } from "../facility/facility.page";
import { NavigationExtras, Router } from "@angular/router";

@Component({
  selector: "app-search",
  templateUrl: "search.page.html",
  styleUrls: ["search.page.scss"],
})
export class SearchPage {
  facilities: Facility[];
  times: any[];
  skeletonLoading: boolean = true;
  constructor(
    private facilityService: FacilityService,
    private navCtrl: NavController
  ) {
    this.facilityService.loadFacilities().subscribe((facilities) => {
      setTimeout(() => {
        facilities = facilities.map((facilities) => new Facility(facilities));
        this.facilities = [];
        this.facilities = facilities;
        this.skeletonLoading = false;
      }, 1000);
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

  selectTime(time: any, facility: Facility): void {
    let navigationExtras: NavigationExtras = {
      queryParams: { id: facility.getId(), time: time },
      state: {
        facility: facility,
      },
    };
    this.navCtrl.navigateForward(["/tabs/search/facility"], navigationExtras);
  }
}
