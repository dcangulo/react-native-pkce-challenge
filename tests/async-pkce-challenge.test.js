const {test} = require('tap')
const {asyncPkceChallenge} = require('../index')

test('Verifier length must be 128 characters', function(t) {
  asyncPkceChallenge().then(function(challenge) {
    t.is(challenge.codeVerifier.length, 128)
    t.end()
  })
})

test('Challenge length must be 43 characters', function(t) {
  asyncPkceChallenge().then(function(challenge) {
    t.is(challenge.codeChallenge.length, 43)
    t.end()
  })
})

test('Verifier must match the pattern', function(t) {
  const pattern = /^[A-Za-z\d\-._~]{43,128}$/

  asyncPkceChallenge().then(function(challenge) {
    t.match(challenge.codeVerifier, pattern)
    t.end()
  })
})

test('Challenge must not have [=+/]', function(t) {
  asyncPkceChallenge().then(function(challenge) {
    t.doesNotHave(challenge.codeChallenge, '=')
    t.doesNotHave(challenge.codeChallenge, '+')
    t.doesNotHave(challenge.codeChallenge, '/')
    t.end()
  })
})
