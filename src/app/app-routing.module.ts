import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarImageDtoComponent } from './components/car-image-dto/car-image-dto.component';
import { CarComponent } from './components/car/car.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component:CarComponent}, /*hiç bir şey seçilmezse default olarak gösterilecek yer*/
  /* boş vermek bütün adresler için geçerli
  pathMatch anasayfa için veriliyor*/ 
  {path:"cars",component:CarComponent},
  /*anasayfa sonuna car denirse aç */
  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"cars/color/:colorId", component:CarComponent},
  {path:"car-image-dto/:carId", component:CarImageDtoComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
