#include <jni.h>
#include "react-native-pkce-challenge.h"

extern "C"
JNIEXPORT jdouble JNICALL
Java_com_pkcechallenge_PkceChallengeModule_nativeInstall(JNIEnv *env, jobject thiz, jlong jsi) {
  auto runtime = reinterpret_cast<facebook::jsi::Runtime *>(jsi);

  if (runtime)
  {
    pkcechallenge::install(*runtime);
  }
}
