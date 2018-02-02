import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatButtonModule, MatTabsModule } from '@angular/material'
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [ApiService]
})

export class HomeComponent implements OnInit {
  botName = "BOT NAME HERE"
  totalCommands : number
  usersNumbers = "10"
  selectedTab = 0

  goToStatTab(){
    console.log("Click")
    if(this.selectedTab){
      this.selectedTab = 0
      document.getElementById('footer').style.visibility = "visibible";
    }else{
      this.selectedTab = 1
      document.getElementById('footer').style.visibility = "hidden";
    }
  }

  constructor(
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
    private apiService: ApiService
  ) {
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
  }

  ngOnInit() {
    const that = this
    this.apiService.getCommandsCount().then(
      res => {
        that.totalCommands = res[0].commands
      }
    );
    this.apiService.getTotalUsers().then(
      res => {
        that.usersNumbers = res[0].users
      }
    );

  }

}
