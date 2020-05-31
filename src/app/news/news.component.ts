import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public NewsForm = {
    title: null,
    paragraph: null,
    postDate: null
  }

  public error = null;

  public success;

  lstofnews;

  constructor(private homeNews:HomeService, private news:HomeService) { }

  onSubmit(){
    this.homeNews.news(this.NewsForm).subscribe(
      data => { 
          console.log(data.obj)   
          window.alert("Added Successfully!")  
      } 
    );
  }

  ngOnInit(): void {
    this.news.getNews().subscribe(
      data => {
        this.lstofnews = data
      }
    )
  }

}
