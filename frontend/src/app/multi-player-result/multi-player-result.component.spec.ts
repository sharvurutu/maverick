import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiPlayerResultComponent } from './multi-player-result.component';

describe('MultiPlayerResultComponent', () => {
  let component: MultiPlayerResultComponent;
  let fixture: ComponentFixture<MultiPlayerResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiPlayerResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiPlayerResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
