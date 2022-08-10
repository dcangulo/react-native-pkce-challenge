# Changelogs

# Unreleased
* Rewrite to C++ with JSI.
* Removed extra Expo dependencies.
* Removed `asyncPkceChallenge` support.

# 4.0.1 (2022-07-12)
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
