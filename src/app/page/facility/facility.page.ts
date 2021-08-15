import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Facility } from "src/app/model/facility";
import { FacilityService } from "src/app/service/facility.service";
import { Location } from "@angular/common";
import { UserService } from "src/app/service/user.service";
import { AlertController, LoadingController } from "@ionic/angular";
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
  selectFavorite: boolean = true;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private facilityService: FacilityService,
    private location: Location,
    private userService: UserService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
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

  ionViewWillEnter() {
    this.facilityService.loadFacility(this.facilityId).subscribe((facility) => {
      console.error(facility);
      this.facility = new Facility(facility);
      this.selectFavorite = this.facility.isFavorite();
    });
  }

  async setFavorite() {
    const loading = await this.loadingCtrl.create();
    await loading.present();

    if (this.selectFavorite) {
      this.userService.removeFavorite(this.facility.id).subscribe(
        async () => {
          await loading.dismiss();
          const alert = await this.alertCtrl.create({
            subHeader: this.facility.name + "をお気に入りからはずしました。",
            buttons: [
              {
                text: "OK",
              },
            ],
          });
          await alert.present();
          this.selectFavorite = !this.selectFavorite;
        },
        async () => {
          await loading.dismiss();
        }
      );
    } else {
      this.userService.setFavorite(this.facility.id).subscribe(
        async () => {
          await loading.dismiss();
          const alert = await this.alertCtrl.create({
            subHeader: this.facility.name + "をお気に入りにしました。",
            buttons: [
              {
                text: "OK",
              },
            ],
          });
          await alert.present();
          this.selectFavorite = !this.selectFavorite;
        },
        async () => {
          await loading.dismiss();
        }
      );
    }
  }

  checkUrlAndQueryParams(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.facility =
          this.router.getCurrentNavigation().extras.state.facility;
      }

      if (params.id) {
        this.facilityId = params.id;
        if (!this.facility) {
          this.facilityService
            .loadFacility(this.facilityId)
            .subscribe((facility) => {
              this.facility = new Facility(facility);
              this.selectFavorite = this.facility.isFavorite();
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
