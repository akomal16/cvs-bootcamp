import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AngularComponent} from './angular/angular.component';
import {JavaComponent} from './java/java.component';
import {HtmlComponent} from './html/html.component';
import {CssComponent} from './css/css.component';
import {JavascriptComponent} from './javascript/javascript.component';
import {LoginComponent} from "./login/login.component";
import {AwardComponent} from './award/award.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'angular',
    component: AngularComponent
  },
  {
    path: 'java',
    component: JavaComponent
  },
  {
    path: 'html',
    component: HtmlComponent
  },
  {
    path: 'css',
    component: CssComponent
  },
  {
    path: 'javascript',
    component: JavascriptComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'award',
    component: AwardComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
