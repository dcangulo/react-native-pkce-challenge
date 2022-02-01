const { test } = require('tap');
const { asyncPkceChallenge } = require('../index');

test('Verifier length must be 128 characters', async (t) => {
  const { codeVerifier } = await asyncPkceChallenge();

  t.equal(codeVerifier.length, 128);
  t.end();
});

test('Challenge length must be 43 characters', async (t) => {
  const { codeChallenge } = await asyncPkceChallenge();

  t.equal(codeChallenge.length, 43);
  t.end();
});

test('Verifier must match the pattern', async (t) => {
  const pattern = /^[A-Za-z\d\-._~]{43,128}$/;
  const { codeVerifier } = await asyncPkceChallenge();

  t.match(codeVerifier, pattern);
  t.end();
});

test('Challenge must not have [=+/]', async (t) => {
  const { codeChallenge } = await asyncPkceChallenge();

  t.notMatch(codeChallenge, '=');
  t.notMatch(codeChallenge, '+');
  t.notMatch(codeChallenge, '/');
  t.end();
});
