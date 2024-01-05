import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent, HttpClientModule],
  selector: 'mfa-remote1-entry',
  templateUrl: './entry.component.html',
})
export class RemoteEntryComponent implements OnInit {
  posts: any[] = [];

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getPostsErr(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'failed_URL');
  }

  ngOnInit(): void {
    this.getPosts().subscribe((data) => {
      this.posts = data;
    });
    this.getPostsErr().subscribe((data) => {
      this.posts = data;
    },
    (err) => {console.log(err)});
  }
}
