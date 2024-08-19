import { Field, InputType, OmitType } from "@nestjs/graphql"
import { Item } from "../entities/item.entity"

@InputType()
export class CreateItemInput extends OmitType(Item, ['id', 'createdAt', 'updatedAt']) {
    @Field()
    name2: String
}
