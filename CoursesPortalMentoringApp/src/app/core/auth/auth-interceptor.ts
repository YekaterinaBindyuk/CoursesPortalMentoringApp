import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    private token: string;

    constructor(private auth: AuthService){
    }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (localStorage.getItem('token')!==null){
            this.token = localStorage.getItem('token');
        }
        else {
            this.token = '';
        }
        const authReq = req.clone({
            headers: req.headers.set('Authorization', this.token)
        });
        return next.handle(authReq);
    }

}
