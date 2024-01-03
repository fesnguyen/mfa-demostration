import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mfa-keycloak',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './keycloak.component.html',
  styleUrl: './keycloak.component.css',
})
export class KeycloakComponent {}
