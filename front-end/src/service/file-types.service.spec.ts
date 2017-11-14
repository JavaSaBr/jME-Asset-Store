import {TestBed, inject} from '@angular/core/testing';

import {FileTypesService} from './file-types.service';

describe('FileTypesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileTypesService]
    });
  });

  it('should be created', inject([FileTypesService], (service: FileTypesService) => {
    expect(service).toBeTruthy();
  }));
});
