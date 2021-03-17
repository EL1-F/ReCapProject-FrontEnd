import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:Color[]=[];
  currentColor:Color;
  dataLoaded=false;

  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }

  getColors(){
    this.colorService.getColors().subscribe(responce=>{
      this.colors=responce.data
      this.dataLoaded=true;
    })
  }

  setCurrentColor(color:Color){
    this.currentColor = color;
  }

  getCurrentColorClass(color:Color){
    if (color ==this.currentColor) {
        return "list-group-item active bg-red text-white border border-danger"
    }else{
      return "list-group-item bg-dark text-white border border-danger"
    }
  }

  getAllColor(){
    if (!this.currentColor) {
      return "list-group-item active bg-red text-white border border-danger"
    }else{
      return "list-group-item bg-dark text-white border border-danger"
    }
  }

}
