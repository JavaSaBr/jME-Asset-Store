import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetFilesComponent } from './asset-files.component';

describe('AssetFilesComponent', () => {
  let component: AssetFilesComponent;
  let fixture: ComponentFixture<AssetFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
