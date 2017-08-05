
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Credentials} from "../shared/models/credentials";
import {AuthService} from "../shared/services/auth.service";
import {StorageService} from "../shared/services/storage.service";
import {Personal} from '../shared/models/personal.model';

declare var jQuery: any;
@Component({
  templateUrl: './login.component.html',
  styleUrls: [],

})
export class LoginComponent implements OnInit {

  credentials: Credentials = new Credentials();
  isLoading: boolean;

  ngOnInit() {
    // jQuery(".alert").alert('close');
    jQuery(".alert").hide();
  }

  constructor(private authService: AuthService,
              private stoarageService: StorageService,
              private router: Router) {


  }

  loginSubmit() {

    console.log(JSON.stringify(this.credentials));
    this.isLoading = true;
    jQuery(".alert").hide();
    this.authService.login(this.credentials)
      .subscribe(
        (data) => {
          this.isLoading = false;
          this.stoarageService.write("personal", data.user);
          this.stoarageService.write("token", data.token);
          this.router.navigate(["/"], {queryParams: {reload: true}});

        },
        (error) => {
          this.isLoading = false;
          jQuery(".alert").show();
        }
      )
  }

}


