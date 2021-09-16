import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddPostService } from 'src/app/service/add-post.service';
import { PostPayload } from '../add-post/post-payload';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post!: PostPayload;
  permaLink!:Number;
  constructor(private activeatedRoute: ActivatedRoute, private addPostService: AddPostService) { }

  ngOnInit(): void {
    this.activeatedRoute.params.subscribe(params=>{
      this.permaLink = params['id'];
    });

    this.addPostService.getPost(this.permaLink).subscribe( (data:PostPayload) =>{
      this.post = data;
    }, error =>{
      console.log('Failure Response');
    })
  }


}
