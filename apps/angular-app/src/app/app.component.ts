import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';

@Component({
  standalone: true,
  imports: [ CommonModule, RouterModule, MenuModule],
  selector: 'cplace-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-app';
  demos: MenuItem[] | undefined;

  ngOnInit() {
    this.demos = [
      {
        label: 'Demos',
        items: [{ label: 'CKEditor4', routerLink: ['/ckeditor'] }],
      },
    ];
  }
}
