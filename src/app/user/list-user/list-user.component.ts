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
  movie = 'https://imdb8.p.rapidapi.com/title/get-most-popular-movies?homeCountry=US&purchaseCountry=US&currentCountry=US&apiKey=4f141d8bf1msh7d3f3058f379a27p164144jsnd989bf08b98f';
  data: any[];
  moviesList: any[];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getNews();
    this.getMovies();
  }

getMovies(){
  this.http.get<any[]>(this.movie).subscribe((res)=>{
    this.moviesList = res;
    console.log(this.data)
  })
}
  getNews() {
     return this.http.get<any[]>(this.newsUrl).subscribe( (response) => {
       this.data = response['articles'];
    //   console.log(this.data)
     });
  }
}
