import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { CommandsComponent } from './commands/commands.component'
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { MostUsedCommandsComponent } from './most-used-commands/most-used-commands.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MatButtonModule, MatTabsModule, MatFormFieldModule, MatTableModule, MatInputModule } from '@angular/material';
import { UsersActivityComponent } from './users-activity/users-activity.component'
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http'

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },{
    path: 'commands',
    component: CommandsComponent
  },{
    path: 'famous',
    component: MostUsedCommandsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CommandsComponent,
    MostUsedCommandsComponent,
    HomeComponent,
    UsersActivityComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    HttpClientModule,
    HttpModule,
    BrowserModule,
    MatIconModule,
    MatTabsModule,
    NgxChartsModule,
    MatFormFieldModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
