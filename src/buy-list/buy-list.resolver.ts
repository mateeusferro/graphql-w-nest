import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BuyListService } from './buy-list.service';
import { CreateBuyListInput } from './dto/create-buy-list.input';
import { UpdateBuyListInput } from './dto/update-buy-list.input';
import { BuyList as BuyListModel } from './entities/buy-list.entity';

@Resolver('BuyList')
export class BuyListResolver {
  constructor(private readonly buyListService: BuyListService) {}

  @Mutation(() => BuyListModel, { name: 'createBuyList', nullable: true })
  async create(@Args('createBuyListInput') createBuyListInput: CreateBuyListInput) {
    return await this.buyListService.create(createBuyListInput);
  }

  @Query(() => [BuyListModel], { name: 'findAllBuyList', nullable: true })
  async findAll() {
    return await this.buyListService.findAll();
  }

  @Query(() => BuyListModel, { name: 'findOneBuyList', nullable: true })
  async findOne(@Args('id') id: number) {
    return await this.buyListService.findOne(id);
  }

  @Mutation(() => BuyListModel, { name: 'updateBuyList', nullable: true })
  async update(@Args('updateBuyListInput') updateBuyListInput: UpdateBuyListInput) {
    return await this.buyListService.update(updateBuyListInput.id, updateBuyListInput);
  }
 
  @Mutation(() => BuyListModel, { name: 'removeBuyList', nullable: true })
  async remove(@Args('id') id: number) {
    return await this.buyListService.remove(id);
  }
}
