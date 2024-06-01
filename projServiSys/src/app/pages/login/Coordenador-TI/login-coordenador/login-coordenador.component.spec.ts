import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCoordenadorComponent } from './login-coordenador.component';

describe('LoginCoordenadorComponent', () => {
  let component: LoginCoordenadorComponent;
  let fixture: ComponentFixture<LoginCoordenadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginCoordenadorComponent]
    });
    fixture = TestBed.createComponent(LoginCoordenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
