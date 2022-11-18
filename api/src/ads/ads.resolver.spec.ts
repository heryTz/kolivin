import { Test, TestingModule } from '@nestjs/testing';
import { AdsResolver } from './ads.resolver';
import { AdsService } from './ads.service';

describe('AdsResolver', () => {
  let resolver: AdsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdsResolver, AdsService],
    }).compile();

    resolver = module.get<AdsResolver>(AdsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
