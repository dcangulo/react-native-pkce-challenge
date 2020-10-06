package com.drophive.randombytes;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import java.security.SecureRandom;
import android.util.Base64;

public class RandomBytesModule extends ReactContextBaseJavaModule {
  public RandomBytesModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return "RandomBytes";
  }

  @ReactMethod
  public void randomBytes(Callback callback) {
    byte[] bytes = new byte[96];
    SecureRandom secureRandom = new SecureRandom();
    secureRandom.nextBytes(bytes);
    callback.invoke(Base64.encodeToString(bytes, Base64.NO_WRAP));
  }
}
