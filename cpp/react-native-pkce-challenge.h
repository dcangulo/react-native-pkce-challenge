#include <jsi/jsilib.h>
#include <jsi/jsi.h>

#ifndef PKCECHALLENGE_H
#define PKCECHALLENGE_H

namespace pkcechallenge {
  std::string getRandomBase64String(double byte_length);
}

#endif /* PKCECHALLENGE_H */
