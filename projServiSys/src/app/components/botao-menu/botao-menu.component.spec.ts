import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoMenuComponent } from './botao-menu.component';

describe('BotaoMenuComponent', () => {
  let component: BotaoMenuComponent;
  let fixture: ComponentFixture<BotaoMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotaoMenuComponent]
    });
    fixture = TestBed.createComponent(BotaoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
