module.exports = {
    'parser': '@typescript-eslint/parser',
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        'plugin:jest/recommended',
        'plugin:cypress/recommended',
    ],
    'env': {
        'browser': true,
        'node': true,
        'es6': true
    },
    'plugins': ['@typescript-eslint', 'prettier', 'react', 'react-hooks', 'jest'],
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module',
    },
    'globals': {
        'process': true,
        'console': true,
    },
    'rules': {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/no-object-literal-type-assertion': 'off',
        'react/display-name': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error', {
            'vars': 'all',
            'args': 'after-used',
            'ignoreRestSiblings': false,
        }],
        "no-console": "error",
    },
    'overrides': [
        {
            'files': ['*.js'],
            'rules': {
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
    ],
}
