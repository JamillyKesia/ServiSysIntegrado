import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCoordComponent } from './login-coord.component';

describe('LoginCoordComponent', () => {
  let component: LoginCoordComponent;
  let fixture: ComponentFixture<LoginCoordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginCoordComponent]
    });
    fixture = TestBed.createComponent(LoginCoordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
