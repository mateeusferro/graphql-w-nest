import { Field, Int, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class Summary {
    @Field(() => String)
    category: string
    
    @Field(() => Int)
    pendingItems: number

    @Field(() => Int)
    purchasedItems: number
}
