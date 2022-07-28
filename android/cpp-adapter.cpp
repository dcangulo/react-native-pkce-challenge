#include <jni.h>
#include "random-bytes.h"

extern "C" JNIEXPORT void JNICALL
Java_com_randombytes_RandomBytesModule_nativeInstall(JNIEnv *env, jobject thiz, jlong jsi)
{
  auto runtime = reinterpret_cast<facebook::jsi::Runtime *>(jsi);

  if (runtime)
  {
    randombytes::install(*runtime);
  }
}
