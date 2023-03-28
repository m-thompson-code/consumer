import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { MyEntryPointLibModule } from 'my-entry-point-lib';
import { UiSdkModule } from 'ui-sdk-moo';
import { ButtonModule } from 'ui-sdk-moo/button';
import { CardComponent } from 'ui-sdk-moo/card';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // MyEntryPointLibModule,
    UiSdkModule,
    ButtonModule,
    CardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
