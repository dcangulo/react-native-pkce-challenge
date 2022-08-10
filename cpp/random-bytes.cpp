#include "random-bytes.h"
#include "base64.h"
#include <jsi/jsi.h>
#include <vector>
#include <stdlib.h>

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
                                                          int byteLength = arguments[0].getNumber();
                                                          vector<uint8_t> buffer(byteLength, 0);
                                                          arc4random_buf(&buffer[0],
                                                                         buffer.size());

                                                          string encodedData = base64_encode(&buffer[0],
                                                                                             buffer.size());

                                                          return Value(runtime,
                                                                       String::createFromUtf8(runtime,
                                                                                              encodedData));
                                                        });

    Object RNPkceChallenge = Object(jsiRuntime);
    RNPkceChallenge.setProperty(jsiRuntime, "randomBytes", move(randomBytes));
    jsiRuntime.global().setProperty(jsiRuntime, "RNPkceChallenge", move(RNPkceChallenge));
  }
}
