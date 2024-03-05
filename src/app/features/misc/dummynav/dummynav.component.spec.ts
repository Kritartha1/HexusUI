import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummynavComponent } from './dummynav.component';

describe('DummynavComponent', () => {
  let component: DummynavComponent;
  let fixture: ComponentFixture<DummynavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DummynavComponent]
    });
    fixture = TestBed.createComponent(DummynavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
