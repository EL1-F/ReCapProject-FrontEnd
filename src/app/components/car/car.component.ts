import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  
  cars:Car[]=[];
  currentCar:Car;
  dataLoaded= false;

  constructor(private carService: CarService,
     private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params["colorId"]) {
        this.getCarsByColor(params["colorId"]);
      }else if (params["brandId"]) {
        this.getCarsByBrand(params["brandId"]);
      }else{
        this.getCars();
      }
    })
  }

  getCars(){
    this.carService.getCars().subscribe(responce=>{
      this.cars=responce.data
      this.dataLoaded=true;
    })
  }

  getCarById(id:number){
    this.carService.getCarById(id).subscribe(response => {
      this.cars = response.data;
    })
  }


  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(responce=>{
      this.cars=responce.data
      this.dataLoaded=true;
    })
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(responce=>{
      this.cars=responce.data
      this.dataLoaded=true;
    })
  }

  setCurrentCar(car:Car){
    this.currentCar=car;
  }

  getCurrentCarClass(car:Car){
    if (car ==this.currentCar) {
        return "list-group-item active bg-red text-white border border-white"
    }else{
      return "list-group-item bg-danger text-white border border-white"
    }
  }

}
