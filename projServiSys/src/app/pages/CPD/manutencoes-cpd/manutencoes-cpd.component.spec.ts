import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencoesCpdComponent } from './manutencoes-cpd.component';

describe('ManutencoesCpdComponent', () => {
  let component: ManutencoesCpdComponent;
  let fixture: ComponentFixture<ManutencoesCpdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManutencoesCpdComponent]
    });
    fixture = TestBed.createComponent(ManutencoesCpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
