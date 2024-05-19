import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoMenuCoordComponent } from './botao-menu-coord.component';

describe('BotaoMenuCoordComponent', () => {
  let component: BotaoMenuCoordComponent;
  let fixture: ComponentFixture<BotaoMenuCoordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotaoMenuCoordComponent]
    });
    fixture = TestBed.createComponent(BotaoMenuCoordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
