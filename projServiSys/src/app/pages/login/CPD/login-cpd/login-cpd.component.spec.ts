import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCPDComponent } from './login-cpd.component';

describe('LoginCPDComponent', () => {
  let component: LoginCPDComponent;
  let fixture: ComponentFixture<LoginCPDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginCPDComponent]
    });
    fixture = TestBed.createComponent(LoginCPDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
