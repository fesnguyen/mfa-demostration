import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'mfa-remote1-entry',
  template: `<mfa-nx-welcome></mfa-nx-welcome>`,
})
export class RemoteEntryComponent {}
