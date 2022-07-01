import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Post } from '@ngneat/falso';
import { Observable } from 'rxjs';
import { FeedService } from 'src/app/feed.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListComponent implements OnInit {

  posts$!: Observable<Post[]>;
  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
    this.posts$ = this.feedService.getFeed();
  }

}
