import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsCpdComponent } from './os-cpd.component';

describe('OsCpdComponent', () => {
  let component: OsCpdComponent;
  let fixture: ComponentFixture<OsCpdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OsCpdComponent]
    });
    fixture = TestBed.createComponent(OsCpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
