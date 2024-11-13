package com.pkcechallenge

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule

import java.security.SecureRandom
import android.util.Base64

@ReactModule(name = PkceChallengeModule.NAME)
class PkceChallengeModule(reactContext: ReactApplicationContext) :
  NativePkceChallengeSpec(reactContext) {

  override fun getName(): String {
    return NAME
  }

  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  override fun getRandomBase64String(byteLength: Double): String {
    val bytes = ByteArray(byteLength)
    val secureRandom = SecureRandom()
    secureRandom.nextBytes(bytes)

    return Base64.encodeToString(bytes, Base64.NO_WRAP)
  }

  companion object {
    const val NAME = "PkceChallenge"
  }
}
