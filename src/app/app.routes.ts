import { Routes } from '@angular/router';
import { PostCatalogComponent } from './post-catalog/post-catalog.component';

export const routes: Routes = [
  { 
    path: '', 
    component: PostCatalogComponent 
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];
