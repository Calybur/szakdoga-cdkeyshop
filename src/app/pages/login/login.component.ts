import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FakeLoadingService } from '../../shared/services/fake-loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl('');
  password = new FormControl('');

  constructor(private router: Router, private loadingService: FakeLoadingService) { }

  ngOnInit(): void {
  }

  login() {
    const emailValue = this.email.value;
    const passwordValue = this.password.value;

    if (emailValue && passwordValue) {
      this.loadingService.loadingWithPromise(emailValue, passwordValue).then((_: boolean) => {
        this.router.navigateByUrl('/main');
      }).catch(error => {
        console.error('Incorrect email or password!');
      }).finally(() => {
        console.log('This is executed finally.');
      });
    }
  }
}