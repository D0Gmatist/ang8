import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Modules
import { APP_ROUTING } from './app.routing';

// Components
import { AppComponent }    from './app.component';
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent
    ],
    imports: [
        APP_ROUTING,

        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
