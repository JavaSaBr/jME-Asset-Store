import { TestBed, async, inject } from '@angular/core/testing';

import { UserAssetGuard } from './user-asset.guard';

describe('UserAssetGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserAssetGuard]
    });
  });

  it('should ...', inject([UserAssetGuard], (guard: UserAssetGuard) => {
    expect(guard).toBeTruthy();
  }));
});
