import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { PageComponent } from './page/page.component';
import { AppComponent } from './app.component';
import { ProfileDetailsGuard } from './guards/profile-details.guard';

const routes: Routes = [
  
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: PageComponent, resolve: {profileDetails: ProfileDetailsGuard}}

];

@NgModule({
  declarations: [
    PageComponent,
    ProfilesComponent,
    ProfileDetailsComponent,
    
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
