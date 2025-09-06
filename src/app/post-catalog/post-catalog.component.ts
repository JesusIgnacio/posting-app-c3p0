import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { PostService } from '../post.service';
import { Post } from '../post';
import { GetDayReferencePipe } from '../get-day-reference.pipe';
import { PostBannerComponent } from '../post-banner/post-banner.component';

@Component({
  selector: 'app-post-catalog',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    GetDayReferencePipe,
    PostBannerComponent
  ],
  templateUrl: './post-catalog.component.html',
  styleUrls: ['./post-catalog.component.css']
})
export class PostCatalogComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  dataSource = new MatTableDataSource<Post>();
  tableColumns: string[] = ['story_title', 'created_at', 'action'];
  loading = false;
  error: string | null = null;
  
  constructor(
    private postService: PostService,
    private snackBar: MatSnackBar
  ) { }
  ngOnInit() {
    this.load();
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  load() {
    this.loading = true;
    this.error = null;
    
    this.postService.getPosts().subscribe({
      next: (posts: Post[]) => {
        this.dataSource.data = posts;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading posts:', error);
        this.error = 'Failed to load posts. Please try again.';
        this.loading = false;
        this.showError('Failed to load posts');
      }
    });
  }

  delete_post(post: Post) {
    this.postService.deactivatePost(post.story_id).subscribe({
      next: (result) => {
        console.log('Post deleted:', result);
        this.showSuccess('Post deleted successfully');
        this.load();
      },
      error: (error) => {
        console.error('Error deleting post:', error);
        this.showError('Failed to delete post');
      }
    });
  }

  open_link(url: string) {
    window.open(url, '_blank');
  }
  
  private showSuccess(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['success-snackbar']
    });
  }
  
  private showError(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      panelClass: ['error-snackbar']
    });
  }

}
