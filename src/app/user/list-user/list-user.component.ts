import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  newsUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=e3a9ab6e98f548468d98d6283a014194";
  data: any[];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getNews();
  }


  getNews() {
     return this.http.get<any[]>(this.newsUrl).subscribe( (response) => {
       this.data = response['articles'];
       console.log(this.data)
     });
  }
}
