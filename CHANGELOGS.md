# Changelogs

## 6.2.0 (2025-09-01)
* Added React Native 0.80+ support.
* Enable 16 KB page size for Android.

## 6.1.0 (2024-12-15)
* Bumped base64 from `2.rc.08` to `2.rc.09`.
* Use built-in `btoa` method introduced in React Native 0.74 instead of a third-party dependency.
* Re-implement Android method to C++.

## 6.0.1 (2024-11-20)
* Fixed missing `react-native.config.js` file.

## 6.0.0 (2024-11-20)
* Rewrite to Turbo Native Module.
* Added support for New Architecture.
* Dropped support for Old Architecture.

## 5.3.2 (2024-06-22)
* Fixed node modules directory for Android builds. ([#454](https://github.com/dcangulo/react-native-pkce-challenge/pull/454) by [@rahulpatel](https://github.com/rahulpatel))

## 5.3.1 (2024-02-03)
* Fixed Android build issues on Windows.
* Fixed C++ JSI build issues. ([#405](https://github.com/dcangulo/react-native-pkce-challenge/pull/405) by [@cavanierc](https://github.com/cavanierc))

## 5.3.0 (2023-12-04)
* Added React Native 0.73+ support.
* Reduced dependency size by `89.77%` from `487 kB` to `49.8 kb`.
* Removed CMake warning during build.
* Exposed `generateChallenge` and `verifyChallenge` APIs.

## 5.2.1 (2023-11-30)
* Updated `crypto-js` from `3.3.0` to `4.2.0`. ([#345](https://github.com/dcangulo/react-native-pkce-challenge/pull/345) by [@bill-pairaktaridis](https://github.com/bill-pairaktaridis))

## 5.2.0 (2023-05-06)
* Added support for `ExpoCrypto` module. ([#264](https://github.com/dcangulo/react-native-pkce-challenge/pull/264) by [@Duell10111](https://github.com/Duell10111))

## 5.1.1 (2022-09-16)
* Fixed `ndkVersion` for Apple M1 Mac.

## 5.1.0 (2022-08-10)
* Used global bytelength variable.

## 5.0.1 (2022-08-10)
* Removed extra files published to npm.

## 5.0.0 (2022-08-10)
* Rewrite to C++ with JSI.
* Removed extra Expo dependencies.
* Removed `asyncPkceChallenge` support.

## 4.0.1 (2022-07-12)
* Fixed missing `macos` files.

## 4.0.0 (2022-07-10)
* Rewrite to TypeScript.

## 3.2.0 (2022-02-01)
* Migrate `.expo.js` files to support Expo SDK >= 40.
* Updated tests that uses deprecated methods.
* Updated eslint config.
* Added commit linter.

## 3.1.0 (2020-10-10)
* Added macOS `asyncPkceChallenge` support.
* Added Expo support.

## 3.0.0 (2020-10-09)
* Removed [`react-native-randombyes`](https://github.com/mvayngrib/react-native-randombytes) as a dependency.
* Created a bridge to (Java / Objective-C) to generate cryptographically secure randombytes.

## 2.1.1 (2020-09-02)
* Fixed error when using `pckeChallenge` on native apps.

## 2.1.0 (2020-08-29)
* Apply Airbnb JavaScript style guide.

## 2.0.0 (2020-08-21)
* Added synchronous support.

## 1.0.0 (2020-08-20)
* Initial release.
