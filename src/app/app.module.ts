import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from 'src/shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { shoppingListReducer } from './shopping-list/store/shopping-list.reducers';


@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,    
    SharedModule,
    ShoppingListModule,
    CoreModule,
    StoreModule.forRoot({
      shoppingList : shoppingListReducer
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
