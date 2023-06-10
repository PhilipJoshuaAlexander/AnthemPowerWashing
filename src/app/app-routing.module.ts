import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommercialComponent } from './commercial/commercial.component';
import { ContactComponent } from './contact/contact.component';
import { EstimatesComponent } from './estimates/estimates.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ResidentialComponent } from './residential/residential.component';
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



const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'commercial', component: CommercialComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'estimates', component: EstimatesComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'home', component: HomeComponent},
  {path: 'residential', component: ResidentialComponent},
  {path: 'industrial', component: IndustrialComponent},
  {path: 'driveway_cleaning', component: DrivewayCleaningComponent},
  {path: 'house_washing', component: HouseWashingComponent },
  {path: 'patio_cleaning', component: PatioCleaningComponent },
  {path: 'sidewalk_cleaning', component: SidewalkCleaningComponent },
  {path: 'garage_cleaning', component: GarageCleaningComponent},
  {path: 'curb_cleaning', component: CurbCleaningComponent},
  {path: 'concrete_cleaning', component: ConcreteCleaningComponent},
  {path: 'playground_equipment', component: PlaygroundEquipmentComponent},
  {path: 'pool_deck_cleaning', component: PoolDeckCleaningComponent},
  {path: 'stucco_cleaning', component: StuccoCleaningComponent},
  {path: 'exterior_window_washing', component: ExteriorWindowWashingComponent},
  {path: 'custom_residential', component: CustomResidentialComponent},
  {path: 'gas_station_cleaning', component: GasStationCleaningComponent},
  {path: 'drive_thru_cleaning', component: DriveThruCleaningComponent},
  {path: 'restaurant_patio_cleaning', component: RestaurantPatioCleaningComponent},
  {path: 'dumpster_pad_cleaning', component: DumpsterPadCleaningComponent},
  {path: 'restaurant_kitchens', component: RestaurantKitchensComponent},
  {path: 'restaurant_floors', component: RestaurantFloorsComponent},
  {path: 'parking_garage_cleaning', component: ParkingGarageCleaningComponent},
  {path: 'graffiti_removal', component: GraffitiRemovalComponent},
  {path: 'sidewalk_cleaning_commercial', component: SidewalkCleaningComponent},
  {path: 'building_washing', component: BuildingWashingComponent},
  {path: 'gum_removal', component: GumRemovalComponent},
  {path: 'custom_commercial', component: CustomCommercialComponent},
  {path: 'heavy_equipment', component: HeavyEquipmentComponent },
  {path: 'fleet_washing', component: FleetWashingComponent },
  {path: 'parking_lots', component: ParkingLotsComponent },
  {path: 'machinery', component: MachineryComponent },
  {path: 'warehouse_cleaning', component: WarehoseCleaningComponent },
  {path: 'storage_tanks', component: StorageTanksComponent },
  {path: 'dumpsters_surrounding_areas', component: DumpstersAndSurroundingAreasComponent },
  {path: 'farm_solar_panels', component: FarmSolarPanelsComponent },
  {path: 'custom_industrial', component: CustomIndustrialComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
