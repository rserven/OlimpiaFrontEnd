import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { StadiumService } from '../stadium.service';
import { multi } from 'src/app/olimpia/data';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  multi: any[];
  view: any[] = [900, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Sillas';
  xAxisLabel: string = 'Puertas';
  showYAxisLabel: boolean = true;
  legendTitle: string = 'Capacidad Vs Ocupacion';

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };


  constructor(private stadium: StadiumService) {
    this.stadium.GetGrafico().subscribe(response=>{
      this.multi = response;
      });
      Object.assign(this, { multi })
  }
 
  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  ngOnInit() {  

  }

}
