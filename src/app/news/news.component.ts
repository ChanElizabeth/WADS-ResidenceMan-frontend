import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { AdminService } from '../services/admin.service';

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

  lstofnews;

  constructor(private homeNews:HomeService) { }

  onSubmit(){
    this.homeNews.news(this.NewsForm).subscribe(
      data => { 
          console.log(data.obj)   
          window.alert("Added Successfully!")  
      } 
    );
  }

  ngOnInit(): void {
    this.homeNews.getNews().subscribe(
      data => {
        this.lstofnews = data
      }
    )
  }
}
