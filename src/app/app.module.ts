import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { MonthSelectorComponent } from './components/month-selector/month-selector.component';
import { OrganizerComponent } from './components/organizer/organizer.component';
import { DayjsPipe } from './pipes/dayjs.pipe';
import { environment } from "../environments/environment";

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
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
