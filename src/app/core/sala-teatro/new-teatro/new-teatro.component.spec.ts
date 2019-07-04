import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTeatroComponent } from './new-teatro.component';

describe('NewTeatroComponent', () => {
  let component: NewTeatroComponent;
  let fixture: ComponentFixture<NewTeatroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTeatroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTeatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
