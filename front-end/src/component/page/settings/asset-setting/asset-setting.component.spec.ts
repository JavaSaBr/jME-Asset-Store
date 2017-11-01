import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetSettingComponent } from './asset-setting.component';

describe('AssetSettingComponent', () => {
  let component: AssetSettingComponent;
  let fixture: ComponentFixture<AssetSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
