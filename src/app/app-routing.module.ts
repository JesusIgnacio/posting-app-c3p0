import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostCatalogComponent } from './post-catalog/post-catalog.component';


const routes: Routes = [
  { path: '',
    component: PostCatalogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
