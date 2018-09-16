import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MyProgramButtonComponent } from './my-program-button/my-program-button.component';

import { HomeComponent } from './home/home.component';
import { DietProgram1Component } from './diet-program1/diet-program1.component';
import { DietProgram2Component } from './diet-program2/diet-program2.component';
import { DietProgram3Component } from './diet-program3/diet-program3.component';
import { DietProgram4Component } from './diet-program4/diet-program4.component';

@NgModule({
  declarations: [
    AppComponent,
    MyProgramButtonComponent,
    HomeComponent,
    DietProgram1Component,
    DietProgram2Component,
    DietProgram3Component,
    DietProgram4Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'diet_program1',
        component: DietProgram1Component
      },
      {
        path: 'diet_program2',
        component: DietProgram2Component
      },
      {
        path: 'diet_program3',
        component: DietProgram3Component
      },
      {
        path: 'diet_program4',
        component: DietProgram4Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
