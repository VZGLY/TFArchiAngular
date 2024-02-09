import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrl: './demo7.component.scss'
})
export class Demo7Component implements OnInit {

  myGroup! : FormGroup

  email : string | undefined

  myText! : string

  constructor(private _formBuilder : FormBuilder) {

  }

  ngOnInit(): void {
    this.myGroup = this._formBuilder.group({
      'Bonjour' : [null, [this.bonjourValidator()]],
      'Firstname' : [null, [Validators.required]],
      'Lastname' : [null, [Validators.required]],
      'Email' : [null, [Validators.required, Validators.email]],
      'Password' : [null, [Validators.required]],
      'Pseudos' : this._formBuilder.array([])
    })
  }

  getPseudos() : FormArray{
    return this.myGroup.get("Pseudos") as FormArray
  }

  addPseudo() {
    this.getPseudos().push(new FormControl(null, [Validators.required]))
    console.log(this.getPseudos().controls);

  }

  removePseudo(i : number){
    console.log(i);

    this.getPseudos().controls.splice(i, 1)
  }

  resetText(){
    this.myText = "Reseted"
  }

  groupSubmit(){

    console.log(this.myGroup.value);

    this.email = this.myGroup.value["Email"]
  }


  // Custom Validator

  bonjourValidator(): ValidatorFn | null {
    return (control: AbstractControl) => {
      if (control.value == 'Bonjour') {
        return null;
      }
      return {BonjourError : true, ErrorMessage : "Personne impolie"};
    };
  }

}
