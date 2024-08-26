import { Injectable } from '@nestjs/common';
import { CreateItemInput } from './dto/create-item.input';
import { UpdateItemInput } from './dto/update-item.input';
import { Item } from './entities/item.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { Items } from '@prisma/client';
import { Summary } from './entities/summary.entity';

@Injectable()
export class ItemsService {
  constructor(private prisma: PrismaService) {}

  async create(createItemInput: CreateItemInput): Promise<Item> {
    const { name, buyListId, category, quantity, status } = createItemInput;
    return this.prisma.items.create({
      data: { name, buyListId, category, quantity, status },
    });
  }

  async findAll(): Promise<Items[]> {
    return this.prisma.items.findMany();
  }

  async findOne(buyListId: number): Promise<Items[] | null> {
    return this.prisma.items.findMany({
      where: { buyListId: buyListId },
    });
  }

  async summaryByCategoryAndStatus(id: number): Promise<Summary[] | null> {
    return this.prisma.$queryRaw`
    SELECT category, 
    COUNT(CASE WHEN status = false THEN 1 END) as pendingItems,
    COUNT(CASE WHEN status = true THEN 1 END) as purchasedItems
    FROM Items
    WHERE buyListId = ${id}
    GROUP BY category;`;
  }

  async update(id: number, updateItemInput: UpdateItemInput): Promise<Item> {
    const { name, buyListId, category, quantity, status } = updateItemInput;

    return this.prisma.items.update({
      where: { id },
      data: { name, buyListId, category, quantity, status },
    });
  }

  async remove(id: number): Promise<Item> {
    return this.prisma.items.delete({
      where: { id },
    });
  }
}
