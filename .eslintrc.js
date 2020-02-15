module.exports = {
  root: true,

  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },

  env: {
    browser: true
  },

  extends: [
    // https://eslint.vuejs.org/rules/#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // 'plugin:vue/recommended',
    // '@vue/standard',
    // 'vue',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],

  // required to lint *.vue files
  plugins: [
    'vue',
    'import'
  ],

  globals: {
    'ga': true, // Google Analytics
    'cordova': true,
    '__statics': true,
    'process': true,
    'Capacitor': true,
    'chrome': true,
    'Vue': true,
  },

  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow paren-less arrow functions
    'arrow-parens': 'off',
    'one-var': 'off',

    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prefer-promise-reject-errors': 'off',

    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // custom rules
    // https://eslint.org/docs/rules/
    "multiline": "never",
    // 不要なカッコは消す
    "no-extra-parens": 1,
    // 無駄なスペースは削除
    "no-multi-spaces": 2,
    // 関数とカッコはあけない(function hoge() {/** */})
    "func-call-spacing": [2, "never"],
    // セミコロンは禁止
    "semi": [2, "never"],
    // 文字列はシングルクオートのみ
    "quotes": [2, "single"],
    // varは禁止
    "no-var": 2,
    // jsのインデントは２
    "indent": ["error", 2],
    // かっこの中はスペースなし！違和感
    "space-in-parens": [2, "never"],
    // コンソールは許可
    "no-console": 0,
    // カンマの前後にスペース入れる？
    "comma-spacing": 2,
    // キー
    "key-spacing": 2,
    // キーワードの前後には適切なスペースを
    "keyword-spacing": 2,
    // <component> indent 2
    "vue/html-indent": ["error", 2],
    //
    "space-before-function-paren": [1, "never"],
  }
}
