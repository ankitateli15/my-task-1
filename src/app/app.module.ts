import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from "./header/header.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from "./header/dialog/dialog.component";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatFormField } from "@angular/material/form-field";
import { HttpDataSerice } from "./service/http-data.service";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';









@NgModule({
    declarations: 
    [AppComponent,
    HeaderComponent,
    DialogComponent
    

   
  
     
        
   
        
    ],
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        HttpClientModule,
        FormsModule ,
        ReactiveFormsModule ,
        MatDialogModule,
        MatFormFieldModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule,
        MatFormField,
        HttpClientModule,
        MatInputModule,
        MatCardModule

        


        

        
        
        // AppRountingModule,
        // ReactiveFormsModule
    
      
     
        
        
    ],
    providers: [
        HttpDataSerice,
        provideAnimationsAsync()
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
    
}