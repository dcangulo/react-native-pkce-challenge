cmake_minimum_required(VERSION 3.9.0)

set (PACKAGE_NAME "react-native-pkce-challenge")

add_library(
  randombytes
  SHARED
  ../../react-native/ReactCommon/jsi/jsi/jsi.cpp
  ../cpp/base64.cpp
  ../cpp/base64.h
  ../cpp/random-bytes.cpp
  ./cpp-adapter.cpp
)

include_directories(
  ../../react-native/React
  ../../react-native/React/Base
  ../../react-native/ReactCommon/jsi
  ../cpp
)

set_target_properties(
  randombytes PROPERTIES
  CXX_STANDARD 17
  CXX_EXTENSIONS OFF
  POSITION_INDEPENDENT_CODE ON
)

target_link_libraries(
  randombytes
  android
)
