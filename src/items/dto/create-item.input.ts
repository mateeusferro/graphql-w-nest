import { Field, InputType, Int, OmitType } from "@nestjs/graphql"
import { Item } from "../entities/item.entity"

@InputType()
export class CreateItemInput extends OmitType(Item, ['id', 'createdAt', 'updatedAt']) {
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
