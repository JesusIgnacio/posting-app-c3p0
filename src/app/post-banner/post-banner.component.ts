import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-post-banner',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule],
  templateUrl: './post-banner.component.html',
  styleUrls: ['./post-banner.component.css']
})
export class PostBannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
