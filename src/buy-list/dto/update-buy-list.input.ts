import { Field, InputType } from '@nestjs/graphql';
import { CreateBuyListInput } from './create-buy-list.input';
import { PartialType } from '@nestjs/mapped-types';

@InputType()
export class UpdateBuyListInput extends PartialType(CreateBuyListInput) {
  @Field()
  id: number;
}
