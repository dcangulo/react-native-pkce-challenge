package com.pkcechallenge

class PkceChallengeManager {
  companion object {
    init {
      System.loadLibrary("react-native-pkce-challenge")
    }

    @JvmStatic private external fun nativeGetRandomBase64String(byteLength: Double): String
  }
  
  fun getRandomBase64String(byteLength: Double): String = nativeGetRandomBase64String(byteLength)
}
