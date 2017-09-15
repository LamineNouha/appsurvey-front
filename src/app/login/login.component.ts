
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Credentials} from "../shared/models/credentials";
import {User} from "../shared/models/user.model";
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
  user: User = new User();
    isLoading: boolean;
alert1: boolean =false;
alert2: boolean =false;

  ngOnInit() {
    // jQuery(".alert").alert('close');
    jQuery(".alert").hide();
  }

  constructor(private authService: AuthService,
              private stoarageService: StorageService,
              private router: Router,) {


  }

  loginSubmit() {
    console.log(JSON.stringify(this.credentials));
    this.isLoading = true;
    this.authService.login(this.credentials)
      .subscribe(
        (data) => {
          this.isLoading = false;
          this.stoarageService.write("user", data.user);
          this.stoarageService.write("token", data.token);
          this.router.navigate(["/"], {queryParams: {reload: true}});

        },
        (error) => {
          this.isLoading = false;
          this.alert1=true;
        }
      )
  }




  //registration

  registerSubmit() {
    
        console.log(JSON.stringify(this.user));
        this.isLoading = true;
        this.authService.register(this.user)
          .subscribe(
            (data) => {
              this.isLoading = false;
              this.router.navigate(["/"], {queryParams: {reload: true}});
    
            },
            (error) => {
              this.isLoading = false;
              this.alert2=true;
            }
          )
      }
  

}


