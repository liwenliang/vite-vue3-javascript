module.exports = {
  root: true,
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-prettier'
  ],
  // https://stylelint.docschina.org/user-guide/rules/
  rules: {
  // 允许嵌套的深度最多 5 层
    'max-nesting-depth': 5,
    // 防止::deep报错
    'selector-pseudo-element-no-unknown': null,
    // 防止类似@mixin报错
    'at-rule-no-unknown': null
  }
}
