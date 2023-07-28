import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormComponentComponent } from './form-component/form-component.component';
import { FormsModule }   from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { UsdToInrPipe } from './Pipes/usd-to-inr.pipe';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ChangeValueDirective } from './directives/change-value.directive';
import { RouterModule,Routes } from '@angular/router';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { AboutComponent } from './about/about.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HttpClientModule } from '@angular/common/http';
import { GetDataByApiComponent } from './get-data-by-api/get-data-by-api.component';
import { OwnApiDataComponent } from './own-api-data/own-api-data.component';
import { AdminModule } from './admin/admin.module';



const routes:Routes = [
  {path:'header',component: HeaderComponent},
  {path:'calculator',component: CalculatorComponent},
  {path:'reactiveForm',component: ReactiveFormComponent},
  {path:'template',component: TemplateDrivenFormComponent},
  {path:'getDataByApi',component: GetDataByApiComponent},
  {path:'about',component:AboutComponent,
   children:[
   { path:'company',component:AboutCompanyComponent},
   { path:'me',component:AboutMeComponent}
   ]
   },
   {path:'toDoApp', loadChildren:() => import('./to-do-list/to-do-list.module')
   .then(mod => mod.ToDoListModule)
},
   
   {path:'admin', loadChildren:() => import('./admin/admin.module')
   .then(mod => mod.AdminModule)
}, 
  {path:'',redirectTo: '/calculator', pathMatch:'full' },
  {path:'getDataByOwnApi',component:OwnApiDataComponent },
  {path:'**', component: NoPageFoundComponent},
 
  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponentComponent,
    CalculatorComponent,
    UsdToInrPipe,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    ChangeValueDirective,
    NoPageFoundComponent,
    AboutComponent,
    GetDataByApiComponent,
    OwnApiDataComponent,
   
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
