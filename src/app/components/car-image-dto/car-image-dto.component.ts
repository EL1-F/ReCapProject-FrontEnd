import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-image-dto',
  templateUrl: './car-image-dto.component.html',
  styleUrls: ['./car-image-dto.component.css']
})
export class CarImageDtoComponent implements OnInit {

  cars:Car[]=[];
  images:CarImage[]=[];
  path="https://localhost:44399";

  constructor(private carImageService:CarImageService,
    private carService:CarService,
    private activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params=>{
      if (params["carId"]) {
        this.getCarImagesByCar(params["carId"]);
        this.getCarById(params["carId"])
      }
    })
  }

  getCarImagesByCar(id:number){

    this.carImageService.getCarImageByCar(id).subscribe(responce=>{
      this.images=responce.data;
    })

  }

  getCarById(id:number){

    this.carService.getCarById(id).subscribe(response => {
      this.cars = response.data;
    })
  }

}
