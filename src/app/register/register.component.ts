import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  public form = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private router: Router) { }

  ngOnInit() { }

  public onLogin() {
    this.router.navigateByUrl('/login');
  }

  public onRegistrationConfirmation(form: FormGroup): void { 
    form.valid ? this.router.navigateByUrl('/registration-confirmation') : null;
  }

}
