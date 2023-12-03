#import "PkceChallenge.h"
#import <React/RCTBridge+Private.h>
#import <React/RCTUtils.h>
#import <jsi/jsi.h>
#import "react-native-pkce-challenge.h"

@implementation PkceChallenge
RCT_EXPORT_MODULE()

RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(install) {
  RCTBridge* bridge = [RCTBridge currentBridge];
  RCTCxxBridge* cxxBridge = (RCTCxxBridge*)bridge;

  if (cxxBridge.runtime) {
    pkcechallenge::install(*(facebook::jsi::Runtime *)cxxBridge.runtime);
    return @true;
  } 

  return @false;
}

@end
