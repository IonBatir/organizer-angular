import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
