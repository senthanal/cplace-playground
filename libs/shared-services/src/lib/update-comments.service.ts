import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from './comment.model';

@Injectable({
  providedIn: 'root',
})
export class UpdateCommentService {
  constructor(private http: HttpClient) {}

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>('api/comments');
  }

  getComment(): Observable<Comment> {
    return this.http.get<Comment>('api/comments/1');
  }

  setComment(comment: string): Observable<Comment> {
    const body: Partial<Comment> = {
      body: comment,
    };
    return this.http.put<Comment>('api/comments/1', body);
  }
}
