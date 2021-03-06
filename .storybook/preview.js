import '!style-loader!css-loader!@sebgroup/fonts/css/seb-fonts.css';
import '!style-loader!css-loader!@sebgroup/bootstrap/css/bootstrap.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
};
