import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFileTypeComponent } from './add-file-type.component';

describe('AddFileTypeComponent', () => {
  let component: AddFileTypeComponent;
  let fixture: ComponentFixture<AddFileTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFileTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFileTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
