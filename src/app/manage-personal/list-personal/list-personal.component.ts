import { Component, OnInit } from '@angular/core';
import {Personal} from '../../shared/models/personal.model';
@Component({
  selector: 'app-list-Personal',
  templateUrl: './list-Personal.component.html',
  styleUrls: []
})
export class ListPersonalComponent implements OnInit {
first: string ="Personnel";
second: string ="Liste de personnels";
second_url: string ="/personals";
second_bool:any =true;
personals: Personal[]=[new Personal("lamine.nooha@gmail.com","","assets/images/placeholder.jpg"),new Personal("lamine.nooha@gmail.com","","assets/images/placeholder.jpg")];
  constructor() { }

  ngOnInit() {
  }

}
