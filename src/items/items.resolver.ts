import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ItemsService } from './items.service';
import { CreateItemInput } from './dto/create-item.input';
import { UpdateItemInput } from './dto/update-item.input';
import { Item } from './entities/item.entity';

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

  @Query(() => Item, { name: 'findOneItem', nullable: true })
  async findOne(@Args('id') id: number) {
    return await this.itemsService.findOne(id);
  }

  @Mutation(() => Item, { name: 'updateItem', nullable: true })
  async update(@Args('updateItemInput') updateItemInput: UpdateItemInput) {
    return await this.itemsService.update(updateItemInput.id, updateItemInput);
  }

  @Mutation(() => Item, { name: 'removeItem', nullable: true })
  async remove(@Args('id') id: number) {
    return await this.itemsService.remove(id);
  }
}
