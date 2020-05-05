import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-confirmation',
  templateUrl: './registration-confirmation.component.html',
  styleUrls: ['./registration-confirmation.component.scss'],
})
export class RegistrationConfirmationComponent implements OnInit {

  public form = new FormGroup({
    retypeEmail: new FormControl('', Validators.required),
    retypePassword: new FormControl('', Validators.required)
  });

  constructor(private router: Router) { }

  ngOnInit() {}

  public onLogin() {
    this.router.navigateByUrl('/login');
  }

  public onCalendar(form: FormGroup) {
    form.valid ? this.router.navigateByUrl('/calendar') : null;
  }

}
