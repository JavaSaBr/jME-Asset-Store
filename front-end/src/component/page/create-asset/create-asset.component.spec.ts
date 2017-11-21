import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AddAssetComponent} from './create-asset.component';

describe('AddAssetComponent', () => {
  let component: AddAssetComponent;
  let fixture: ComponentFixture<AddAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddAssetComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
