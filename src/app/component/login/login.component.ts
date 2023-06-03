import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { AuthenticationService } from '../../services/auth.service';
import { UtilityService } from '../../utility.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../../services/alert.service';
import {  takeUntil } from 'rxjs/operators';
import TakeUntilDestroy from 'src/app/take-until-destroy';
@TakeUntilDestroy
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    componentDestroy;

    username: string | undefined;
    password: string | undefined;

    invalidLogin = false;
    loginSuccess = false;


    form!: FormGroup;
    loading = false;
    submitted = false;
    constructor(
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private utilityService: UtilityService,
        private alertService: AlertService

    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

   

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
       this.username = this.f['username'].value;
        this.authenticationService.authenticationService(this.f['username'].value, this.f['password'].value)
            .pipe(takeUntil(this.componentDestroy()))
            .subscribe((data) =>{
              
                    // get return url from query parameters or default to home page
                    const userData = {
                        name: this.username
                       
                    }
                    this.utilityService.setUsername(this.username);
                    this.authenticationService.registerSuccessfulLogin(this.username);
                    this.router.navigate(['/home'], { state: userData });
                },
                (error) => {
                    this.alertService.error(error.error);
                    this.loading = false;
            });
    }

    get f() { return this.form.controls; }

    private createNavigationData(userData: any) {
        const navigationExtras: NavigationExtras = {
            state: {
                data: userData
            }
        };

        return navigationExtras;
    }
}

