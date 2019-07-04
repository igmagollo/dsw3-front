import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTeatroComponent } from './edit-teatro.component';

describe('EditTeatroComponent', () => {
  let component: EditTeatroComponent;
  let fixture: ComponentFixture<EditTeatroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTeatroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTeatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
