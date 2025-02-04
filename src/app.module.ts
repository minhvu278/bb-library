import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { LanguagesModule } from './languages/languages.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Languages } from './languages/entities/language.entity';
import { APP_PIPE } from '@nestjs/core';
import { AppService } from './app.service';
import { User } from './users/entities/users.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Languages, User],
      synchronize: true,
    }),
    LanguagesModule,
    UsersModule,
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
