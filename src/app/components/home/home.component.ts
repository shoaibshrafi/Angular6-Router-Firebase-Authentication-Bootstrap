import { Component, OnInit } from '@angular/core';
import { AlertService } from '../_directives/services/alert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: string;
  constructor(private alertService: AlertService) {
    this.user = localStorage.getItem("currentUser");
    this.alertService.success("Welcome " + this.user + "!")
  }

  ngOnInit() {
    
  }

}
