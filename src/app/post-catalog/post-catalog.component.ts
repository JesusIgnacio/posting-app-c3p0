import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-catalog',
  templateUrl: './post-catalog.component.html',
  styleUrls: ['./post-catalog.component.css']
})
export class PostCatalogComponent implements OnInit {
  dataSource  = [];
  tableColumns: string[] = ['story_tittle', 'created_at'];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(result => {
      this.dataSource = result.data;
    });
  }

}
