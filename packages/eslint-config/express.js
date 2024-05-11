/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:node/recommended',
    './base.js'
  ],
  env: {
    node: true
  }
};
