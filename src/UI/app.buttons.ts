import { Markup } from 'telegraf';

export function actionButtons() {
  return Markup.keyboard(
    [
      Markup.button.callback('Git', 'git'),
      Markup.button.callback('React', 'react'),
    ],
    {
      columns: 2,
    },
  );
}
