#import "RandomBytes.h"
#import <React/RCTBridge+Private.h>
#import <React/RCTUtils.h>
#import <jsi/jsi.h>
#import "random-bytes.h"

@implementation RandomBytes

@synthesize bridge = _bridge;
@synthesize methodQueue = _methodQueue;

RCT_EXPORT_MODULE();

+ (BOOL)requiresMainQueueSetup {
  return YES;
}

- (void)setBridge:(RCTBridge *)bridge {
  _bridge = bridge;
  _setBridgeOnMainQueue = RCTIsMainQueue();
  [self installLibrary];
}

- (void)installLibrary {
  RCTCxxBridge *cxxBridge = (RCTCxxBridge *)self.bridge;

  if (cxxBridge.runtime) {
    randombytes::install(*(facebook::jsi::Runtime *)cxxBridge.runtime);
  }
}

@end
