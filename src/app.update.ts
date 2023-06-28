import { InjectBot, Start, Update } from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';
import { actionButtons } from './UI/app.buttons';
import { AppService } from './app.service';

@Update()
export class AppUpdate {
  constructor(
    @InjectBot() private readonly bot: Telegraf<Context>,
    private readonly appService: AppService,
  ) {}

  @Start()
  async startCommand(ctx: Context): Promise<void> {
    await ctx.replyWithHTML(
      '<b>👋 Hi friend</b>. This bot gives cheat sheets on popular web technologies. You can both view them on Telegram and download a<b> 📝 PDF-file</b> for yourself',
    );
    await ctx.replyWithHTML('😉 Can i give you a hint?', actionButtons());
  }
}
