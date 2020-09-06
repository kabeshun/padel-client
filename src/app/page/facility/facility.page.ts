import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Facility } from "src/app/model/facility";
import { FacilityService } from "src/app/service/facility.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-facility",
  templateUrl: "./facility.page.html",
  styleUrls: ["./facility.page.scss"],
})
export class FacilityPage {
  facility: Facility;
  facilityId: number;
  targetTime: string;
  times: any[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private facilityService: FacilityService,
    private location: Location
  ) {
    this.checkUrlAndQueryParams();

    this.times = [
      { time: "9:00", selected: false },
      { time: "9:30", selected: false },
      { time: "10:00", selected: false },
      { time: "10:30", selected: false },
      { time: "11:00", selected: false },
      { time: "11:30", selected: false },
      { time: "12:00", selected: false },
      { time: "12:30", selected: false },
      { time: "13:00", selected: false },
      { time: "13:30", selected: false },
      { time: "14:00", selected: false },
      { time: "14:30", selected: false },
      { time: "15:00", selected: false },
      { time: "15:30", selected: false },
      { time: "16:00", selected: false },
      { time: "16:30", selected: false },
    ];
  }

  checkUrlAndQueryParams(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.facility = this.router.getCurrentNavigation().extras.state.facility;
      }

      if (params.id) {
        this.facilityId = params.id;
        if (!this.facility) {
          this.facilityService
            .loadFacility(this.facilityId)
            .subscribe((facility) => {
              this.facility = new Facility(facility);
            });
        }
      }
      if (params.time) {
        this.targetTime = params.time;
        this.setTime();
      }
    });
  }

  selectTime(index: number, time: string) {
    if (this.times[index].selected != true) {
      this.resetTime();
      this.times[index].selected = true;
    } else {
      this.times[index].selected = false;
    }
    console.error(this.times);
  }

  resetTime(): void {
    for (let index = 0; index < this.times.length; index++) {
      this.times[index].selected = false;
    }
  }

  setTime(): void {
    for (let index = 0; index < this.times.length; index++) {
      if (this.times[index].time === this.targetTime) {
        this.times[index].selected = true;
      }
    }
  }

  back(): void {
    this.location.back();
  }
}
