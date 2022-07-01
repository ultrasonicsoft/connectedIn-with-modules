import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedSuggestionComponent } from './feed-suggestion.component';

describe('FeedSuggestionComponent', () => {
  let component: FeedSuggestionComponent;
  let fixture: ComponentFixture<FeedSuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedSuggestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
