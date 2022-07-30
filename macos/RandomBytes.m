#import "RandomBytes.h"

@implementation RandomBytes

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(randomBytes:(RCTPromiseResolveBlock)resolve)
{
  NSMutableData *bytes = [NSMutableData dataWithLength:96];
  SecRandomCopyBytes(kSecRandomDefault, 96, [bytes mutableBytes]);
  resolve(@[[bytes base64EncodedStringWithOptions:0]]);
}

@end
