import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileDetails } from '../interface/profile-details';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {

  public profileDetails!: string;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((param: any) => {
      console.log(param);
      this.profileDetails = JSON.stringify(param);
    })
  } 
}
