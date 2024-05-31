import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuasOrdensFuncComponent } from './suas-ordens-func.component';

describe('SuasOrdensFuncComponent', () => {
  let component: SuasOrdensFuncComponent;
  let fixture: ComponentFixture<SuasOrdensFuncComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuasOrdensFuncComponent]
    });
    fixture = TestBed.createComponent(SuasOrdensFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
