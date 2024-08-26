import { Field, ID, InputType, Int } from '@nestjs/graphql';
import { CreateItemInput } from './create-item.input';
import { PartialType } from '@nestjs/mapped-types';

@InputType()
export class UpdateItemInput extends PartialType(CreateItemInput) {
  @Field(() => ID)
  id: number;
  
  @Field(() => String)
  name: string

  @Field(() => Int)
  quantity: number

  @Field(() => String)
  category: string

  @Field(() => Boolean)
  status: boolean

  @Field(() => Int)
  buyListId: number
}
