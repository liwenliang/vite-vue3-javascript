module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    './.eslintrc-auto-import.json',
    'plugin:vue/vue3-essential',
    'standard'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
  }
}
