import { Component } from '@angular/core';
import { CommentService } from './comment/comment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comments = [];
  commentToEdit; 

  constructor(private commentService: CommentService) {}

  ngOnInit() {
    this.comments = this.commentService.getComments();
    this.commentService.onCommentsUpdated((myNewComments) => {
      this.comments = myNewComments;
    });
  }

  deleteComment(commentToDelete) {
    this.commentService.deleteComment(commentToDelete);
  }

  makeCommentEditable(commentToEdit) {
    this.commentToEdit = commentToEdit;
  }

  doneEditing() {
    this.commentToEdit = null;
  }
}












