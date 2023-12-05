import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CKEditor4, CKEditorModule } from 'ckeditor4-angular';
import {
  SharedServicesModule,
  UpdateCommentService,
} from '@cplace-demo/shared-services';
import { debounceTime, distinctUntilChanged, take } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'cplace-demo-ckeditor',
  standalone: true,
  imports: [CommonModule, FormsModule, CKEditorModule, SharedServicesModule],
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.scss'],
})
export class CkeditorComponent implements AfterViewInit {
  @ViewChild('editor') editor!: CKEditor4.Editor;
  editorData = '';
  editorConfig: CKEditor4.Config = { extraPlugins: 'divarea' };

  constructor(private updateCommentsService: UpdateCommentService) {}

  ngAfterViewInit(): void {
    this.updateCommentsService
      .getComment()
      .subscribe((comment) => (this.editorData = comment.body));
    this.editor['dataChange']
      .pipe(debounceTime(400), distinctUntilChanged(), take(1))
      .subscribe((value: string) => this.dataChange(value));
  }

  dataChange(newComment: string) {
    this.updateCommentsService
      .setComment(newComment)
      .subscribe((comment) => console.info(`Updated comment: ${comment}`));
  }
}
