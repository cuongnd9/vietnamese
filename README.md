# viee

> ✂️🇻🇳 Công cụ chuyển đổi Tiếng Việt có dấu sang không dấu.

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg)](#contributors)
[![Build Status](https://travis-ci.com/cuongw/viee.svg?branch=master)](https://travis-ci.com/cuongw/viee)
![npm](https://img.shields.io/npm/v/viee.svg)
![david](https://img.shields.io/david/cuongw/viee.svg)
[![GitHub](https://img.shields.io/github/license/cuongw/viee.svg)](https://github.com/cuongw/viee/blob/master/LICENSE)

Viee giúp chuyển đổi Tiếng Việt có dấu sang không dấu. Dễ sử dụng, hỗ trợ cả JavaScript và TypeScript.

## Installation

```sh
yarn add viee
# or
npm install viee --save
```

## Usage

**For ES6 or ESNext**
```javascript
import { viee } from 'viee';
```

**For CommonJS**
```javascript
const { viee } = require('viee');
```

```javascript
console.log(viee('Xin chào Việt Nam!'));
```

```sh
Output should be 'Xin chao Viet Nam!'
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="http://cuongw.me"><img src="https://avatars0.githubusercontent.com/u/34389409?v=4" width="100px;" alt="Cuong Duy Nguyen"/><br /><sub><b>Cuong Duy Nguyen</b></sub></a><br /><a href="https://github.com/cuongw/viee/commits?author=cuongw" title="Code">💻</a> <a href="https://github.com/cuongw/viee/commits?author=cuongw" title="Documentation">📖</a> <a href="https://github.com/cuongw/viee/commits?author=cuongw" title="Tests">⚠️</a> <a href="#review-cuongw" title="Reviewed Pull Requests">👀</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [cuongw](https://github.com/cuongw)
