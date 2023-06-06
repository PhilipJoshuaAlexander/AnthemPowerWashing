import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResidentialComponent } from './residential/residential.component';
import { CommercialComponent } from './commercial/commercial.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EstimatesComponent } from './estimates/estimates.component';
import { ContactComponent } from './contact/contact.component';
import { IndustrialComponent } from './industrial/industrial.component';
import { DrivewayCleaningComponent } from './driveway-cleaning/driveway-cleaning.component';
import { HouseWashingComponent } from './house-washing/house-washing.component';
import { PatioCleaningComponent } from './patio-cleaning/patio-cleaning.component';
import { SidewalkCleaningComponent } from './sidewalk-cleaning/sidewalk-cleaning.component';
import { GarageCleaningComponent } from './garage-cleaning/garage-cleaning.component';
import { CurbCleaningComponent } from './curb-cleaning/curb-cleaning.component';
import { ConcreteCleaningComponent } from './concrete-cleaning/concrete-cleaning.component';
import { PlaygroundEquipmentComponent } from './playground-equipment/playground-equipment.component';
import { PoolDeckCleaningComponent } from './pool-deck-cleaning/pool-deck-cleaning.component';
import { StuccoCleaningComponent } from './stucco-cleaning/stucco-cleaning.component';
import { ExteriorWindowWashingComponent } from './exterior-window-washing/exterior-window-washing.component';
import { CustomResidentialComponent } from './custom-residential/custom-residential.component';
import { GasStationCleaningComponent } from './gas-station-cleaning/gas-station-cleaning.component';
import { DriveThruCleaningComponent } from './drive-thru-cleaning/drive-thru-cleaning.component';
import { RestaurantPatioCleaningComponent } from './restaurant-patio-cleaning/restaurant-patio-cleaning.component';
import { DumpsterPadCleaningComponent } from './dumpster-pad-cleaning/dumpster-pad-cleaning.component';
import { RestaurantKitchensComponent } from './restaurant-kitchens/restaurant-kitchens.component';
import { RestaurantFloorsComponent } from './restaurant-floors/restaurant-floors.component';
import { ParkingGarageCleaningComponent } from './parking-garage-cleaning/parking-garage-cleaning.component';
import { GraffitiRemovalComponent } from './graffiti-removal/graffiti-removal.component';
import { BuildingWashingComponent } from './building-washing/building-washing.component';
import { GumRemovalComponent } from './gum-removal/gum-removal.component';
import { CustomCommercialComponent } from './custom-commercial/custom-commercial.component';
import { HeavyEquipmentComponent } from './heavy-equipment/heavy-equipment.component';
import { FleetWashingComponent } from './fleet-washing/fleet-washing.component';
import { ParkingLotsComponent } from './parking-lots/parking-lots.component';
import { MachineryComponent } from './machinery/machinery.component';
import { WarehoseCleaningComponent } from './warehose-cleaning/warehose-cleaning.component';
import { StorageTanksComponent } from './storage-tanks/storage-tanks.component';
import { DumpstersAndSurroundingAreasComponent } from './dumpsters-and-surrounding-areas/dumpsters-and-surrounding-areas.component';
import { FarmSolarPanelsComponent } from './farm-solar-panels/farm-solar-panels.component';
import { CustomIndustrialComponent } from './custom-industrial/custom-industrial.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResidentialComponent,
    CommercialComponent,
    GalleryComponent,
    EstimatesComponent,
    ContactComponent,
    IndustrialComponent,
    DrivewayCleaningComponent,
    HouseWashingComponent,
    PatioCleaningComponent,
    SidewalkCleaningComponent,
    GarageCleaningComponent,
    CurbCleaningComponent,
    ConcreteCleaningComponent,
    PlaygroundEquipmentComponent,
    PoolDeckCleaningComponent,
    StuccoCleaningComponent,
    ExteriorWindowWashingComponent,
    CustomResidentialComponent,
    GasStationCleaningComponent,
    DriveThruCleaningComponent,
    RestaurantPatioCleaningComponent,
    DumpsterPadCleaningComponent,
    RestaurantKitchensComponent,
    RestaurantFloorsComponent,
    ParkingGarageCleaningComponent,
    GraffitiRemovalComponent,
    BuildingWashingComponent,
    GumRemovalComponent,
    CustomCommercialComponent,
    HeavyEquipmentComponent,
    FleetWashingComponent,
    ParkingLotsComponent,
    MachineryComponent,
    WarehoseCleaningComponent,
    StorageTanksComponent,
    DumpstersAndSurroundingAreasComponent,
    FarmSolarPanelsComponent,
    CustomIndustrialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
