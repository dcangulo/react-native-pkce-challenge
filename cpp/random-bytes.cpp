#include "random-bytes.h"
#include "base64.h"
#include <jsi/jsi.h>
#include <Security/SecRandom.h>
#include <vector>

using namespace facebook::jsi;
using namespace std;

namespace randombytes
{
  void install(Runtime &jsiRuntime)
  {
    auto randomBytes = Function::createFromHostFunction(jsiRuntime,
                                                        PropNameID::forAscii(jsiRuntime,
                                                                             "randomBytes"),
                                                        0,
                                                        [](Runtime &runtime,
                                                           const Value &thisValue,
                                                           const Value *arguments,
                                                           size_t count) -> Value
                                                        {
                                                          vector<uint8_t> randomBytes(96, 0);
                                                          SecRandomCopyBytes(kSecRandomDefault,
                                                                             randomBytes.size(),
                                                                             &randomBytes[0]);
                                                          string randomBytes = base64_encode(&randomBytes[0],
                                                                                             randomBytes.size());

                                                          return Value(runtime,
                                                                       String::createFromUtf8(runtime,
                                                                                              randomBytes));
                                                        });

    jsiRuntime.global().setProperty(jsiRuntime, "randomBytes", move(randomBytes));
  }
}
