import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable()
export class BaseInterceptor implements HttpInterceptor {
    baseUrl: string = `${environment.apiBaseUrl}`;
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let clonedRequest = null;

        if (!environment.production) {
            clonedRequest = request.clone({
                setHeaders: this.getHeader(),
                url: this.proxyBackEndServer(`${request.url}`),
            }
            );
            return next.handle(clonedRequest).pipe(catchError((error: HttpErrorResponse) => {
                this.handleError(error)
                return throwError(error);
            })
            );
        }

        return next.handle(clonedRequest);
    }

    protected proxyBackEndServer(url: string): string {
        return this.baseUrl + url;
    }

    protected getHeader(): { [name: string]: string | string[] } {
        return null;
    }

    protected handleError(error: HttpErrorResponse):void {
            
    }
}