import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, Validator } from '@angular/forms';
@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.scss']
})
export class AutoComponent implements OnInit {
  userMessage: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userMessage = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(6)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

}
