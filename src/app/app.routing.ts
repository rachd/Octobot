import { RouterModule, Routes } from '@angular/router';
import { IRouting } from './shared/interfaces';

import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'create', component: FormComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch:'full', redirectTo: '/home' }
];

export const appRouting: IRouting = {
    routes: RouterModule.forRoot(routes),
    components: [ FormComponent, HomeComponent]
};