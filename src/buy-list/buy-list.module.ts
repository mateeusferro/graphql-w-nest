import { Module } from '@nestjs/common';
import { BuyListService } from './buy-list.service';
import { BuyListResolver } from './buy-list.resolver';

@Module({
  providers: [BuyListResolver, BuyListService],
})
export class BuyListModule {}
