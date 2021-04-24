module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-undef': 2,
        'no-extra-boolean-cast': 0,
        'semi': [0, 'always'],
        'indent': [2, 4, { 'SwitchCase': 1 }],
        'space-before-function-paren': 0,
        'arrow-parens': 0,
        'generator-star-spacing': 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'no-unused-expressions': 0,
        'eqeqeq': 0,
        'padded-blocks': 0,
        'array-bracket-spacing': 0,
        'quote-props': 0,
        'no-prototype-builtins': 0,
        'standard/no-callback-literal': 0,
        'no-useless-call': 0,
        'dot-notation': 0 // 关闭对象取值
    },
    globals: {
    }
}
