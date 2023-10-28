import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/module/shared.module';
import { FournisseurComponent } from './components/Partners/fournisseur/fournisseur.component';

import { RouterModule } from '@angular/router';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { BesoinOffreFilterPipePipe } from './besoinoffre-filter-pipe.pipe';
import { BesoinoffreListComponent } from './components/instructor/instructor-dashboard/BesoinoffreListComponent';
import { ObjectifAddComponent } from './components/instructor/instructor-orders/objectif-add.component';
import { BesoinoffreEditComponent } from './components/instructor/instructor-payouts/besoinoffre-edit.component';
import { BesoinoffreAddComponent } from './components/instructor/instructor-social-profiles/besoinoffre-add.component';
import { ObJectifListComponent } from './components/instructor/instructor-tickets/objectif-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [AppComponent, FournisseurComponent,AppComponent,
    BesoinoffreListComponent,
    BesoinOffreFilterPipePipe,
  BesoinoffreAddComponent,
BesoinoffreEditComponent,
ObjectifAddComponent,
ObJectifListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
    BrowserAnimationsModule, NgxPaginationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    {
      provide: JWT_OPTIONS,
      useValue: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        }
      },
    },
    JwtHelperService, // Provide JwtHelperService directly
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
