# Upgrading
## From 2.X.X to 3.X.X
Run the following:
* `yarn remove react-native-randombytes`
* `npx pod-install`

## From 1.X.X to 2.X.X
Change:
```js
import pkceChallenge from 'react-native-pkce-challenge';
```
To:
```js
import { asyncPkceChallenge } from 'react-native-pkce-challenge';
```
