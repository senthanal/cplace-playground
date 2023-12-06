import { Route } from '@angular/router';
import { CkeditorComponent } from './ckeditor/ckeditor.component';
import { Ckeditor5Component } from './ckeditor5/ckeditor5.component';

export const ckeditorRoutes: Route[] = [
  { path: 'ckeditor', component: CkeditorComponent },
  { path: 'ckeditor5', component: Ckeditor5Component },
];
