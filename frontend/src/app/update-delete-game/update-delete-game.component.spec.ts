import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeleteGameComponent } from './update-delete-game.component';

describe('UpdateDeleteGameComponent', () => {
  let component: UpdateDeleteGameComponent;
  let fixture: ComponentFixture<UpdateDeleteGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDeleteGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDeleteGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
