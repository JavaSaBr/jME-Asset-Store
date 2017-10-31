import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileTypesComponent } from './file-types.component';

describe('FileTypesComponent', () => {
  let component: FileTypesComponent;
  let fixture: ComponentFixture<FileTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
