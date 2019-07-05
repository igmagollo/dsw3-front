import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPromocaoComponent } from './new-promocao.component';

describe('NewPromocaoComponent', () => {
  let component: NewPromocaoComponent;
  let fixture: ComponentFixture<NewPromocaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPromocaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPromocaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
