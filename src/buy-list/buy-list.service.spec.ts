import { Test, TestingModule } from '@nestjs/testing';
import { BuyListService } from './buy-list.service';

describe('BuyListService', () => {
  let service: BuyListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuyListService],
    }).compile();

    service = module.get<BuyListService>(BuyListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
