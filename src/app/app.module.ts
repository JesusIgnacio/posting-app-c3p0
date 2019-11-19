import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostCatalogComponent } from './post-catalog/post-catalog.component';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import { GetDayReferencePipe } from './get-day-reference.pipe';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PostBannerComponent } from './post-banner/post-banner.component'; 
@NgModule({
  declarations: [
    AppComponent,
    PostCatalogComponent,
    GetDayReferencePipe,
    PostBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
