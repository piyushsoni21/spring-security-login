import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first, takeUntil } from 'rxjs/operators';
import TakeUntilDestroy from 'src/app/take-until-destroy';
@TakeUntilDestroy
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  componentDestroy;
  isLoggedIn = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
  }

  handleLogout() {
    this.authenticationService.logout().pipe()
    .subscribe((data) =>{
      this.router.navigate(['/']);
  });

}
}
