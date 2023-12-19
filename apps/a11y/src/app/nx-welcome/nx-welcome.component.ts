import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cplace-demo-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./nx-welcome.component.scss'],
  templateUrl: './nx-welcome.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
