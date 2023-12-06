import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CKEditorComponent, CKEditorModule, ChangeEvent } from '@ckeditor/ckeditor5-angular';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormsModule } from '@angular/forms';
import {
  SharedServicesModule,
  UpdateCommentService,
} from '@cplace-demo/shared-services';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'cplace-demo-ckeditor5',
  standalone: true,
  imports: [CommonModule, FormsModule, CKEditorModule, SharedServicesModule],
  templateUrl: './ckeditor5.component.html',
  styleUrls: ['./ckeditor5.component.scss'],
})
export class Ckeditor5Component implements OnInit {
  @ViewChild('editor') editorComponent!: CKEditorComponent;
  editorData = '';
  public Editor = ClassicEditor;

  constructor(
    private updateCommentsService: UpdateCommentService
  ) {}

  ngOnInit(): void {
    this.updateCommentsService
      .getComment()
      .subscribe((comment) => (this.editorData = comment.body));
  }

  public onChange( { editor }: ChangeEvent ) {
    const data = editor.data.get();
    this.dataChange(data);
}

  dataChange(newComment: string) {
    this.updateCommentsService
      .setComment(newComment)
      .subscribe((comment) => console.info(`Updated comment: ${comment}`));
  }
}
