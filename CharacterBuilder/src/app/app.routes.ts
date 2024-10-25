import { Routes } from '@angular/router';
import { CharBuilderComponent } from './char-builder/char-builder.component';

export const routes: Routes = [
  {path: '', component: CharBuilderComponent },
  {path: 'build', component: CharBuilderComponent }
];
