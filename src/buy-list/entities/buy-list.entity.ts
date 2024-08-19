import { Item } from "src/items/entities/item.entity"
import { BuyList as BuyListPrisma } from "@prisma/client"
import { Field, ID, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class BuyList implements BuyListPrisma {
    @Field(() => ID)
    id: number

    @Field(() => String)
    name: string

    @Field(() => Item)
    items: Item[]

    @Field(() => Date)
    createdAt: Date

    @Field(() => Date)
    updatedAt: Date
}
