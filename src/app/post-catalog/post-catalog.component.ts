import { Component, OnInit, ViewChild } from '@angular/core';
import { PostService } from '../post.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Post } from '../post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-catalog',
  templateUrl: './post-catalog.component.html',
  styleUrls: ['./post-catalog.component.css']
})
export class PostCatalogComponent implements OnInit {
  dataSource  = new MatTableDataSource<Post>();
  tableColumns: string[] = ['story_tittle', 'created_at', 'action'];
  constructor(private postService: PostService, private router: Router) { }
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit() {
    this.postService.getPosts().subscribe(result => {
      this.dataSource = result.data;
      this.dataSource.paginator = this.paginator;
    });
  }

  delete_post(post) {
    this.postService.deactivatePost(post.story_id).subscribe(result => {
      console.log(result);
    });
    this.router.navigate(['/']);
  }

}
