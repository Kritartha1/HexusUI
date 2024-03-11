import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexusPageComponent } from './hexus-page.component';

describe('HexusPageComponent', () => {
  let component: HexusPageComponent;
  let fixture: ComponentFixture<HexusPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HexusPageComponent]
    });
    fixture = TestBed.createComponent(HexusPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
