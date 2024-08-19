import { Test, TestingModule } from '@nestjs/testing';
import { BuyListResolver } from './buy-list.resolver';
import { BuyListService } from './buy-list.service';

describe('BuyListResolver', () => {
  let resolver: BuyListResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuyListResolver, BuyListService],
    }).compile();

    resolver = module.get<BuyListResolver>(BuyListResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
