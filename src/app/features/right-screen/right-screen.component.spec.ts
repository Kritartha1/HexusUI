import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightScreenComponent } from './right-screen.component';

describe('RightScreenComponent', () => {
  let component: RightScreenComponent;
  let fixture: ComponentFixture<RightScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightScreenComponent]
    });
    fixture = TestBed.createComponent(RightScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
