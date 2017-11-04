import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileTypesServiceComponent } from './file.types.service.component';

describe('NewFile.Types.ServiceComponent', () => {
  let component: FileTypesServiceComponent;
  let fixture: ComponentFixture<FileTypesServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileTypesServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileTypesServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
