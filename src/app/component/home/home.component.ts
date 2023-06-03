import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HelloWordService } from '../../hello-word.service';
import { UtilityService } from '../../utility.service';
import { AuthenticationService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

    message: string;
    userName: string;
    userData: any;
    constructor(
        private utilityService: UtilityService,
        private authenticationService: AuthenticationService,
        private route: ActivatedRoute, private router: Router,
        private alertService: AlertService
    ) {
        //Taking Dynamic data from route URL
        // const data = this.router.getCurrentNavigation().extras.state;
        this.userName = this.utilityService.getuserName();
    }


    ngOnInit() {

        /*  this.route.data.subscribe((data) => {
             console.log(data);
         }); */

    }

    checkAuthorize(){
        this.authenticationService.checkAuthorize().pipe()
        .subscribe((data) =>{

   this.router.navigate(['/authorize']);
        },
                (error) => {
                    this.alertService.error(error.error);
            });
}
}