import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  myForm: FormGroup = new FormGroup({
    profileInformation: new FormGroup({
      name: new FormControl(null, [Validators.required, this.myCustomValidation]),
      email: new FormControl(null, [Validators.required, this.myCustomValidation])
    }),
    contactInformation: new FormGroup({
      mobile: new FormControl(null, Validators.pattern(new RegExp('\d*')))
    })
  });
  constructor() { }

  ngOnInit() {
    this.myForm.patchValue({
      profileInformation: {
        name: 'Jinto',
        email: 'jintoppy@gmail.com'
      }
    });
  }

  myCustomValidation(control: FormControl) {
    if(control.value && control.value.startsWith('a')) {
      return {
        myCustomValidation: true                
      };
    }
    return null;
  }

  onSubmit() {
    if(this.myForm.valid) {
      console.log(this.myForm.value);
    }
  }

}
