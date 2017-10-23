import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommentService {
  comments = [
    { text: 'first comment!', author: 'Anna' },
    { text: 'nice work!', author: 'Bill' },
    { text: 'I would also like to congratulate you!', author: 'Cody' }
  ];
  commentsSubject: Subject<any> = new Subject<any>();
  anotherSubject: Subject<number> = new Subject<number>();

  constructor() { }

  private updateCommentsSubject(): void {
    this.commentsSubject.next(this.comments);
  }

  getComments() {
    return this.comments;
  }

  addComment(comment) {
    this.comments.push(comment);
    this.updateCommentsSubject();
  }

  deleteComment(commentToDelete) {
    this.comments = this.comments.filter((comment) => {
      return comment != commentToDelete;
    });
    this.updateCommentsSubject();
  }

  onCommentsUpdated(callback): void {
    this.commentsSubject.asObservable().subscribe(callback);
  }
}
