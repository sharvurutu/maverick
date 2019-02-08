import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaptivePlayBoardComponent } from './adaptive-play-board.component';

describe('AdaptivePlayBoardComponent', () => {
  let component: AdaptivePlayBoardComponent;
  let fixture: ComponentFixture<AdaptivePlayBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdaptivePlayBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaptivePlayBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
