#include "react-native-pkce-challenge.h"
#include "base64.h"
#include <jsi/jsi.h>
#include <vector>
#include <stdlib.h>

namespace pkcechallenge {
  std::string getRandomBase64String(double byte_length) {
    std::vector<uint8_t> buffer(byte_length, 0);
    arc4random_buf(&buffer[0], buffer.size());
    std::string encoded_data = base64_encode(&buffer[0], buffer.size());

    return encoded_data;
  }
}
