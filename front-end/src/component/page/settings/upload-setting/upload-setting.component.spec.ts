import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadSettingComponent } from './upload-setting.component';

describe('UploadSettingComponent', () => {
  let component: UploadSettingComponent;
  let fixture: ComponentFixture<UploadSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
