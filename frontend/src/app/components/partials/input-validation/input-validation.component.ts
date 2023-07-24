import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

const VALIDATORS_MESSAGES:any = {
  required:'Should not be empty',
  email:'Email is not valid'
}

@Component({
  selector: 'input-validation',
  templateUrl: './input-validation.component.html',
  styleUrls: ['./input-validation.component.css']
})
export class InputValidationComponent implements OnChanges, OnInit {
  @Input()
  control!:AbstractControl;
  @Input()
  showErrorsWhen:boolean = true;
  errorMessages:string[] = [];

  checkValidation():void{
    const errors = this.control.errors;
    if(!errors){
      this.errorMessages = []
      return;
    }

    const errorsKeys = Object.keys(errors);
    this.errorMessages = errorsKeys.map(key => VALIDATORS_MESSAGES[key])
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.checkValidation();
  }

  ngOnInit(): void {
    this.control.statusChanges.subscribe(() => {
      this.checkValidation();
    });
    this.control.valueChanges.subscribe(() => {
      this.checkValidation();
    })
  }

}
