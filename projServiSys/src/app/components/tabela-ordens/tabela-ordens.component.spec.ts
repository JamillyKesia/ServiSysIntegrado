import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaOrdensComponent } from './tabela-ordens.component';

describe('TabelaOrdensComponent', () => {
  let component: TabelaOrdensComponent;
  let fixture: ComponentFixture<TabelaOrdensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaOrdensComponent]
    });
    fixture = TestBed.createComponent(TabelaOrdensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
