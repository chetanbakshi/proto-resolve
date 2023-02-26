import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { BehaviorSubject} from 'rxjs';
import { ProfileDetails } from '../interface/profile-details';
import { AppService } from '../services/app.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileDetailsGuard implements Resolve<BehaviorSubject<ProfileDetails>> {
  constructor(private service: AppService, private router: Router) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): BehaviorSubject<ProfileDetails> {
      this.service.getProfileDetails().subscribe(res => {
        console.log(res);
        // this.router.navigate(['home'])
      })
    return this.service.getProfileDetails()
  }
  
}
