import { Injectable } from '@angular/core';
import { AuthService } from './../services/auth/auth.service';


@Injectable({
    providedIn: 'root'
})
export class UserTrackResolver {
    constructor(private authService: AuthService) {}

    resolve() {
        return this.authService.getTracks();
    }
}
