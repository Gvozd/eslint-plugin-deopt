# eslint-plugin-deopt

[![Build Status][travis-image]][travis-url]
[![npm version][npm-image]][npm-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![dependencies][deps-image]][deps-url]
[![devDependencies][dev-deps-image]][dev-deps-url]
[![peerDependencies][peer-deps-image]][peer-deps-url]

[![Downloads graph][downloads-graph-image]][downloads-url]

> Plugin for ESLint for find possible deoptimized code

## In progress, not stable

## Usage

1. Install `eslint-plugin-deopt` as a dev-dependency:

    ```shell
    npm install --save-dev eslint-plugin-deopt
    ```

2. Enable the plugin by adding it to your `.eslintrc`:

    ```yaml
    plugins:
      - deopt
    ```

## Rules
* uncached-parent-scope-ident


## Author

© 2016 Viktor Gvozdev <gvozdev.viktor@gmail.com> and [contributors][].

## License

Released under the [MIT license](https://opensource.org/licenses/MIT).



[travis-url]: https://travis-ci.org/Gvozd/eslint-plugin-deopt
[travis-image]: https://img.shields.io/travis/Gvozd/eslint-plugin-deopt.svg
[npm-url]: https://www.npmjs.com/package/eslint-plugin-deopt
[npm-image]: https://img.shields.io/npm/v/eslint-plugin-deopt.svg
[license-url]: https://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/npm/l/eslint-plugin-deopt.svg
[deps-url]: https://david-dm.org/Gvozd/eslint-plugin-deopt
[deps-image]: https://david-dm.org/Gvozd/eslint-plugin-deopt.png
[dev-deps-url]: https://david-dm.org/Gvozd/eslint-plugin-deopt?type=dev
[dev-deps-image]: https://david-dm.org/Gvozd/eslint-plugin-deopt/dev-status.png
[peer-deps-url]: https://david-dm.org/Gvozd/eslint-plugin-deopt?type=peer
[peer-deps-image]: https://david-dm.org/Gvozd/eslint-plugin-deopt/peer-status.png
[downloads-url]: https://www.npmjs.com/package/eslint-plugin-deopt
[downloads-image]: https://img.shields.io/npm/dm/eslint-plugin-deopt.svg?style=flat
[downloads-graph-image]: https://nodei.co/npm-dl/eslint-plugin-deopt.png?months=1
[npm-shield-image]: https://nodei.co/npm/eslint-plugin-deopt.png

[contributors]: https://github.com/Gvozd/eslint-plugin-deopt/graphs/contributors
