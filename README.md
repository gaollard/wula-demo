# wula h5

wula template for h5 app

"extends": "./node_modules/wula/node_modules/eslint-config-react-app",

"eslint.nodePath": "../node_modules/wula/node_modules"


{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint"],
  "rules": {
    "no-alert": "error"
  }
}
