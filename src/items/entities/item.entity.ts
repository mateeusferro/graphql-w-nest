import { Field, ID, Int, ObjectType } from "@nestjs/graphql"
import { Items } from "@prisma/client"

@ObjectType()
export class Item implements Items {
    @Field(() => ID)
    id: number
    
    @Field(() => String)
    name: string

    @Field(() => Int)
    quantity: number
    
    @Field(() => String)
    category: string
    
    @Field(() => String)
    status: boolean
    
    @Field(() => Int)
    buyListId: number

    @Field(() => Date)
    createdAt: Date
    
    @Field(() => Date)
    updatedAt: Date
}
