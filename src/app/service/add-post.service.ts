import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostPayload } from '../component/add-post/post-payload';

@Injectable({
  providedIn: 'root'
})
export class AddPostService {
  private url = 'http://localhost:8080/api/posts/';

  constructor(private httpClient: HttpClient) {

   }

   addPost(postPayload: PostPayload){
     console.log("addPost execute");
     return this.httpClient.post(this.url,postPayload);
   }
}
