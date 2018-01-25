import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	commentToEdit;
  comments = [
  {
  	author:"Zeb",
  	comment:'first comment!'
  },
  {
  	author:"Joe",
  	comment: 'nice work!'
  },
  {
  	author:"Tyler",
  	comment: "I grade homeowrk!"

  }
  ];
  postComment(author, comment){
  	this.comments.push({author,comment});
  }

  deleteComment(index){
  	console.log(index);
  	console.log(this.comments[index]);
  	this.comments.splice(index,1);
  }

  makeCommentEdit(index){
  	this.commentToEdit = true;
  }
}
