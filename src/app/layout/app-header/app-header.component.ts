import { Component, OnInit, Input } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: []
})
export class AppHeaderComponent implements OnInit {
first_active:string="active";
@Input() first:string;
@Input()  second:string;
@Input()  first_url:string;
@Input()  second_bool:any;
  constructor(private router: Router,) { }

  ngOnInit() {

  }
  goUrl(url: string) {
   
      this.router.navigate([url]);
    
  }
}
