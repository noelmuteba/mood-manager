import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoodComponent } from './mood/mood.component';

const routes: Routes = [
  { path: '', component: MoodComponent},

  { path: 'mood', loadChildren: () => import('./mood/mood.module').then(m => m.MoodModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
