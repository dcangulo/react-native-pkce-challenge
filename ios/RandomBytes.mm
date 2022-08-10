#import "RandomBytes.h"
#import <React/RCTBridge+Private.h>
#import <React/RCTUtils.h>
#import <jsi/jsi.h>
#import "random-bytes.h"

@implementation RandomBytes

RCT_EXPORT_MODULE();

RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(install) {
  RCTBridge* bridge = [RCTBridge currentBridge];
  RCTCxxBridge* cxxBridge = (RCTCxxBridge*)bridge;

  if (cxxBridge.runtime) {
    randombytes::install(*(facebook::jsi::Runtime *)cxxBridge.runtime);
    return @true;
  } 

  return @false;
}

@end
