import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodControlComponent } from './mood-control.component';

describe('MoodControlComponent', () => {
  let component: MoodControlComponent;
  let fixture: ComponentFixture<MoodControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoodControlComponent]
    });
    fixture = TestBed.createComponent(MoodControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
