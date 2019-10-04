import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './components/error/404.component';
import { P500Component } from './components/error/500.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { ConsultationsComponent } from './components/formulaire/consultations/consultations.component';
import { ConsultationComponent } from './components/formulaire/consultations/consultation/consultation.component';
import {HttpModule} from "@angular/http";

import { AngularEditorModule } from '@kolkov/angular-editor';
import {HttpClientModule} from '@angular/common/http';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {FormsModule} from '@angular/forms';
import {BonDeCommandeComponent} from './components/formulaire/bon-de-commande/bon-de-commande.component';
import {FicheEngagementComponent} from './components/formulaire/fiche-engagement/fiche-engagement.component';
import {ModelDeDevisComponent} from './components/formulaire/model-de-devis/model-de-devis.component';
import {OrdreDePaiementComponent} from './components/formulaire/ordre-de-paiement/ordre-de-paiement.component';
import {OrdreDeVirementComponent} from './components/formulaire/ordre-de-virement/ordre-de-virement.component';
import {OrdreImputationComponent} from './components/formulaire/ordre-imputation/ordre-imputation.component';
import {ProcesVerbalComponent} from './components/formulaire/proces-verbal/proces-verbal.component';
import {ProcesVerbalReceptionComponent} from './components/formulaire/proces-verbal-reception/proces-verbal-reception.component';
import { AuthService } from './shared/services/auth.service';
import { AccountService } from './shared/services/account.service';
import { UrlPermission } from './urlPermission/urlPermission';
import { EmployeesComponent } from './components/employees/employees.component';
import { ProvidersComponent } from './components/providers/providers.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    AngularEditorModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
    HttpModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    FormulaireComponent,
    ConsultationsComponent,
    ConsultationComponent,
    BonDeCommandeComponent,
    FicheEngagementComponent,
    ModelDeDevisComponent,
    OrdreDePaiementComponent,
    OrdreDeVirementComponent,
    OrdreImputationComponent,
    ProcesVerbalComponent,
    ProcesVerbalReceptionComponent,
    EmployeesComponent,
    ProvidersComponent
  ],
  providers: [AuthService,AccountService,UrlPermission,
    
    {
    
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
