import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { MassComponent } from './components/mass/mass.component';
import { TempComponent } from './components/temp/temp.component';
import { TimeComponent } from './components/time/time.component';
import { SpeedComponent } from './components/speed/speed.component';
import { VolumeComponent } from './components/volume/volume.component';
import { DsizeComponent } from './components/dsize/dsize.component';
import { LengthComponent } from './components/length/length.component';
import { GasComponent } from './components/gas/gas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MassComponent,
    TempComponent,
    TimeComponent,
    SpeedComponent,
    VolumeComponent,
    DsizeComponent,
    LengthComponent,
    GasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
