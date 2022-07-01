import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';
import { ProfileOverviewModule } from './profile-overview/profile-overview.module';
import { FeedSuggestionModule } from './feed-suggestion/feed-suggestion.module';
import { PostListModule } from './post-list/post-list.module';


@NgModule({
  declarations: [
    FeedComponent
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    ProfileOverviewModule,
    FeedSuggestionModule,
    PostListModule
  ]
})
export class FeedModule { }
