import { Field, InputType, OmitType } from "@nestjs/graphql";
import { BuyList } from "../entities/buy-list.entity";

@InputType()
export class CreateBuyListInput extends OmitType(BuyList, ['id', 'createdAt', 'updatedAt']) {
    @Field()
    name: string
}
