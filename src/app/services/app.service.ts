import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { ProfileDetails } from '../interface/profile-details';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private initState: ProfileDetails = {
    name: 'chetan',
    email: 'chetan@gmail.com'
  }

  private _profileDetails: BehaviorSubject<ProfileDetails> = new BehaviorSubject<ProfileDetails>(this.initState)

  constructor() { }

  public getProfileDetails(): BehaviorSubject<ProfileDetails> {
    return this._profileDetails;
  }

  public setProfileDetails(param: ProfileDetails): void {
    this._profileDetails.next(param);
  }

}
