import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../services/api.service";

import {
  DomSanitizer,
  SafeResourceUrl
} from "@angular/platform-browser";

@Component({
  selector: "app-video-search",
  templateUrl: "./video-search.component.html",
  styleUrls: ["./video-search.component.scss"]
})
export class VideoSearchComponent implements OnInit {
  data: any[];
  videos: any[];
  videoIds: string[];

  safeVideoUrls: SafeResourceUrl[];

  constructor(
    private apiService: ApiService,
    private sanitizer: DomSanitizer
  ) {
    // disable this to safe me money from paying api co :(
    // dist: this.videos = [];
    this.safeVideoUrls = [];
  }

  // async in ts / angular
  // https://medium.com/@balramchavan/using-async-await-feature-in-angular-587dd56fdc77

   ngOnInit() {
    //this.getVideoByIngredients();

  }

  getVideoByIngredients() {
    this.apiService.getVideoByIngredients("chicken").subscribe(
      data => {
        this.data = data;
        this.videos = data.videos;
        console.log("Video is here", data);
        this.changeAllVideoUrls();
      },
      error => console.log("Error", error)
    );
  }

  updateVideoUrl(id: string) {
      // Appending an ID to a YouTube URL is safe.
      // Always make sure to construct SafeValue objects as
      // close as possible to the input data so
      // that it's easier to check if the value is safe.
      let dangerousVideoUrl = 'https://www.youtube.com/embed/' + id;
      let safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(dangerousVideoUrl);
      return safeVideoUrl;
  }

  changeAllVideoUrls(){
    console.log("start changing all videos to safe ones");
    for(let i of this.videos){
      console.log(i);
      let url = this.updateVideoUrl(i.youTubeId);
      this.safeVideoUrls.push(url);
      console.log(this.safeVideoUrls);
    }
  }

}
