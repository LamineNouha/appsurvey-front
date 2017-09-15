import { Component, OnInit} from '@angular/core';
import {User} from "../shared/models/user.model";
import {StorageService} from "../shared/services/storage.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PersonalService} from "../shared/services/personal.service";
@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: []    
})
export class FullLayoutComponent implements OnInit {
user: User;
components: NavigationMain[] = [];

first: string;
second: string;
first_url: string;
second_bool:any =true;
 

  constructor(private storageService: StorageService, private userService: PersonalService,
              private router: Router,
              private route: ActivatedRoute) {
    this.user = <User>storageService.read('user');
    this.router.events.subscribe((val) => {
      var url_components :string []=this.router.url.split('/');
      console.log("url components: "+url_components.length);
      if(url_components.length==2){
        
              this.first="Dashbord";
              this.second_bool=false;
              this.first_url="/";
              this.second="";
            }
            else{
      if(url_components[1]=="survey"){
  
        this.first="Qestionnaires";
        this.first_url='/survey/list';
        this.second_bool=false;
        if(url_components.length==4){
  this.second_bool=true;
  if(url_components[3]=="edit"){
    this.second="Edit";
      }
      else{
        this.second="Detail";
      }
      
    }
  else{
    this.second_bool=true;
    if(url_components[2]=="add"){
      this.second="Ajout";
        }
        if(url_components[2]=="list"){
          this.second_bool=false;
          this.second="Liste";
            }
  
  }}
    if(url_components[1]=="personal"){
      
            this.first="Personnels";
            this.first_url="/personal/list";
            this.second_bool=false;
            if(url_components.length==3){
            this.second_bool=true;
      if(url_components[2]=="add"){
        this.second="Ajout";
          }
          if(url_components[2]=="list"){
            this.second_bool=false;
            this.second="Liste";
              }
         
          
        }
  }
  } 
    }


    
  )
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
        console.log("name: "+component.name + " / active: "+component.active);
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
    
      this.router.navigate([url]);
    
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