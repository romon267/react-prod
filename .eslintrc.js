module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb',
    ],
    overrides: [
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    rules: {
        indent: [
            'error',
            4,
        ],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
        'linebreak-style': [
            'error',
            'unix',
        ],
        quotes: [
            'error',
            'single',
        ],
        semi: [
            'error',
            'never',
        ],
        'import/prefer-default-export': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'import/no-import-module-exports': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        'no-shadow': 'warn',
        'react/function-component-definition': 'off',
        'no-underscore-dangle': 'off',
    },
    globals: {
        __IS_DEV__: true,
    },
}
