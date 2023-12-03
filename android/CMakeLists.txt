cmake_minimum_required(VERSION 3.4.1)

set (CMAKE_VERBOSE_MAKEFILE ON)
set (CMAKE_CXX_STANDARD 11)

add_library(cpp
            SHARED
            ../node_modules/react-native/ReactCommon/jsi/jsi/jsi.cpp
            ../cpp/react-native-pkce-challenge.cpp
            ../cpp/base64.cpp
            cpp-adapter.cpp
)

# Specifies a path to native header files.
include_directories(
            ../node_modules/react-native/React
            ../node_modules/react-native/React/Base
            ../node_modules/react-native/ReactCommon/jsi
            ../cpp
)
