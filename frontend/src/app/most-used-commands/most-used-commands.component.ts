//our root app component
import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {single} from './data2';
import {ApiService} from '../api.service'

@Component({
  selector: 'most-used-commands-pie-chart',
  templateUrl: 'most-used-commands.component.html',
  providers: [ApiService]
})

export class MostUsedCommandsComponent {
  single: any[];
  multi: any[];

  view: any[] = [650, 400];

  // options
  showLegend = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // pie
  showLabels = true;
  explodeSlices = true;
  doughnut = false;

  constructor(
    private apiService: ApiService
  ) {
    Object.assign(this, {single})   
  }

  ngOnInit(){
    let that = this
    this.apiService.getTotalCommands().then(
      res => {
        console.log(res)
        that.single = res;
      }
    );  
  }
  
  onSelect(event) {
    console.log(event);
  }
  
}