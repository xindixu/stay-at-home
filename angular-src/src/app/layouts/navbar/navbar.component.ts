import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from "angular2-flash-messages";
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private flashMessagesService: FlashMessagesService,
    private router: Router
  ) { }


  ngOnInit() {
  }

  onLogoutClick(){
    this.authService.logout();
    this.flashMessagesService.show("Your are logged out", { cssClass: 'alert-danger', timeout: 3000 });
    this.router.navigate(['/login']);
    return false
  }
}
