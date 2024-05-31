import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaOrdemFuncComponent } from './nova-ordem-func.component';

describe('NovaOrdemFuncComponent', () => {
  let component: NovaOrdemFuncComponent;
  let fixture: ComponentFixture<NovaOrdemFuncComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NovaOrdemFuncComponent]
    });
    fixture = TestBed.createComponent(NovaOrdemFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
