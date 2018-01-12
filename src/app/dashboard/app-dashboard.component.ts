import { Component, OnInit} from '@angular/core';
import {User} from "../shared/models/user.model";
import {StorageService} from "../shared/services/storage.service";
import {ActivatedRoute, Router} from "@angular/router";
import { SurveyStatsService } from 'app/shared/services/survey-stats.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-app-dashboard',
  templateUrl: './app-dashboard.component.html',
  styleUrls: []    
})
export class AppDashboardComponent {
  user: User;
  tabDate: any[];
  constructor(private router: Router,private surveyStatsService: SurveyStatsService,private storageService: StorageService, private http: Http) { 
   
   
    this.user= <User>storageService.read('user');
    
    this.load();
  }

  ngOnInit() {

   
   
    
  }


  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['Ariana', 'Béja', 'Ben Arous', 'Bizerte', 'Gabès', 'Gafsa', 'Jendouba','Kairouan','Kasserine', 'Kébili', 'Le Kef', 'Mahdia', 'La Manouba', 'Médenine','Monastir','Nabeul','Sfax','Sidi Bouzid','Siliana','Sousse','Tataouine','Tozeur','Tunis','Zaghouan'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
   barChartData:any[] = [
    {data: [], label: 'Citizen percentage'},
   
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  load() {
    const baseContext = this;
     this.surveyStatsService.dashboard(this.user._id).subscribe(data => {
      this.barChartData[0].data.push(data.Ariana);
      this.barChartData[0].data.push(data.Beja);
      this.barChartData[0].data.push(data.Ben_Arous);
      this.barChartData[0].data.push(data.Bizerte);
      this.barChartData[0].data.push(data.Gabes);
      this.barChartData[0].data.push(data.Gafsa);
      this.barChartData[0].data.push(data.Jendouba);
      this.barChartData[0].data.push(data.Kairouan);
      this.barChartData[0].data.push(data.Kasserine);
      this.barChartData[0].data.push(data.Kebili);

      this.barChartData[0].data.push(data.Kef);
      this.barChartData[0].data.push(data.Mahdia);
      this.barChartData[0].data.push(data.Manouba);
      this.barChartData[0].data.push(data.Medenine);
      this.barChartData[0].data.push(data.Monastir);
      this.barChartData[0].data.push(data.Nabeul);
      this.barChartData[0].data.push(data.Sfax);
      this.barChartData[0].data.push(data.Bouzid);
      this.barChartData[0].data.push(data.Siliana);
      this.barChartData[0].data.push(data.Sousse);

      this.barChartData[0].data.push(data.Tataouine);
      this.barChartData[0].data.push(data.Tozeur);
      this.barChartData[0].data.push(data.Tunis);
      this.barChartData[0].data.push(data.Zaghouan);


     


 
      console.log("reggg "+JSON.stringify(this.barChartData[0].data));
      setTimeout(function () {
        
      }, 100);


      /*for (var i = 0; i < data.length; i++) {
      
       for (var j = 0; j < data[i].questions.length; j++) {
        this.surveys[i].questions[j]=data[i].questions[j];
       
       }

      }*/
    }, error => {

    });

      
  }
}