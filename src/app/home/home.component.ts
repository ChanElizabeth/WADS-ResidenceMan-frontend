import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth:AuthService, private route:Router, private news:HomeService) { }

  lstofnews;

  ngOnInit(): void {
    this.news.getNews().subscribe(
      data => {
        this.lstofnews = data
      }
    )
  }

}
