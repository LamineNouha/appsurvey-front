import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
first_active:string="active";
@Input() first:string;
@Input()  second:string;
@Input()  second_url:string;
@Input()  second_bool:any;
  constructor() { }

  ngOnInit() {

  }

}
