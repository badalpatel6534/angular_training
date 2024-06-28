/** Example file/folder data. */
export const files = [
  {
    name: 'src',
    type: 'folder',
    children: [
      {
        name: 'app',
        type: 'folder',
        children: [
          { name: 'app.component.html', type: 'file' },
          { name: 'app.component.ts', type: 'file' },
          { name: 'app.component.css', type: 'file' },
          { name: 'app.module.ts', type: 'file' },
          {
            name: 'common',
            type: 'folder',
            children: [
              {
                name: 'components',
                type: 'folder',
                children: [
                  {
                    name: 'data-table',
                    type: 'folder',
                    children: [
                      { name: 'data-table.component.html', type: 'file' },
                      { name: 'data-table.component.ts', type: 'file' },
                      { name: 'data-table.component.css', type: 'file' }
                    ]
                  },
                  {
                    name: 'profile',
                    type: 'folder',
                    children: [
                      { name: 'profile.component.html', type: 'file' },
                      { name: 'profile.component.ts', type: 'file' },
                      { name: 'profile.component.css', type: 'file' }
                    ]
                  },
                ]
              },
              {
                name: 'pipes',
                type: 'folder',
                children: [
                  { name: 'age-from-date.pipe.ts', type: 'file' },
                  { name: 'currency-symbol.pipe.ts', type: 'file' },
                  { name: 'readable-date.pipe.ts', type: 'file' },
                  { name: 'reverse-array.pipe.ts', type: 'file' },
                ]
              },
              {
                name: 'directive',
                type: 'folder',
                children: [
                  { name: 'only-number.directive.ts', type: 'file' },
                  { name: 'debounce-click.directive.ts', type: 'file' },
                  { name: 'trim-text-input.directive.ts', type: 'file' },
                  { name: 'block-copy-paste.directive.ts', type: 'file' }
                ]
              },
              {
                name: 'services',
                type: 'folder',
                children: [
                 
                ]
              },
            ]
          },
        ]
      },
      {
        name: 'assets',
        type: 'folder',
        children: [
          {
            name: 'i18n',
            type: 'folder',
            children: [
              { name: 'en.json', type: 'file' },
              { name: 'gu.json', type: 'file' },
              { name: 'sp.json', type: 'file' },
              { name: 'fr.json', type: 'file' }
            ]
          },
          { name: 'icon.png', type: 'file' },
          { name: 'home.png', type: 'file' },
        ]
      },
      {
        name: 'environments',
        type: 'folder',
        children: [
          { name: 'environment.dev.ts', type: 'file' },
          { name: 'environment.stage.ts', type: 'file' },
          { name: 'environment.prod.ts', type: 'file' },
          { name: 'environment.ts', type: 'file' },
        ]
      },
      { name: 'favicon.ico', type: 'file' },
      { name: 'index.html', type: 'file' },
      { name: 'main.ts', type: 'file' },
      { name: 'styles.css', type: 'file' }
    ]
  },
  { name: 'angular.json', type: 'file' },
  { name: 'package.json', type: 'file' },
  { name: 'tsconfig.json', type: 'file' },
  { name: 'tslint.json', type: 'file' }
];
