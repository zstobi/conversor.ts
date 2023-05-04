import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { MassComponent } from './components/mass/mass.component';
import { TempComponent } from './components/temp/temp.component';
import { TimeComponent } from './components/time/time.component';
import { SpeedComponent } from './components/speed/speed.component';
import { VolumeComponent } from './components/volume/volume.component';
import { DsizeComponent } from './components/dsize/dsize.component';
import { GasComponent } from './components/gas/gas.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'mass', component: MassComponent},
  {path: 'temp', component: TempComponent},
  {path: 'time', component: TimeComponent},
  {path: 'speed', component: SpeedComponent},
  {path: 'vol', component: VolumeComponent},
  {path: 'dsize', component: DsizeComponent},
  {path: 'gas', component: GasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
