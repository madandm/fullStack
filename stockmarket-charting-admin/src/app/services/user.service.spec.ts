import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
    });
    service = TestBed.inject(UserService);
  });

  it('test query data', () => {
    service.postManageCompany().subscribe(user => {
      const info: any = user;
      expect(info.names.length).toBeGreaterThan(0);
    });
  });
});
