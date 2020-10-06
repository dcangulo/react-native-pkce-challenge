# React Native PKCE Challenge
[![Package version](https://img.shields.io/npm/v/react-native-pkce-challenge?style=for-the-badge&labelColor=000000)](https://www.npmjs.com/package/react-native-pkce-challenge)
[![MIT license](https://img.shields.io/badge/License-MIT-brightgreen.svg?style=for-the-badge&labelColor=000000)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-hotpink.svg?style=for-the-badge&labelColor=000000)](https://github.com/drophive/react-native-pkce-challenge/pulls)

Proof Key for Code Exchange (PKCE) challenge generator for React Native.

## API Compatibility
Method                  |iOS                  |Android            |Web                |Windows             |macOS
:-----------------------|:--------------------|:------------------|:------------------|:-------------------|:-------------------
`asyncPkceChallenge`    |:white_check_mark:   |:white_check_mark: |:white_check_mark: |:x:                 |:x:
`pkceChallenge`         |:white_check_mark:   |:white_check_mark: |:white_check_mark: |:white_check_mark:  |:white_check_mark:

## Installation
```bash
yarn add react-native-pkce-challenge
npx pod-install # iOS Only
```

## Usage
### Asynchronous (Recommended for iOS / Android)
```js
import { asyncPkceChallenge } from 'react-native-pkce-challenge';

const challenge = await asyncPkceChallenge();
```

### Synchronous (Not recommended for iOS / Android)
```js
import { pkceChallenge } from 'react-native-pkce-challenge';

const challenge = pkceChallenge();
```

The constant `challenge` will hold an object like the following:
```js
{
  codeChallenge: 'XsRstqNrXT76Iop3uMoyyCQmaGthJbKKJwXBSoQXaRk',
  codeVerifier: 'OZOHUwLddiPyTFJulnUYnU9jsf7oyULflbFpwj40bE9S77iaeisGvzvaVvvPE7oO-xaV4skxwKDFBBV7JofVNxCgUSauqUDVcVjggE4-M6zthVUmeUrSAHatmIBm_P0_'
}
```

### Why asynchronous is recommended for iOS / Android?
[CryptoJS (version 3.3.0)](https://github.com/brix/crypto-js/tree/3.3.0) uses `Math.random()` which returns a value that is not cryptographically secure as native crypto module is not supported in React Native. In asynchronous we use native codes (Java / Objective-C) to generate cryptographically secure values.

In web this is not a problem since we are using [native crypto module](https://nodejs.org/api/crypto.html#crypto_crypto_randombytes_size_callback) which can give us cryptographically secure values.

## Upgrading
See [UPGRADING.md](UPGRADING.md)

## Changelogs
See [CHANGELOGS.md](CHANGELOGS.md)

## Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md)

## License
Copyright © 2020 David Angulo, released under the MIT license, see [LICENSE](LICENSE).
