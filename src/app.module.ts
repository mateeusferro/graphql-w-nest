import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { BuyListModule } from './buy-list/buy-list.module';
import { ItemsModule } from './items/items.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    BuyListModule,
    ItemsModule,
    PrismaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
