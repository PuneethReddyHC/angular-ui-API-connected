import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCollegetComponent } from './add-colleget.component';

describe('AddCollegetComponent', () => {
  let component: AddCollegetComponent;
  let fixture: ComponentFixture<AddCollegetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCollegetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCollegetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
