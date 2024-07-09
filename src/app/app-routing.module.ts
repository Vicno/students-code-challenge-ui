import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/page/home-page.component';
import { StudentsPageComponent } from './modules/students/page/students-page.component';
import { ClassesPageComponent } from './modules/classes/page/classes-page.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'students',
    loadChildren: () =>
      import('./modules/students/students.module').then(
        (m) => m.StudentsModule
      ),
    component: StudentsPageComponent,
  },
  {
    path: 'classes',
    loadChildren: () =>
      import('./modules/classes/classes.module').then((m) => m.ClassesModule),
    component: ClassesPageComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    component: HomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
