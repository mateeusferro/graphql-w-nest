import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ItemsService } from './items.service';
import { CreateItemInput } from './dto/create-item.input';
import { UpdateItemInput } from './dto/update-item.input';
import { Item } from './entities/item.entity';
import { Summary } from './entities/summary.entity';

@Resolver('Item')
export class ItemsResolver {
  constructor(private readonly itemsService: ItemsService) {}

  @Mutation(() => Item, { name: 'createItem', nullable: true })
  async create(@Args('createItemInput') createItemInput: CreateItemInput) {
    return await this.itemsService.create(createItemInput);
  }

  @Query(() => [Item], { name: 'findAllItems', nullable: true })
  async findAll() {
    return await this.itemsService.findAll();
  }

  @Query(() => [Item], { name: 'findOneItemByBuyList', nullable: true })
  async findOne(@Args('buyListId') buyListId: number) {
    return await this.itemsService.findOne(buyListId);
  }

  @Query(() => [Summary], {
    name: 'summaryByCategoryAndStatus',
    nullable: true,
  })
  async summaryByCategoryAndStatus(@Args('buyListId') id: number) {
    const result: Summary[] =
      await this.itemsService.summaryByCategoryAndStatus(id);
    return result.map((item) => ({
      category: item.category,
      pendingItems: Number(item.pendingItems),
      purchasedItems: Number(item.purchasedItems),
    }));
  }

  @Mutation(() => Item, { name: 'updateItem', nullable: true })
  async update(@Args('updateItemInput') updateItemInput: UpdateItemInput) {
    return await this.itemsService.update(
      Number(updateItemInput.id),
      updateItemInput,
    );
  }

  @Mutation(() => Item, { name: 'removeItem', nullable: true })
  async remove(@Args('id') id: number) {
    return await this.itemsService.remove(id);
  }
}
