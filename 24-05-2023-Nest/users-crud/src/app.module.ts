import {
  Module,
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://0.0.0.0/esoft-nest-7s'),
    UserModule,
    BookModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule{}
