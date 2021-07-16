import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrellListComponent } from './trell-list.component';

describe('TrellListComponent', () => {
  let component: TrellListComponent;
  let fixture: ComponentFixture<TrellListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrellListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrellListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
