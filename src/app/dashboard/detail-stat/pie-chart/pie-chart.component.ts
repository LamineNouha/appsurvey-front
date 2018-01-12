import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange , IterableDiffers, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {Survey} from '../../../shared/models/survey.model';
import {Question} from '../../../shared/models/survey.model';
import {QuestionService} from "../../../shared/services/question.service";
import {StorageService} from "../../../shared/services/storage.service";
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import { log } from 'util';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: []
  
})
export class PieChartComponent implements OnInit, OnChanges{
    questions: Question[];
    survey: Survey;
    surveyId: string;
     // Doughnut
      @Input() doughnutChartLabels:string[];// = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
      @Input() doughnutChartData:Number[];// = [350, 450, 100];
      doughnutChartType:string = 'doughnut';
      differ: any;
      @ViewChild(BaseChartDirective) baseChart: BaseChartDirective;
      
    

  
   // events
   public chartClicked(e:any):void {
     console.log(e);
   }
  
   public chartHovered(e:any):void {
     console.log(e);
   }

  


  constructor(differs: IterableDiffers,private router: Router,private questionService: QuestionService,private storageService: StorageService ) { 
    this.differ = differs.find([]).create(null);

  }

  ngOnInit() {

//console.log("from pie"+JSON.stringify(this.doughnutChartData));
  

    console.log("from pie"+JSON.stringify(this.doughnutChartData));
  }

  ngOnChanges(changes: SimpleChanges){
    //const doughnutChartLabels: SimpleChange = changes.doughnutChartLabels;
    this.doughnutChartLabels = new Array();
    this.doughnutChartLabels= changes.doughnutChartLabels.currentValue;
    this.doughnutChartData = new Array();
    this.doughnutChartData= changes.doughnutChartData.currentValue;
    console.log("changesssslab "+JSON.stringify(this.doughnutChartLabels));
    console.log("changessssdat "+JSON.stringify(this.doughnutChartData));

    this.baseChart.labels= this.doughnutChartLabels;
    this.baseChart.data= this.doughnutChartData;

    this.baseChart.ngOnChanges({} as SimpleChanges);
   // this.baseChart.chart.config.data.labels = this.doughnutChartLabels;
   // this.baseChart.chart.config.data.data = this.doughnutChartData;
    
  }

  /*ngDoCheck() {
    var changes = this.differ.diff(this.doughnutChartLabels);

    if(changes) {
        console.log('changes detected'+ changes);
        changes.forEachAddedItem(r => console.log('added ' + r.item));
        this.doughnutChartLabels = [];
        changes.forEachAddedItem(r => this.doughnutChartLabels.push(r.item));
        
    } else {
        console.log('nothing changed');
    }
}*/

  
}
