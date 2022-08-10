# Upgrading
## From 4.X.X to Unreleased
* For `Expo` only, run `yarn remove expo-random buffer`.

Make the following changes:
```diff
- import { asyncPkceChallenge } from 'react-native-pkce-challenge';
+ import pkceChallenge from 'react-native-pkce-challenge';
```

## From 3.X.X to 4.X.X
* No actions required.

## From 2.X.X to 3.X.X
Run the following:
* `yarn remove react-native-randombytes`
* `npx pod-install`

## From 1.X.X to 2.X.X
Make the following changes:
```diff
- import pkceChallenge from 'react-native-pkce-challenge';
+ import { asyncPkceChallenge } from 'react-native-pkce-challenge';
```
