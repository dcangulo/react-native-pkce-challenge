cmake_minimum_required(VERSION 3.4.1)

set (CMAKE_VERBOSE_MAKEFILE ON)
set (CMAKE_CXX_STANDARD 11)

add_library(
  randombytes
  SHARED
  ../../react-native/ReactCommon/jsi/jsi/jsi.cpp
  ../cpp/random-bytes.cpp
  ../cpp/base64.cpp
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
