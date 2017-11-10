import { TestBed, inject } from '@angular/core/testing';

import { AssetCategoryService } from './asset-category.service';

describe('AssetCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssetCategoryService]
    });
  });

  it('should be created', inject([AssetCategoryService], (service: AssetCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
