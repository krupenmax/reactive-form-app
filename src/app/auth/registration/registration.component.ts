import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { validatePassword, validatePhoneNum, validatePlus } from '../../my-validator';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DataService } from '../data.service';
import { RegisterService } from '../register.service';
import { registerInfo } from '../register-info';
import { LoginGuard } from '../login.guard';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationComponent implements OnInit {
  public isValid = true;
  public isPhoneNumEnabled = true;
  constructor(private cdr: ChangeDetectorRef, private dataService: DataService, private registerService: RegisterService, private guard: LoginGuard, private router: Router) {
  }

  public registerForm = new FormGroup({
     email: new FormControl('', [Validators.email, Validators.required]),
     username: new FormControl('', [Validators.minLength(6), Validators.maxLength(64), Validators.required]),
     password: new FormControl('', [Validators.required, validatePassword]),
     passwordReenter: new FormControl('', [Validators.required]),
     phoneNum: new FormControl('', [validatePhoneNum, validatePlus, Validators.minLength(10), Validators.maxLength(16)]),
  })

  public isValidPassword(): boolean {
    this.isValid = false;
    if (this.registerForm.controls['password'].value != this.registerForm.controls['passwordReenter'].value) {
      return true;
    } 
    else {
      return false;
    }
  }

  public register(): void {
    let body: registerInfo = {
      email: this.registerForm.controls['email'].value,
      username: this.registerForm.controls['username'].value,
      password: this.registerForm.controls['password'].value,
      phoneNum: this.registerForm.controls['phoneNum'].value,
    }
    this.dataService.registerObservable = this.registerService.register(body);
    this.dataService.registerObservable.subscribe({
      next: (v) => {
        this.guard.isLogged = true;
        this.router.navigateByUrl('main');
      },  
      error: () => {},
      complete: () => {}
    });
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    this.registerForm.valueChanges.subscribe();
  }
}
