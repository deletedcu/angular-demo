import { Component } from '@angular/core';
import { CommentService } from '../comment/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
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