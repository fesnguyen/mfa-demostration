import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'mfa-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  constructor(private keycloak: KeycloakService,) {}

  public init() {
    this.keycloak.init({
      config: {
        realm: 'angular-keycloak',
        url: 'http://localhost:8080',
        clientId: 'angular-keycloak-client'
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
      }
    }).then(
      () => {
        console.log('init successed');
      },
      (er) => {
        console.log(er);
      }
    )
  }
}
