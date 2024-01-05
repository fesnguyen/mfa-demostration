import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { KeycloakService } from 'keycloak-angular';

@Injectable()
export class KeycloakInterceptor implements HttpInterceptor {
  constructor(private keycloak: KeycloakService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log("Interceptor works!")
    // Check if the user is authenticated
    if (this.keycloak.getKeycloakInstance().authenticated) {
      return next.handle(request);
    } else {
      // Force the user to log in by redirecting to Keycloak login page
      this.keycloak.login();
      return Observable.create(); // Prevent the original request from being sent
    }
  }
}