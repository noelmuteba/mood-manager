import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoodRoutingModule } from './mood-routing.module';
import { MoodComponent } from './mood.component';
import { MoodControlComponent } from './mood-control/mood-control.component';

import { MoodParserPipe } from '../mood-parser.pipe';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MoodControlComponent,
    MoodParserPipe
  ],
  imports: [
    ReactiveFormsModule,

    CommonModule,
    MoodRoutingModule, 

    
  ]
})
export class MoodModule { }
