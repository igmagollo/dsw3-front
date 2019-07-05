import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasPromocoesComponent } from './minhas-promocoes.component';

describe('MinhasPromocoesComponent', () => {
  let component: MinhasPromocoesComponent;
  let fixture: ComponentFixture<MinhasPromocoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhasPromocoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhasPromocoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
