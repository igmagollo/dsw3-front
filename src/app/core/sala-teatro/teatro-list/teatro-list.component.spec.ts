import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeatroListComponent } from './teatro-list.component';

describe('TeatroListComponent', () => {
  let component: TeatroListComponent;
  let fixture: ComponentFixture<TeatroListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeatroListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeatroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
