# React Native PKCE Challenge
[![Package version](https://img.shields.io/npm/v/react-native-pkce-challenge?style=for-the-badge&labelColor=000000)](https://www.npmjs.com/package/react-native-pkce-challenge)
[![MIT license](https://img.shields.io/badge/License-MIT-brightgreen.svg?style=for-the-badge&labelColor=000000)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-hotpink.svg?style=for-the-badge&labelColor=000000)](https://github.com/drophive/react-native-pkce-challenge/pulls)

Proof Key for Code Exchange (PKCE) challenge generator for React Native.

## API Compatibility
Method               |iOS                |Android            |Web                |Windows            |macOS              |Expo
:--------------------|:------------------|:------------------|:------------------|:------------------|:------------------|:------------------
`asyncPkceChallenge` |:white_check_mark: |:white_check_mark: |:white_check_mark: |:x:                |:white_check_mark: |:white_check_mark:
`pkceChallenge`      |:white_check_mark: |:white_check_mark: |:white_check_mark: |:white_check_mark: |:white_check_mark: |:white_check_mark:

## Installation
```bash
yarn add react-native-pkce-challenge
npx pod-install # iOS Only
```

## Installation (Expo)
```bash
expo install react-native-pkce-challenge expo-random buffer
npx pod-install # iOS Only
```
> :bulb: If you use the Expo managed workflow you will see "CocoaPods is not supported in this project" - this is fine, it's not necessary.

## Usage
### Asynchronous (Recommended)
```js
import { asyncPkceChallenge } from 'react-native-pkce-challenge';

const challenge = await asyncPkceChallenge();
```

### Synchronous
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

## Upgrading
See [UPGRADING.md](UPGRADING.md)

## Changelogs
See [CHANGELOGS.md](CHANGELOGS.md)

## Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md)

## License
Copyright © 2022 David Angulo, released under the MIT license, see [LICENSE](LICENSE).
