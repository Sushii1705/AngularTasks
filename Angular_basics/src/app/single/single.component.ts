import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dname: string = "Sushil"
  msg:string ="";
  onBuy(){
    this.msg="Product Purchased Successfully";
  }
  
}
