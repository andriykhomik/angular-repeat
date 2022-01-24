import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../models/Post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {}

  getAllPosts():Observable<IPost[]>{
    return this.httpClient
      .get<IPost[]>(`https://jsonplaceholder.typicode.com/posts`);
  }

  getPostById(id: number):Observable<IPost[]>{
    return this.httpClient
      .get<IPost[]>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }
}
