import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items:String[]=[];
  constructor(private dataService:DataService) { }
  addItem='';
  ngOnInit(): void {
    this.dataService.getItems().subscribe(res=>{
      this.items=res;
    });
  }

  deleted(deleteItem){
    this.items=this.items.filter(item=>item!==deleteItem);
  }
  OnInput(event:any){
    this.addItem=event.target.value;
    this.items.push(this.addItem);
    event.target.value='';
  }
}
