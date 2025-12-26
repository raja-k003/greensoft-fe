import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WildCardComponent } from './wild-card/wild-card.component';
import { ContactComponent } from './contact/contact.component';
import { ItemComponent } from './item/item.component';
import { ProductsComponent } from './products/products.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { ServiceComponent } from './service/service.component';
import { CalculatorComponent } from './calculator/calculator.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '', 
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component:HomeComponent
      },
      {
        path: 'product',
        component:ProductsComponent
      },
            {
        path: 'test-water-quality',
        component:CalculatorComponent
      },
        {
        path: 'product/:id',
        component:ItemComponent
      },
      {
        path: 'service',
        component:ServiceComponent
      },
      {
        path: 'about-us',
        component:AboutUsComponent
      },
      {
        path: 'contact',
        component:ContactComponent
      }
    ]
  },
  {
    path:"**",
    component:WildCardComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled', 
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
