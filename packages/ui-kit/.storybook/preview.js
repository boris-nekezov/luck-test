export const parameters = {
  layout: 'centered',
  actions: { argTypesRegex: "^on[A-Z].*" },
  themes: {
    default: 'Light',
    list: [
      { name: 'Dark', class: 'dark', color: '#212429' },
      { name: 'Light', class: 'light', color: '#ffffff' }
    ],
  },
  controls: {
    expanded: true,
    matchers: {
      date: /Date$/,
    },
  },
}