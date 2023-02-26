import { Component } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proto-resolve';
  constructor(private service: AppService) {
    
  }
  onProfileChange() {
    this.service.setProfileDetails({name: 'angular', email: 'angular@gmail.com'});
  }
}
