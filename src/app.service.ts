import { Injectable } from '@nestjs/common';
import { Context } from 'telegraf';
import { Message } from 'telegraf/typings/core/types/typegram';

@Injectable()
export class AppService {
  async getGitInformation(ctx: Context): Promise<Message.TextMessage> {
    return ctx.replyWithHTML(`
<b>⚪ git config --global user.name “Your Name</b>
      Set the name that will be attached to your commits and tags

<b>⚪ git config --global user.email “you@example.com”</b>
      Set the e-mail address that will be attached to your commits and tags.
    `);
  }
}
