import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommercialComponent } from './commercial/commercial.component';
import { ContactComponent } from './contact/contact.component';
import { EstimatesComponent } from './estimates/estimates.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ResidentialComponent } from './residential/residential.component';



const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'commercial', component: CommercialComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'estimates', component: EstimatesComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'home', component: HomeComponent},
  {path: 'residential', component: ResidentialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
