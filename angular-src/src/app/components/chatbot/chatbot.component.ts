import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../services/api.service";

@Component({
  selector: "app-chatbot",
  templateUrl: "./chatbot.component.html",
  styleUrls: ["./chatbot.component.scss"]
})
export class ChatbotComponent implements OnInit {
  data: any;
  value = "";

  constructor(private apiService: ApiService) {

  }

  //TODO: connect to backend api & test
  ngOnInit() {

  }

  getAnswerByQuestion(question: string){
    this.apiService.getAnswerByQuestion(question).subscribe(
      data => {
        this.data = data;
        console.log("Answer is here", data);
      },
      error => console.log("Error", error)
    );
  }

  ask(){
    console.log(this.value);
    this.getAnswerByQuestion(this.value);
  }
}
