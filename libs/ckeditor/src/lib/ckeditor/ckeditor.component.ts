import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CKEditor4, CKEditorModule } from 'ckeditor4-angular';

@Component({
  selector: 'cplace-demo-ckeditor',
  standalone: true,
  imports: [CommonModule, CKEditorModule],
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.scss'],
})
export class CkeditorComponent implements OnInit {
  editorData = '';

  ngOnInit(): void {
    this.editorData = `<p>This is a CKEditor 4 WYSIWYG editor instance created with Angular.</p>`;
  }

  onChange(event: CKEditor4.EventInfo) {
    console.log(event.editor.getData());
  }
}
