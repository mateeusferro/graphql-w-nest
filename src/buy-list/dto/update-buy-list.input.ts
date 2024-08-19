import { CreateBuyListInput } from './create-buy-list.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateBuyListInput extends PartialType(CreateBuyListInput) {
  id: number;
}
