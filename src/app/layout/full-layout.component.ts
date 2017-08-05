import { Component, OnInit } from '@angular/core';
import {Personal} from "../shared/models/personal.model";
import {StorageService} from "../shared/services/storage.service";
import {ActivatedRoute, NavigationStart, Router, NavigationEnd} from "@angular/router";
import {PersonalService} from "../shared/services/Personal.service";
@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: []    
})
export class FullLayoutComponent implements OnInit {
 personal: Personal;
  components: NavigationMain[] = [];

  constructor(private storageService: StorageService, private userService: PersonalService,
              public router: Router,
              private route: ActivatedRoute) {
    this.personal = <Personal>storageService.read('personal');
  }

  ngOnInit() {	
 this.components = [
       {
        name: "Dashboard",
        url: "/",
        icon: "icon-home4",
      },
      {
        name: "Gestion de Questionnaires",
        icon: "icon-copy",
        childrens: [
          {
            name: "Liste",
            url: "/survey/list"
          },
          {
            name: "Ajout",
            url: "/survey/add"
          },
        ]
      },
     {
        name: "Gestion de Personnels",
        icon: "icon-users",
        childrens: [
          {
            name: "Liste",
            url: "/personal/list"
          },
          {
            name: "Ajout",
            url: "/personal/add"
          },
        ]
      },
    ];


    this.route.queryParams.subscribe(
      params => {
        console.log(params.reload);
        if (params.reload) {
          window.location.href = "/";
        }

      }
    );

    this.changeActiveUrl(this.router.url);

    if (!this.storageService.read("token")) {
      this.router.navigate(["/login"]);
    }
  }



  

  changeActiveUrl(url: string) {
    console.log(url);
    this.components.forEach(
      component => {
        component.active = "";
        if (url.indexOf(component.url) !== -1) {
          component.active = "active";
        }
        if (component.childrens) {
          component.childrens.forEach(
            child => {
              child.active = "";
              if (url.indexOf(child.url) !== -1) {
                child.active = "active";
              }
            }
          )
        }
      }
    )
  }

  logout() {
    this.storageService.removeAll();
    this.router.navigateByUrl("/login");
  }

  goUrl(url: string) {
    if (url) {
      this.router.navigate([url]);
    }
  }

}


export class NavigationMain {
  public name: string;
  public icon: string;
  public active?: string;
  public childrens?: ChildrenNavigation[] = [];
  public url?: string;
}
export class ChildrenNavigation {
  public name: string;
  public active?: string;
  public url: string;
}