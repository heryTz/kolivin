import { Test, TestingModule } from '@nestjs/testing';
import { RentingResolver } from './renting.resolver';
import { RentingService } from './renting.service';

describe('RentingResolver', () => {
  let resolver: RentingResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RentingResolver, RentingService],
    }).compile();

    resolver = module.get<RentingResolver>(RentingResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
