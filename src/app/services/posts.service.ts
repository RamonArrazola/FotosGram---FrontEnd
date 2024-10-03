import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  PostPage = 0;

  constructor(private http: HttpClient) { }

  getPosts(){

    this.PostPage++;
    return this.http.get(`${URL}/posts/?pagina=${this.PostPage}`);

  }
}
