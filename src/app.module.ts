import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { LanguagesModule } from './languages/languages.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Languages } from './languages/entities/language.entity';
import { APP_PIPE } from '@nestjs/core';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Languages],
      synchronize: true,
    }),
    LanguagesModule,
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
