import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';
import * as LocalSession from 'telegraf-session-local';
import { AppService } from './app.service';
import { AppUpdate } from './app.update';

const sessions = new LocalSession({
  database: 'session.db.json',
});

@Module({
  imports: [
    ConfigModule.forRoot({}),
    TelegrafModule.forRoot({
      middlewares: [sessions.middleware()],
      token: process.env.BOT_TOKEN,
    }),
  ],
  providers: [AppService, AppUpdate],
})
export class AppModule {}
