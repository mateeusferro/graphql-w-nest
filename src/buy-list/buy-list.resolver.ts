import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BuyListService } from './buy-list.service';
import { CreateBuyListInput } from './dto/create-buy-list.input';
import { UpdateBuyListInput } from './dto/update-buy-list.input';

@Resolver('BuyList')
export class BuyListResolver {
  constructor(private readonly buyListService: BuyListService) {}

  @Mutation('createBuyList')
  create(@Args('createBuyListInput') createBuyListInput: CreateBuyListInput) {
    return this.buyListService.create(createBuyListInput);
  }

  @Query('buyList')
  findAll() {
    return this.buyListService.findAll();
  }

  @Query('buyList')
  findOne(@Args('id') id: number) {
    return this.buyListService.findOne(id);
  }

  @Mutation('updateBuyList')
  update(@Args('updateBuyListInput') updateBuyListInput: UpdateBuyListInput) {
    return this.buyListService.update(updateBuyListInput.id, updateBuyListInput);
  }

  @Mutation('removeBuyList')
  remove(@Args('id') id: number) {
    return this.buyListService.remove(id);
  }
}
