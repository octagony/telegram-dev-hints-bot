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

<b>⚪ git config --global color.ui auto </b> 
      Enable some colorization of Git output.

<b>⚪ git init [project name]</b>
      Create a new local repository. If [project name] is provided, Git will create a new directory name [project name] and will initialize a repository inside it. If [project name] is not provided, then a new repository is initialized in the current directory.

<b>⚪ git clone [project url]</b>
      Downloads a project with the entire history from the remote repository.

<b>⚪ git status</b>
      Displays the status of your working directory. Options include new, staged, and modified files. It will retrieve branch name, current commit identifier, and changes pending commit.
    `);
  }
}
