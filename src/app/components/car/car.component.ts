import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarResponceModel } from 'src/app/models/carResponceModel';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  
  cars:Car[]=[];
  dataLoaded= false;

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
    this.carService.getCars().subscribe(responce=>{
      this.cars=responce.data
      this.dataLoaded=true;
    })
  }

}
