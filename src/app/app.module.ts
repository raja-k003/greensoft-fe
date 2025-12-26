import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { WildCardComponent } from './wild-card/wild-card.component';
import { ToastComponent } from './toast/toast.component';
import { ToastService } from './toast/toast.service';
import { LoaderComponent } from './shared/loader/loader.component';
import { DatePipe } from '@angular/common';
import { EnvConfigService } from './utility/envConfig.service';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ItemComponent } from './item/item.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { ServiceComponent } from './service/service.component';
import { RouterModule } from '@angular/router';
import { ReviewComponent } from './review/review.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { CommonContentComponent } from './common-content/common-content.component';
import { CalculatorComponent } from './calculator/calculator.component';
export function envConfig(config:EnvConfigService){
return ()=>{
    return config.initEnvConfig()
}
}
@NgModule({
    declarations: [
        AppComponent,
        LoaderComponent,
        WildCardComponent,
        ToastComponent,
        AboutUsComponent,
        ContactComponent,
        HomeComponent,
        ProductsComponent,
        ItemComponent,
        HeaderComponent,
        FooterComponent,
        LayoutComponent,
        ServiceComponent,
        ReviewComponent,
        ShoppingComponent,
        CommonContentComponent,
        CalculatorComponent
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        NgSelectModule    ],
    providers: [
        EnvConfigService,
        { provide: APP_INITIALIZER,useFactory: envConfig, deps: [EnvConfigService], multi: true},
        ToastService,DatePipe],
    bootstrap: [AppComponent]
})
export class AppModule { }
