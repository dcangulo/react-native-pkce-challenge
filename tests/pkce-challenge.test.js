const { test } = require('tap');
const pkceChallenge = require('../lib/commonjs').default;

test('Verifier length must be 128 characters', (t) => {
  const challenge = pkceChallenge();

  t.equal(challenge.codeVerifier.length, 128);
  t.end();
});

test('Challenge length must be 43 characters', (t) => {
  const challenge = pkceChallenge();

  t.equal(challenge.codeChallenge.length, 43);
  t.end();
});

test('Verifier must match the pattern', (t) => {
  const pattern = /^[A-Za-z\d\-._~]{43,128}$/;
  const challenge = pkceChallenge();

  t.match(challenge.codeVerifier, pattern);
  t.end();
});

test('Challenge must not have [=+/]', (t) => {
  const challenge = pkceChallenge();

  t.notMatch(challenge.codeChallenge, '=');
  t.notMatch(challenge.codeChallenge, '+');
  t.notMatch(challenge.codeChallenge, '/');
  t.end();
});
