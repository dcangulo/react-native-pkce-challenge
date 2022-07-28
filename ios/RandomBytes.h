#import <React/RCTBridgeModule.h>
#import "random-bytes.h"

@interface RandomBytes : NSObject <RCTBridgeModule>

@property(nonatomic, assign) BOOL setBridgeOnMainQueue;

@end
