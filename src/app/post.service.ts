import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { Post } from './post';

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<ApiResponse<Post[]>>(`${this.apiUrl}/posts/`)
      .pipe(
        retry(2),
        map(response => response.data || []),
        catchError(this.handleError)
      );
  }

  deactivatePost(id: string): Observable<any> {
    return this.http.delete<ApiResponse<any>>(`${this.apiUrl}/posts/${id}`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    
    console.error('PostService Error:', errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
