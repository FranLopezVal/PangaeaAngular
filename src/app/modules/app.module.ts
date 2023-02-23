import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import WidgetNode from 'src/models/widgetNode';

import { ControlPanelComponent } from '../components/control-panel/control-panel.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { DataStructComponent } from '../components/data-struct/data-struct.component';
import { DynamicComponent } from '../components/dynamic.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'Data/:id', component: DataStructComponent },
  { path: '**',redirectTo:'',pathMatch: 'full'}
];
  
@NgModule({
  declarations: [
    ControlPanelComponent, DashboardComponent,DataStructComponent,WidgetNode,DynamicComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [ControlPanelComponent]
})

export class AppModule { }
