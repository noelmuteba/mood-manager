import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoodComponent } from './mood.component';
import { MoodControlComponent } from './mood-control/mood-control.component';

import { ReactiveFormsModule } from '@angular/forms'; 


const routes: Routes = [{ path: '', component: MoodControlComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoodRoutingModule { }  
