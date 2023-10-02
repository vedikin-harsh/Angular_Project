import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path : '',redirectTo :'login' ,pathMatch : 'full'},
  {path : 'header' , component :HeaderComponent},
  {path : 'home' , component :HomeComponent},
  {path : 'login' , component :LoginComponent},
  {path : 'movie' , component :MovieComponent},
  {path: '**', component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
