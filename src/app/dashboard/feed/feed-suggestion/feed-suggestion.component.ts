import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-suggestion',
  templateUrl: './feed-suggestion.component.html',
  styleUrls: ['./feed-suggestion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedSuggestionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
