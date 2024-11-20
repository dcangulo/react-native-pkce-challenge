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
    val manager = PkceChallengeManager()

    return manager.getRandomBase64String(byteLength)
  }

  companion object {
    const val NAME = "PkceChallenge"
  }
}
