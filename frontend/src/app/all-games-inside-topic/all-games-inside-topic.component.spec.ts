import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGamesInsideTopicComponent } from './all-games-inside-topic.component';

describe('AllGamesInsideTopicComponent', () => {
  let component: AllGamesInsideTopicComponent;
  let fixture: ComponentFixture<AllGamesInsideTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllGamesInsideTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGamesInsideTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
