#include <jni.h>
#include "react-native-pkce-challenge.h"

extern "C"
JNIEXPORT jstring JNICALL
Java_com_pkcechallenge_PkceChallengeManager_nativeGetRandomBase64String(JNIEnv *env, jclass type, jdouble byte_length) {
  std::string encoded_data = pkcechallenge::getRandomBase64String(byte_length);

  return env->NewStringUTF(encoded_data.c_str());
}
