import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//? We need now to import the StoreModule && our created reducer
import { StoreModule } from '@ngrx/store';
import { tutorialReducer } from './reducers/tutorial.reducer';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //? Let's import StoreModule and pass the right argument forRoot
    //? We have a property called tutorial which takes a value of tutorialReducer
    StoreModule.forRoot({
      tutorial: tutorialReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
