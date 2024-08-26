import { Injectable } from '@nestjs/common';
import { CreateBuyListInput } from './dto/create-buy-list.input';
import { UpdateBuyListInput } from './dto/update-buy-list.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { BuyList } from '@prisma/client';

@Injectable()
export class BuyListService {
  constructor(private prisma: PrismaService) {}

  async create(createBuyListInput: CreateBuyListInput): Promise<BuyList> {
    const { name } = createBuyListInput;
    return this.prisma.buyList.create({
      data: { name },
    });
  }

  async findAll(): Promise<BuyList[]> {
    return this.prisma.buyList.findMany({
      include: { items: true },
    });
  }

  async findOne(id: number): Promise<BuyList | null> {
    return this.prisma.buyList.findUnique({
      where: { id },
      include: { items: true },
    });
  }

  async update(id: number, updateBuyListInput: UpdateBuyListInput): Promise<BuyList> {
    const { name } = updateBuyListInput;
    return this.prisma.buyList.update({
      where: { id },
      data: { name },
    });
  }

  async remove(id: number): Promise<BuyList> {
    return this.prisma.buyList.delete({
      where: { id },
    });
  }
}
