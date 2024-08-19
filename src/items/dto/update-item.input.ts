import { Field, ID, InputType } from '@nestjs/graphql';
import { CreateItemInput } from './create-item.input';
import { PartialType } from '@nestjs/mapped-types';

@InputType()
export class UpdateItemInput extends PartialType(CreateItemInput) {
  @Field(() => ID)
  id: number;
}
