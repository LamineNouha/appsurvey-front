import { Component, OnInit } from '@angular/core';
import {Personnel} from '../../shared/models/personnel.model';
@Component({
  selector: 'app-list-personnel',
  templateUrl: './list-personnel.component.html',
  styleUrls: ['./list-personnel.component.css']
})
export class ListPersonnelComponent implements OnInit {
personnels: Personnel[]=[new Personnel("lamine.nooha@gmail.com","","assets/images/placeholder.jpg"),new Personnel("lamine.nooha@gmail.com","","assets/images/placeholder.jpg")];
  constructor() { }

  ngOnInit() {
  }

}
