#ifdef __cplusplus
#import "react-native-pkce-challenge.h"
#endif

#ifdef RCT_NEW_ARCH_ENABLED
#import "RNPkceChallengeSpec.h"

@interface PkceChallenge : NSObject <NativePkceChallengeSpec>
#else
#import <React/RCTBridgeModule.h>

@interface PkceChallenge : NSObject <RCTBridgeModule>
#endif

@end
