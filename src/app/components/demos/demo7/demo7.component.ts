import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrl: './demo7.component.scss'
})
export class Demo7Component implements OnInit {

  myGroup! : FormGroup

  constructor(private _formBuilder : FormBuilder) {

  }

  ngOnInit(): void {
    this.myGroup = this._formBuilder.group({
      'Email' : [null, [Validators.required]],
      'Password' : [null, [Validators.required]]
    })
  }

  myText! : string

  resetText(){
    this.myText = "Reseted"
  }

  controlSubmit(){
    console.log(this.myGroup);

  }

}
