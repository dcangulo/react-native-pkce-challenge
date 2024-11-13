#import "PkceChallenge.h"

@implementation PkceChallenge
RCT_EXPORT_MODULE()

// Don't compile this code when we build for the old architecture.
#ifdef RCT_NEW_ARCH_ENABLED
- (NSString *)getRandomBase64String:(double)byte_length {
    NSString *encoded_data = [NSString stringWithUTF8String:pkcechallenge::getRandomBase64String(byte_length).c_str()];

    return encoded_data;
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativePkceChallengeSpecJSI>(params);
}
#endif

@end
