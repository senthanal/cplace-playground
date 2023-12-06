import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UpdateCommentService } from './update-comments.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [UpdateCommentService]
})
export class SharedServicesModule {}
