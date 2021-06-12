import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { MonthSelectorComponent } from './components/month-selector/month-selector.component';
import { OrganizerComponent } from './components/organizer/organizer.component';
import { DayjsPipe } from './pipes/dayjs.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    MonthSelectorComponent,
    OrganizerComponent,
    DayjsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
