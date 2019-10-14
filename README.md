# Sharable ESlint config for React.js projects in TypeScript at Beequip. 

How to use:

yarn add --dev @beequip/eslint-config-typescript-react

Create a new .eslintrc.js file with the following content

```javascript
module.exports = {
    'extends': [
        '@beequip/eslint-config-typescript-react',
    ],
}
```

For more help see the sharable config instructions form the ESlint docs: https://eslint.org/docs/6.0.0/developer-guide/shareable-configs

Do not forget to add the following prettier override config in a .prettierrc file: 

```javascript
{
    "tabWidth": 4,
    "printWidth": 80,
    "semi": false,
    "singleQuote": true,
    "trailingComma": "es5"
}
```