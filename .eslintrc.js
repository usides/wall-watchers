module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ['airbnb-base'],
  plugins: ['babel', 'import', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': ['error'],
    'no-console': 0,
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        'operator-linebreak': 'off',
        'comma-dangle': [
          'error',
          {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always',
            exports: 'always',
            functions: 'never',
          },
        ],
      },
    },
  ],
};
