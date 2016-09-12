# eslint-plugin-jsfix

Javascript linter with autofix for .js files

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-jsfix`:

```
$ npm install eslint-plugin-jsfix --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-jsfix` globally.

## Usage

Add `jsfix` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "jsfix"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "jsfix/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





