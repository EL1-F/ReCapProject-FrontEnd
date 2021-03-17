import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[]=[];
  currentBrand:Brand;
  dataLoaded=false;

  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(responce=>{
      this.brands=responce.data
      this.dataLoaded=true;
    })
  }

  setCurrentBrand(brand:Brand){
    this.currentBrand = brand;
  }

  getCurrentBrandClass(brand:Brand){
    if (brand ==this.currentBrand) {
        return "list-group-item active bg-red text-white border border-danger"
    }else{
      return "list-group-item bg-dark text-white border border-danger"
    }
  }

  getAllBrands(){
    if (!this.currentBrand) {
      return "list-group-item active bg-red text-white border border-danger"
    }else{
      return "list-group-item bg-dark text-white border border-danger"
    }
  }

}
