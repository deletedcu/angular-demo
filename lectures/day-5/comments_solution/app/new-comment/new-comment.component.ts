import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment/comment.service';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {
  text: string;
  author: string;

  constructor(private commentService: CommentService) { }

  ngOnInit() {
  }

  clearForm() {
    this.text = '';
    this.author = '';
  }

  addComment() {
    this.commentService.addComment({
      text: this.text, author: this.author
    });

    this.clearForm();
  }

}
