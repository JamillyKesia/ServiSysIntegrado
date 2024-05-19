import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovPendentesComponent } from './aprov-pendentes.component';

describe('AprovPendentesComponent', () => {
  let component: AprovPendentesComponent;
  let fixture: ComponentFixture<AprovPendentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AprovPendentesComponent]
    });
    fixture = TestBed.createComponent(AprovPendentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
