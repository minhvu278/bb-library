import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { LanguagesModule } from './languages/languages.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { Languages } from './languages/entities/language.entity';
import { APP_PIPE } from '@nestjs/core';
import { AppService } from './app.service';
// import { User } from './users/entities/users.entity';
import { UsersModule } from './users/users.module';
import { AuthorsModule } from './authors/authors.module';
// import { Author } from './authors/entities/author.entity';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    LanguagesModule,
    UsersModule,
    AuthorsModule,
    BooksModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    },
  ],
})
export class AppModule {}
