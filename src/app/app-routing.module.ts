import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LiveProjectComponent } from './live-project/live-project.component';
import { GithubComponent } from './github/github.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'liveproject', component: LiveProjectComponent },
  { path: 'github', component: GithubComponent },
  { path: 'about', component: AboutComponent },
  { path: '',   redirectTo: 'home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
