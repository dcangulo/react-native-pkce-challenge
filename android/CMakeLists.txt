cmake_minimum_required(VERSION 3.4.1)
project(PkceChallenge)

set (CMAKE_VERBOSE_MAKEFILE ON)
set (CMAKE_CXX_STANDARD 11)

add_library(cpp
            SHARED
            "${NODE_MODULES_DIR}/react-native/ReactCommon/jsi/jsi/jsi.cpp"
            ../cpp/react-native-pkce-challenge.cpp
            ../cpp/base64.cpp
            cpp-adapter.cpp
)

# Specifies a path to native header files.
include_directories(
            "${NODE_MODULES_DIR}/react-native/React"
            "${NODE_MODULES_DIR}/react-native/React/Base"
            "${NODE_MODULES_DIR}/react-native/ReactCommon/jsi"
            ../cpp
)
