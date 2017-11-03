import { TestBed, async, inject } from '@angular/core/testing';

import { AppSettingsGuard } from './app-settings.guard';

describe('AppSettingsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppSettingsGuard]
    });
  });

  it('should ...', inject([AppSettingsGuard], (guard: AppSettingsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
