import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './shared/components/appComponent/app.component';
import { CoreModule } from './core/core.module';
import { DataModule } from './data/data.module';
import { SharedModule } from './shared/shared.module';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SkeletonComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    SharedModule,
    DataModule,
    CoreModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LocationStrategy, //evita el simbolo que añade angular en las rutas
      useClass: PathLocationStrategy,
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
