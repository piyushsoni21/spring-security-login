import { Component } from '@angular/core';
import { User } from './models/user';
import { UtilityService } from './utility.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spring-security-login';

  user?: String | null;

  constructor(private utilityServie: UtilityService) {
   this.user = this.utilityServie.getuserName();

}
}
