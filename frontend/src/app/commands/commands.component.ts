//our root app component
import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
//import {BrowserAnimationsModule} from '@angular/platform-browser-animations';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {single, multi} from './data';
import { MostUsedCommandsComponent } from '../most-used-commands/most-used-commands.component'
import { ApiService } from '../api.service'

@Component({
  selector: 'commands-bar-chart',
  templateUrl: 'commands.component.html',
  providers: [ApiService]
})

export class CommandsComponent {
  single: any[];
  multi: any[];

  view: any[] = [1000, 960];

  // options
  showXAxis = true;
  showYAxis = false;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Frequency';
  showYAxisLabel = false;
  yAxisLabel = 'Commands';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

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