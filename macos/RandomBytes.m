#import "RandomBytes.h"

@implementation RandomBytes

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(randomBytes:(RCTResponseSenderBlock)callback)
{
  NSMutableData *bytes = [NSMutableData dataWithLength:96];
  SecRandomCopyBytes(kSecRandomDefault, 96, [bytes mutableBytes]);
  callback(@[[bytes base64EncodedStringWithOptions:0]]);
}

@end
