import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPromocaoComponent } from './edit-promocao.component';

describe('EditPromocaoComponent', () => {
  let component: EditPromocaoComponent;
  let fixture: ComponentFixture<EditPromocaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPromocaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPromocaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
