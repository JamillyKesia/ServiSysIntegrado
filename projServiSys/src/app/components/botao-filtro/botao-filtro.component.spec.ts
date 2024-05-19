import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoFiltroComponent } from './botao-filtro.component';

describe('BotaoFiltroComponent', () => {
  let component: BotaoFiltroComponent;
  let fixture: ComponentFixture<BotaoFiltroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotaoFiltroComponent]
    });
    fixture = TestBed.createComponent(BotaoFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
