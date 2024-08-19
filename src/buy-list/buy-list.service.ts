import { Injectable } from '@nestjs/common';
import { CreateBuyListInput } from './dto/create-buy-list.input';
import { UpdateBuyListInput } from './dto/update-buy-list.input';

@Injectable()
export class BuyListService {
  create(createBuyListInput: CreateBuyListInput) {
    return 'This action adds a new buyList';
  }

  findAll() {
    return `This action returns all buyList`;
  }

  findOne(id: number) {
    return `This action returns a #${id} buyList`;
  }

  update(id: number, updateBuyListInput: UpdateBuyListInput) {
    return `This action updates a #${id} buyList`;
  }

  remove(id: number) {
    return `This action removes a #${id} buyList`;
  }
}
