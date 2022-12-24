module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
  ],
  overrides: [
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: 'tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/no-unescaped-entities":"off",
    "@typescript-eslint/explicit-function-return-type": "off"
  }
}
