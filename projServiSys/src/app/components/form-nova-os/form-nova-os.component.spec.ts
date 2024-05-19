import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNovaOsComponent } from './form-nova-os.component';

describe('FormNovaOsComponent', () => {
  let component: FormNovaOsComponent;
  let fixture: ComponentFixture<FormNovaOsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormNovaOsComponent]
    });
    fixture = TestBed.createComponent(FormNovaOsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
