import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextMssgComponent } from './text-mssg.component';

describe('TextMssgComponent', () => {
  let component: TextMssgComponent;
  let fixture: ComponentFixture<TextMssgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextMssgComponent]
    });
    fixture = TestBed.createComponent(TextMssgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
