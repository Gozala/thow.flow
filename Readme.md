# throw.flow [![version][package.icon]][package] [![Build Status][travis.icon]][travis] [![styled with prettier][prettier.icon]][prettier] [![Gitter][gitter.icon]][gitter.icon]

# Install

```sh
yarn add throw.flow --save
```

or with npm

```sh
npm install throw.flow --save
```

# Import

```js
import crash from "throw.flow"
```

# API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

## throw

Just throws given `error`. Function is also generic and has a `output` type
parameter so that it's return type can be treated as anything you want.

```js
import crash from "throw.flow"
crash(new Error("Boom")) // => Error: Boom
```

**Parameters**

-   `error` **reason** 

Returns **output** 


[package]: https://npmjs.org/package/reflex

[package.icon]: https://img.shields.io/npm/v/reflex.svg?style=flat

[travis]: https://travis-ci.org/Gozala/reflex

[travis.icon]: https://img.shields.io/travis/Gozala/reflex.svg?style=flat

[prettier.icon]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg

[prettier]: https://github.com/prettier/prettier
