import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { validatePassword } from '../my-validator';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor() { }
   registerForm = new FormGroup({
     email: new FormControl('', [Validators.email, Validators.required]),
     username: new FormControl('', [Validators.minLength(6), Validators.maxLength(64), Validators.required]),
     password: new FormControl('', [Validators.required, validatePassword]),
     passwordReenter: new FormControl('', [Validators.required]),
     phoneNum: new FormControl(''),
  })

  ngOnInit(): void {
  }

}
