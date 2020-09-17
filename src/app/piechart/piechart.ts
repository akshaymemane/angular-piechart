import { Component, ElementRef, ViewChild } from '@angular/core';
import * as jspdf from 'jspdf';
 
@Component({
  selector: 'piechart',
  templateUrl: './piechart.html'
})
export class PieChartComponent {
    @ViewChild('content') content: ElementRef;
  // Pie
  public pieChartLabels:string[] = ['Chrome', 'Safari', 'Firefox','Internet Explorer','Other'];
  public pieChartData:number[] = [40, 20, 20 , 10,10];
  public pieChartType:string = 'pie';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }


  makePdf() { 
    let doc = new jsPDF();
    doc.addHTML(this.content.nativeElement, function() {
       doc.save("obrz.pdf");
    });
  }
}