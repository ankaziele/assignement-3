import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GridModule, PagerModule, PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';


import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
   declarations: [
      AppComponent,
      GridComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      GridModule,
      PagerModule,
   ],
   providers: [PageService, SortService, FilterService, GroupService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
