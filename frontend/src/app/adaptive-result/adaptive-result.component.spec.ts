import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaptiveResultComponent } from './adaptive-result.component';

describe('AdaptiveResultComponent', () => {
  let component: AdaptiveResultComponent;
  let fixture: ComponentFixture<AdaptiveResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdaptiveResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaptiveResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
