import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCpdComponent } from './home-cpd.component';

describe('HomeCpdComponent', () => {
  let component: HomeCpdComponent;
  let fixture: ComponentFixture<HomeCpdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCpdComponent]
    });
    fixture = TestBed.createComponent(HomeCpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
