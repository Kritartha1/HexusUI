import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyDummyComponent } from './copy-dummy.component';

describe('CopyDummyComponent', () => {
  let component: CopyDummyComponent;
  let fixture: ComponentFixture<CopyDummyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CopyDummyComponent]
    });
    fixture = TestBed.createComponent(CopyDummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
