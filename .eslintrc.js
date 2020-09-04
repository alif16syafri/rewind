module.exports = {
  root: true,
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:testing-library/react',
  ],
  plugins: [
    'react-hooks',
    'testing-library',
  ],
  rules: {
    'prefer-destructuring': 'off',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    'no-prototype-builtins': 'off',
    'no-use-before-define': [
      'error',
      {
        variables: false,
      },
    ],
    'dot-notation': 'off',
    'no-plusplus': 'off',
    'camelcase': 'off',
    'import/no-extraneous-dependencies': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/html-has-lang': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/interactive-supports-focus': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'import/prefer-default-export': 'off',
    'import/no-dynamic-require': 'off',
    'import/extensions': 'off',
    'no-async-promise-executor': 'off',
    'react/no-unescaped-entities': 'off',
    'react/sort-comp': 'off',
    'react/prop-types': 'off',
    'react/no-unused-state': 'off',
    'react/no-did-mount-set-state': 'off',
    'react/require-default-props': 'off',
    'react/display-name': 'off',
    'react/jsx-filename-extension': 'off',
    'react/no-danger': 'off',
    'react/button-has-type': 'off',
    'react-hooks/rules-of-hooks': 'error',
    // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn',
    // testing-library
    'testing-library/await-async-query': 'error',
    'testing-library/no-await-sync-query': 'error',
    'testing-library/no-debug': 'warn',
    // Overwrite
    'react/jsx-indent': [
      'error',
      2,
    ],
    'react/jsx-indent-props': [
      'error',
      2,
    ],
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
      },
    ],
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
};
