import {Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mood-control',
  templateUrl: './mood-control.component.html',
  styleUrls: ['./mood-control.component.css']
})
export class MoodControlComponent implements OnInit {

  
  moodForm: FormGroup;

  happyEmoji : string;
  sadEmoji : string;
  indifferentEmoji : string;

  




  constructor(
    private formBuilder: FormBuilder,
    ){
    this.moodForm = this.formBuilder.group({  
      mood:[null,Validators.required]  
    });
    

  }

  ngOnInit(): void {

   

  
  }

  updateFormValue() {
    let selected = this.moodForm.get('mood').value

    this.moodForm.get('mood').setValue(parseInt(selected))

    console.log(typeof(this.moodForm))



  }



  

}
