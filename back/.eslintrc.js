module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "react/jsx-filename-extension": "off",
    "react/jsx-one-expression-per-line": "off",
    "no-console": "off",
    "arrow-parens": "off",
    "comma-dangle": "off",
    "react/prop-types": "warn",
    "react/forbid-prop-types": "off",
    "react/require-default-props": "warn",
  },
};
