import { Injectable } from '@angular/core';
import { Post, randPost } from '@ngneat/falso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor() { }

  getFeed(): Observable<Post[]> {
    return new Observable<Post[]>((observer) => {
      observer.next(randPost({ length: 10 }));
      observer.complete();
    }
    );
  }
}
