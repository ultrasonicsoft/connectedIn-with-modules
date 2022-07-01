import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Post } from '@ngneat/falso';

@Component({
  selector: 'app-post-entry',
  templateUrl: './post-entry.component.html',
  styleUrls: ['./post-entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostEntryComponent implements OnInit {

  @Input() entry!: Post;

  constructor() { }

  ngOnInit(): void {
  }

}
