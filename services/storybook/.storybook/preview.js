import '@mypjt/themes/themes.css';
import "./style.css";
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { Global, css } from '@emotion/react';
/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    rootAttributesTooltip: true,
    rootAttributes: [
      {
        root: "body",
        attribute: "class",
        defaultState: {
          name: "light",
          value: 'theme-light',
        },
        states: [
          {
            name: "dark",
            value: 'theme-dark',
          }
        ]
      },
    ],
  },
};

const initTheme = () => {
  const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (isDarkTheme) {
    document.body.classList.add("theme-dark");
  }

  const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

  mediaQueryList.addEventListener("change", (e) => {
    if (e.matches) {
      document.body.classList.add("theme-dark");
    } else {
      document.body.classList.remove("theme-dark");
    }
  });
};

// initTheme();
export const decorators = [
  withThemeFromJSXProvider({
  }),
];
export default preview;